import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { BusService } from '../adminComponent/bus_service';

@Component({
    templateUrl: './bookBus.html',
    styleUrls: ['./userComp.css']
  })

  export class BookBus implements OnInit{

    id: any;
    bus:any = {};
    capacity: number;

    constructor(private _busService: BusService, private route: ActivatedRoute, private router: Router){
      this.route.params.forEach((params: Params) => {
        this.id = params['id'];                      // + signifies that it is a number, so removed
      });
    this._busService.getBus(this.id).subscribe(     // pass values fetched from URL in subscribe()
        (resp:any) => {
          this.bus = resp;
          this.capacity = this.bus.capacity;
        },
        err => console.log(err)
      );
    }

    ngOnInit(){
      var now = new Date();

      var day = now.getDate();
      var month = now.getMonth() + 1;

      var dayval = "";
      var monthval="";

      if(day<10) dayval = "0" + day;
      else dayval = "" + day;

      if(month<10) monthval = "0" + month;
      else monthval = "" + month;
    
      var today = now.getFullYear() + "-" + monthval + "-" + dayval;
    
      document.getElementById("date").setAttribute('min',today);
    }

    onSubmit(formValue: any){
     // check date, id of bus in bookinghistory table
    }

  }