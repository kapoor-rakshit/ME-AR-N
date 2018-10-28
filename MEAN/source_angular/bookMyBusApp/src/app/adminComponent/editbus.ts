import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { BusService } from './bus_service';

@Component({
    templateUrl: './editbus.html',
    styleUrls: ['./adminComp.css']
  })

export class EditBus implements OnInit{

    fromcityvals: string[] = ["ATQ", "JAL", "CCU", "HYD", "PNQ"];
    tocityvals: string[] = ["ATQ", "JAL", "CCU", "HYD", "PNQ"];

    id: any;
    bus:any = {};

    constructor(private _busService: BusService, private route: ActivatedRoute, private router: Router){
        this.route.params.forEach((params: Params) => {
            this.id = params['id'];                      // + signifies that it is a number, so removed
        });
        this._busService.getBus(this.id).subscribe(     // pass values fetched from URL in subscribe()
            (resp:any) => this.bus = resp,
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
    
         this._busService.updateBus(updatedbus, this.id).subscribe(
           (data:any) => this.router.navigate(['adminconsole/buses']),
           err => console.log(err)
         );
      }
}