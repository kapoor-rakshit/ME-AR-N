import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {City} from './cityinterface';
import {CityService} from './city_service';
import { UserService } from '../userComponent/user_service';

@Component({
    templateUrl: './adminCityComp.html',
    styleUrls: ['./adminComp.css']
  })

export class AdminCityComp implements OnInit{

    cities: City[];
    resp: any={};
    cityname: any;

    constructor(private _cityService: CityService,private _userService: UserService, private router: Router){
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
        this._cityService.getCity(id).subscribe(
            (resp: any) =>{
                this.resp = resp;
                this.cityname = this.resp.name;
                this._userService.checkCity(this.cityname).subscribe(
                    (resp: any)=>{
                        this.resp = resp;
                        if(this.resp.counter == 0){
                            this._cityService.deleteCity(id).subscribe(
                                (data: any) => {
                                    this.getCities();
                                },
                                err => console.log(err)
                            );
                        }
                        else{
                            alert("CANNOT DELETE CITY as it is BOOKED.");
                        }
                    },
                    err => console.log(err)
                );
            },
            err => console.log(err)
        );
    }

}