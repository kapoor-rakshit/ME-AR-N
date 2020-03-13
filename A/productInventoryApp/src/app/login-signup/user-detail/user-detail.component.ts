import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { AuthService } from '../auth.service';
import { User } from '../user';

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
  mobileNumber: number = 11111;

  id: any;

  constructor(private route: ActivatedRoute, private _authService: AuthService) { 
    this.route.params.forEach((param: Params) => {
      this.id = +param['id'];
    });
  }

  ngOnInit() {
    // get user details from server using id and populate userData
    this._authService.getUser(this.id).subscribe(
      (data: User) => {
        this.firstName = data.firstName;
        this.lastName = data.lastName;
        this.email = data.emailId;
        this.location = data.location;
        this.mobileNumber = data.mobileNumber;
      },
      (err: Error) => {
        console.log(`${err.message}`);
      }
    );
  }

}
