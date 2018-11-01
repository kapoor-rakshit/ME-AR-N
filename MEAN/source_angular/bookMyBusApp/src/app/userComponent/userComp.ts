import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusService } from '../adminComponent/bus_service';
import { Bus } from '../adminComponent/businterface';

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

    constructor(private _busService: BusService){
        this._busService.getBuses().subscribe(
            (data: any) => {
                this.buses = data;
            },
            err => console.log(err)
        );
    }

    ngOnInit(){
    }
    
}