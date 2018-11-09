import { Component, OnInit } from '@angular/core';
import { CityService } from './city_service';
import { City } from './cityinterface';
import { ActivatedRoute, Params } from '@angular/router';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    templateUrl: './topCities.html',
    styleUrls: ['./adminComp.css']
  })

export class TopCities implements OnInit{

    cities: City[];

    constructor(private _cityService: CityService, private route: ActivatedRoute, private spinnerServive: Ng4LoadingSpinnerService){
        this.spinnerServive.show();
        this.getTopCities();
        this.spinnerServive.hide();
    }

    getTopCities(){
        this._cityService.getTopCities().subscribe(
            (data: any) => {
                this.cities = data;
            },
            err => console.log(err)
        );
    }

    ngOnInit(){
    }

}