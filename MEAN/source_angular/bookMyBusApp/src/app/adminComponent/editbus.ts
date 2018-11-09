import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BusService } from './bus_service';
import { CityService } from './city_service';
import { City } from './cityinterface';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    templateUrl: './editbus.html',
    styleUrls: ['./adminComp.css']
  })

export class EditBus implements OnInit{

    fromcityvals: string[] = [];
    tocityvals: string[] = [];
    citydata: City[];
    id: any;
    bus:any = {};

    constructor(private _busService: BusService, private _cityService: CityService, private route: ActivatedRoute, private router: Router, private spinnerService: Ng4LoadingSpinnerService){
        this.route.params.forEach((params: Params) => {
            this.id = params['id'];                      // + signifies that it is a number, so removed
        });
        this.spinnerService.show();
        this._busService.getBus(this.id).subscribe(     // pass values fetched from URL in subscribe()
            (resp:any) => {
                this.bus = resp;
                this.spinnerService.hide();
            },
            err => console.log(err)
        );
        this.spinnerService.show();
        this._cityService.getCities().subscribe(
            (data: any) => {
                this.citydata = data;
                this.citydata.forEach(city => {this.fromcityvals.push(city.name);this.tocityvals.push(city.name);});
                this.spinnerService.hide();
            },
            err => console.log(err)
        );
    }

    ngOnInit(){
    }

    onSubmit(formValue: any){
        let updatedbus = {
              routeno: formValue.routeno,
              desc: formValue.desc,
              fromcity: formValue.fromcity,
              tocity: formValue.tocity,
              capacity: formValue.capacity
            };
            
            this.spinnerService.show();
         this._busService.updateBus(updatedbus, this.id).subscribe(
           (data:any) => {
               this.spinnerService.hide();
               this.router.navigate(['adminconsole/buses']);
           },
           err => console.log(err)
         );
      }
}