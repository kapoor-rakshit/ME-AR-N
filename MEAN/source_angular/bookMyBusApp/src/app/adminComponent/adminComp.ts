import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from './businterface';
import { BusService } from './bus_service';
import { UserService } from '../userComponent/user_service';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';


@Component({
    templateUrl: './adminComp.html',
    styleUrls: ['./adminComp.css']
  })

export class AdminComp implements OnInit{

    descFilter: string;
    routenov: boolean = true;
    descv: boolean = true;
    fromcityv: boolean = true;
    tocityv: boolean = true;
    capacityv: boolean = true;
    buses: Bus[];
    resp: any = {};
    routeno: any;

    constructor(private _busService: BusService, private _userService: UserService, private router: Router, private spinnerService: Ng4LoadingSpinnerService){
        this.spinnerService.show();
        this.getBuses();           // for reloading page when navigated here from other component
        this.spinnerService.hide();
    }

    ngOnInit(){
    }

    getBuses(){
        this._busService.getBuses().subscribe(
            (data: any) => {
                this.buses = data;
            },
            err => console.log(err)
        );
    }

    updatebus(id){

        // check if bus is not booked for present/future dates, then update else not
        this.spinnerService.show();
        this._busService.getBus(id).subscribe(
            (resp: any)=>{
                this.resp = resp;
                this.routeno = this.resp.routeno;
                this._userService.checkBusForUD(this.routeno).subscribe(
                    (resp: any) =>{
                        this.resp = resp;
                        if(this.resp.counter == 0){
                            this.router.navigate(["adminconsole/buses/editbus",id]);
                        }
                        else{
                            alert("CANNOT UPDATE BUS as it is BOOKED.");
                        }
                    },
                    err => console.log(err)
                );
                this.spinnerService.hide();
            },
            err => console.log(err)
        );
    }

    deletebus(id){

        // check if bus is not booked for present/future dates, then delete else not
        this.spinnerService.show();
        this._busService.getBus(id).subscribe(
            (resp: any)=>{
                this.resp = resp;
                this.routeno = this.resp.routeno;
                this._userService.checkBusForUD(this.routeno).subscribe(
                    (resp: any) =>{
                        this.resp = resp;
                        if(this.resp.counter == 0){
                            this._busService.deleteBus(id).subscribe(
                                (data: any) => {
                                    this.getBuses();
                                },
                                err => console.log(err)
                            );
                        }
                        else{
                            alert("CANNOT DELETE BUS as it is BOOKED.");
                        }
                    },
                    err => console.log(err)
                );
                this.spinnerService.hide();
            },
            err => console.log(err)
        );
    }
}