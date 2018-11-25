import { Component, OnInit } from '@angular/core';
import {loginsignupService} from "./login-signupService";
import { Router } from '@angular/router';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  templateUrl: './user_adminlogin.html'
})

export class UserLogin implements OnInit{
  email: String;
  password: String;
  title = 'Login';
  stmt = "Don't have an account ?";
  orstmt = "";
  loginstmt = "Login as ADMIN";
  loginurl = "/auth/admin/";
  show: boolean = false;
  data: any = {};
  userid: any;

  constructor(private _loginsignupservice: loginsignupService, private router: Router, private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit(){
  }

  toggleshow(){
    this.show = !this.show;
  }

  onSignIn(googleUser) {
    var profile = googleUser.getBasicProfile();
    let userdata = {
      mail : profile.getEmail(),
      pass : "",
      firstname: profile.getName(),
      lastname: "",
      location: "",
      mobile: ""
      };

    console.log('Name: ' + profile.getName());
    console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.

    this.spinnerService.show();
    this._loginsignupservice.signinusergoogle(userdata).subscribe(
      (data:any) => {
        this.data = data;
        this.spinnerService.hide();
        this.userid = this.data._id;
        this.router.navigate(["userconsole/buses", this.userid]);
      },
      err => console.log(err)
    );
  }

  onSubmit(formValue: any){
    let userdata = {
    usermail : formValue.email,
    userpass : formValue.password
    };
    this.spinnerService.show();
    this._loginsignupservice.loginuser(userdata).subscribe(
      (data:any) => {
        this.data = data;
        this.spinnerService.hide();
        if(this.data.valid == "false"){
          alert("INVALID CREDENTIALS or USER does not EXIST");
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
