import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusService } from './bus_service';
import { CityService } from './city_service';
import { City } from './cityinterface';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    templateUrl: './addbus.html',
    styleUrls: ['./adminComp.css']
  })

export class AddBus implements OnInit{

    routeno: String;
    desc: String;
    capacity: Number;
    fromcityvals: string[] = [];
    tocityvals: string[] = [];
    citydata: City[];

    constructor(private _busService: BusService, private _cityService: CityService, private router: Router, private spinnerService: Ng4LoadingSpinnerService){
      
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
        
        let newBus = {
              routeno: formValue.routeno,
              desc: formValue.desc,
              fromcity: formValue.fromcity,
              tocity: formValue.tocity,
              capacity: formValue.capacity
            };
        
        this.spinnerService.show();
        this._busService.addBus(newBus).subscribe(
          (data:any) => {
            this.spinnerService.hide();
            this.router.navigate(["/adminconsole/buses/"]);
        },
          err => console.log(err)
        );
      }

}