import { Component, OnInit } from '@angular/core';
import { UserService } from '../userComponent/user_service';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    templateUrl: './bookingHistory.html',
    styleUrls: ['./adminComp.css']
  })

export class BookingHistory implements OnInit{

    data: any=[];

    constructor(private _userService: UserService, private spinnerService: Ng4LoadingSpinnerService){
        this.spinnerService.show();
       this._userService.getAllBookings().subscribe(
        (resp: any) => {
            this.data = resp;
            this.spinnerService.hide();
        },
        err => console.log(err)
       );
    }

    ngOnInit(){
    }

}