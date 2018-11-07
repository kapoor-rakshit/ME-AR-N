import { Component, OnInit } from '@angular/core';
import { UserService } from '../userComponent/user_service';

@Component({
    templateUrl: './bookingHistory.html',
    styleUrls: ['./adminComp.css']
  })

export class BookingHistory implements OnInit{

    data: any=[];

    constructor(private _userService: UserService){
       this._userService.getAllBookings().subscribe(
        (resp: any) => {
            this.data = resp;
        },
        err => console.log(err)
       );
    }

    ngOnInit(){
    }

}