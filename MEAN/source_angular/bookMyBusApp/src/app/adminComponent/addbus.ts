import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusService } from './bus_service';
import { CityService } from './city_service';
import { City } from './cityinterface';

@Component({
    templateUrl: './addbus.html',
    styleUrls: ['./adminComp.css']
  })

export class AddBus implements OnInit{

    fromcityvals: string[] = [];
    tocityvals: string[] = [];
    citydata: City[];

    constructor(private _busService: BusService, private _cityService: CityService, private router: Router){
       this._cityService.getCities().subscribe(
        (data: any) => {
          this.citydata = data;
          this.citydata.forEach(city => {this.fromcityvals.push(city.name);this.tocityvals.push(city.name);});
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

        this._busService.addBus(newBus).subscribe(
          (data:any) => this.router.navigate(["/adminconsole/buses/"]),
          err => console.log(err)
        );
      }

}