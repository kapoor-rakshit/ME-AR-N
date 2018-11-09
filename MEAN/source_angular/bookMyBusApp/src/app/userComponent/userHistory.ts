import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from './user_service';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    templateUrl: './userHistory.html',
    styleUrls: ['./userComp.css']
  })

  export class UserHistory implements OnInit{

    userid: any;
    data: any = [];

    constructor(private route: ActivatedRoute, private _userService: UserService, private spinnerService: Ng4LoadingSpinnerService){
      this.route.params.forEach((params: Params) => {
        this.userid = params['userid'];                      // + signifies that it is a number, so removed
    });

      this.spinnerService.show();
      this._userService.getHistory(this.userid).subscribe(
        (data: any) =>{
          this.data = data;
          this.spinnerService.hide();
        },
        err => console.log(err)
      );
    }

    ngOnInit(){
    }

    
  }