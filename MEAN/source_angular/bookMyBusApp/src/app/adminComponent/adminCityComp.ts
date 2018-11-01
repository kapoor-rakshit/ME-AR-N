import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {City} from './cityinterface';
import {CityService} from './city_service';

@Component({
    templateUrl: './adminCityComp.html',
    styleUrls: ['./adminComp.css']
  })

export class AdminCityComp implements OnInit{

    cities: City[];

    constructor(private _cityService: CityService, private router: Router){
        this.getCities();
    }

    ngOnInit(){
    }

    getCities(){
        this._cityService.getCities().subscribe(
            (data: any) => {
                this.cities = data;
            },
            err => console.log(err)
        );
    }

    deletecity(id){
            // check if city is not booked for present/future dates, then delete else not

        this._cityService.deleteCity(id).subscribe(
            (data: any) => {
                this.getCities();
            },
            err => console.log(err)
        );
    }

}