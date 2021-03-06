import { Component, OnInit } from '@angular/core';
import {loginsignupService} from "./login-signupService";
import { Router } from '@angular/router';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

declare var gapi: any; 

@Component({
  templateUrl: './usersignup.html'
})

export class UserSignup implements OnInit{
  email: String;
  firstname: String;
  lastname: String;
  location: String;
  mobile: String;
  password: String;
  cnfpassword: String;
  show: boolean = false;
  title: String = 'Register';
  data: any = {};
  userid: any;

  constructor(private _loginsignupservice: loginsignupService, private router: Router, private spinnerService: Ng4LoadingSpinnerService) {}

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
        this.userid = this.data._id;
        this.spinnerService.hide();
        this.router.navigate(["userconsole/buses", this.userid]);
      },
      err => console.log(err)
    );
  }

  ngOnInit(){
    gapi.signin2.render('signinbt', {
      'scope': 'profile email',
      'width': 240,
      'height': 50,
      'longtitle': true,
      'theme': 'dark',
      'onsuccess': this.onSignIn
    });
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
