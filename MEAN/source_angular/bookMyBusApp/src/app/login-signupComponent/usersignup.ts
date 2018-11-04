import { Component, OnInit } from '@angular/core';
import {loginsignupService} from "./login-signupService";
import { Router } from '@angular/router';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  templateUrl: './usersignup.html'
})

export class UserSignup implements OnInit{
  password: String;
  cnfpassword: String;
  show: boolean = false;
  title: String = 'Register';
  data: any = {};
  userid: any;

  constructor(private _loginsignupservice: loginsignupService, private router: Router, private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit(){
  }

  toggleshow(){
    this.show = !this.show;
  }

  onSubmit(formValue: any){
    let userdata = {
    mail : formValue.email,
    pass : formValue.password,
    firstname: formValue.firstname,
    lastname: formValue.lastname,
    location: formValue.location,
    mobile: formValue.mobile
    };
    this.spinnerService.show();
    this._loginsignupservice.signupuser(userdata).subscribe(
      (data:any) => {
       this.data = data;
       this.spinnerService.hide();
       if(this.data.valid == "false"){
        alert("USER ALREADY EXISTs");
      }
      else{
        this.userid = this.data._id;
        this.router.navigate(["userconsole/buses", this.userid]);
      }
      },
      err => console.log(err)
    );
  }
}
