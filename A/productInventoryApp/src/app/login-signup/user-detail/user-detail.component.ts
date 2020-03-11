import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  firstName: string = "User's name";
  lastName: string = "User's name";
  email: string = "User's email";
  location: string = "User's location";
  mobileNumber: string = "User's mobile number";

  id: any;
  userData: any = {};

  constructor(private route: ActivatedRoute) { 
    this.route.params.forEach((param: Params) => {
      this.id = +param['id'];
    });
  }

  ngOnInit() {
    // get user details from server using id and populate userData
  }

}
