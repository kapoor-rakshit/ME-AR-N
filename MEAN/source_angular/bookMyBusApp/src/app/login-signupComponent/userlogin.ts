import { Component, OnInit } from '@angular/core';
import {loginsignupService} from "./login-signupService";
import { Router } from '@angular/router';

import { Ng4LoadingSpinnerService } from 'ng4-loading-spinner';

@Component({
  templateUrl: './user_adminlogin.html'
})

export class UserLogin implements OnInit{
  title = 'Login';
  stmt = "Don't have an account ?";
  loginstmt = "Login as ADMIN";
  loginurl = "/auth/admin/";
  show: boolean = false;
  data: any = {};

  constructor(private _loginsignupservice: loginsignupService, private router: Router, private spinnerService: Ng4LoadingSpinnerService) { }

  ngOnInit(){
  }

  toggleshow(){
    this.show = !this.show;
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
          this.router.navigate([""]);
        }
      },
      err => console.log(err)
    );
  }
}
