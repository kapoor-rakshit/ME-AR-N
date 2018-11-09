import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BusService } from '../adminComponent/bus_service';
import { Bus } from '../adminComponent/businterface';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    templateUrl: './userComp.html',
    styleUrls: ['./userComp.css']
  })

export class UserComp implements OnInit{

    descFilter: string;
    routenov: boolean = true;
    descv: boolean = true;
    fromcityv: boolean = true;
    tocityv: boolean = true;
    buses: Bus[];
    userid: any;

    constructor(private _busService: BusService, private route: ActivatedRoute, private spinnerService: Ng4LoadingSpinnerService){
        this.route.params.forEach((params: Params) => {
            this.userid = params['userid'];                      // + signifies that it is a number, so removed
        });

        this.spinnerService.show();
        this._busService.getBuses().subscribe(
            (data: any) => {
                this.buses = data;
                this.spinnerService.hide();
            },
            err => console.log(err)
        );
    }

    ngOnInit(){
    }
    
}