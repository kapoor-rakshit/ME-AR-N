import { Component, OnInit } from '@angular/core';
import {loginsignupService} from "./login-signupService";
import { Router } from '@angular/router';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  templateUrl: './user_adminlogin.html'
})

export class AdminLogin implements OnInit{
  email: String;
  password: String;
  title = 'Admin Login';
  stmt = "Not an ADMIN ?";
  loginstmt = "Login";
  orstmt = "or";
  loginurl = "/auth/user/";
  show: boolean = false;
  adminmail: String;
  adminpass: String;
  data : any = {};

  constructor(private _loginsignupservice: loginsignupService, private router: Router, private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit(){
  }

  toggleshow(){
    this.show = !this.show;
  }

  onSubmit(formValue: any){
    let admindata = {
    adminmail : formValue.email,
    adminpass : formValue.password
    };
    this.spinnerService.show();
    this._loginsignupservice.loginadmin(admindata).subscribe(
      (data:any) => {
      this.data = data;
      this.spinnerService.hide();
      if(this.data.valid == "false"){
        alert("INVALID CREDENTIALS or ADMIN does not EXIST");
      }
      else{
        this.router.navigate(["adminconsole/buses"]);
      }
      },
      err => console.log(err)
    );
  }
}
