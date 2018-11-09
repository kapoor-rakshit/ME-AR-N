import { Component, OnInit } from '@angular/core';
import { Params, ActivatedRoute } from '@angular/router';
import { UserService } from './user_service';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
    templateUrl: './userDetails.html',
    styleUrls: ['./userComp.css']
  })

  export class UserDetails implements OnInit{

    userid: any;
    data: any = {};

    constructor(private route: ActivatedRoute, private _userService: UserService, private spinnerService: Ng4LoadingSpinnerService){
      this.route.params.forEach((params: Params) => {
        this.userid = params['userid'];                      // + signifies that it is a number, so removed
    });

      this.spinnerService.show();
      this._userService.getDetails(this.userid).subscribe(
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