import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BusService } from './bus_service';

@Component({
    templateUrl: './addbus.html',
    styleUrls: ['./adminComp.css']
  })

export class AddBus implements OnInit{

    fromcityvals: string[] = ["ATQ", "JAL", "CCU", "HYD", "PNQ"];
    tocityvals: string[] = ["ATQ", "JAL", "CCU", "HYD", "PNQ"];

    constructor(private _busService: BusService, private router: Router){}

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