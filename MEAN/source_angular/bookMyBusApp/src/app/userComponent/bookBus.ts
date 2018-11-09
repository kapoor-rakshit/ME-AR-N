import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params} from '@angular/router';
import { BusService } from '../adminComponent/bus_service';
import { UserService } from './user_service';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';
import { CityService } from '../adminComponent/city_service';

@Component({
    templateUrl: './bookBus.html',
    styleUrls: ['./userComp.css']
  })

  export class BookBus implements OnInit{

    date: String;
    seats: Number;
    id: any;
    userid: any;
    bus:any = {};
    capacity: number;
    data: any = [];
    bookedseats: number = 0;

    constructor(private _busService: BusService,private _cityService: CityService ,private _userService: UserService, private route: ActivatedRoute, private router: Router, private spinnerService: Ng4LoadingSpinnerService){
      this.route.params.forEach((params: Params) => {
        this.id = params['id'];                      // + signifies that it is a number, so removed
        this.userid = params['userid'];
      });
      this.spinnerService.show();
    this._busService.getBus(this.id).subscribe(     // pass values fetched from URL in subscribe()
        (resp:any) => {
          this.bus = resp;
          this.capacity = this.bus.capacity;
          this.spinnerService.hide();
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
     // check date, id of bus , no. of seats in bookinghistory table
     this.spinnerService.show();
     this._userService.checkBus(formValue.date, formValue.routeno, this.userid, this.id).subscribe(
        (data: any) => {
          this.data = data;
          this.bookedseats = 0;
          this.data.forEach(s => {this.bookedseats = this.bookedseats + s.seats;});
          this.spinnerService.hide();
          if(this.capacity-this.bookedseats >= formValue.seats){
            let newBooking = {
              routeno: formValue.routeno,
              desc: formValue.desc,
              fromcity: formValue.fromcity,
              tocity: formValue.tocity,
              seats: formValue.seats,
              date: formValue.date
            };
            this.spinnerService.show();
            this._userService.bookBus(newBooking, this.userid, this.id).subscribe(
              (data: any) =>{
                this._cityService.incrementCounter(formValue.tocity).subscribe(
                  (data: any) =>{
                    alert("TICKET BOOKED.\nYou will receive an email confirmation shortly.");
                    this.router.navigate(["/userconsole/history", this.userid]);
                  },
                  err => console.log(err)
                );
                this.spinnerService.hide();
              },
              err => console.log(err)
            );
          }
          else{
            let left = this.capacity-this.bookedseats;
            if(left>0)
              alert("Sorry, Only " + left + " seat(s) left for this date");
            else
              alert("Sorry, No seats left for this date");
          }
        },
        err => console.log(err)
     );
    }

  }