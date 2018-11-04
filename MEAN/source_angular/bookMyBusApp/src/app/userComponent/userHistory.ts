import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { UserService } from './user_service';

@Component({
    templateUrl: './userHistory.html',
    styleUrls: ['./userComp.css']
  })

  export class UserHistory implements OnInit{

    userid: any;
    data: any = [];

    constructor(private route: ActivatedRoute, private _userService: UserService){
      this.route.params.forEach((params: Params) => {
        this.userid = params['userid'];                      // + signifies that it is a number, so removed
    });

      this._userService.getHistory(this.userid).subscribe(
        (data: any) =>{
          this.data = data;
        },
        err => console.log(err)
      );
    }

    ngOnInit(){
    }

    
  }