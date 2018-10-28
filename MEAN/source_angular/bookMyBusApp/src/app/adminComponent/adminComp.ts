import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Bus } from './businterface';
import { BusService } from './bus_service';


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

    constructor(private _busService: BusService, private router: Router){
        this.getBuses();           // for reloading page when navigated here from other component
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

        this.router.navigate(["adminconsole/buses/editbus",id]);
    }

    deletebus(id){

        // check if bus is not booked for present/future dates, then delete else not

        this._busService.deleteBus(id).subscribe(
            (data: any) => {
                this.getBuses();
            },
            err => console.log(err)
        );
    }
}