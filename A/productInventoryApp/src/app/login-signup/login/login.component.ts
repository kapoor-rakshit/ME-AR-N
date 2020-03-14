import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AppComponent } from 'src/app/app.component';
import { AuthService } from '../auth.service';
import { User } from '../user';

const checkInputs: ValidatorFn = (fg: FormGroup) => {
  const password = fg.controls['passwordInput'];
  if(password.value.trim() == "") {
    password.setErrors({required: true});
  }
  return null;
}

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {
  componentActive: boolean;
  loginForm: FormGroup;
  allUsers: User[];

  constructor(private _fb: FormBuilder, private _router: Router, private route: ActivatedRoute, private _authService: AuthService) { }

  ngOnInit() {
    // to prevent memory leaks , to subscribe till it is TRUE
    this.componentActive = true;

    this.loginForm = this._fb.group({
      emailInput: ['', [Validators.required, Validators.email]],
      passwordInput: ['', [Validators.required, Validators.minLength(6)]]
    }, {validator: checkInputs});

    // UNCOMMENT when performing TDD MOCK
    /* this._authService.getAllUsers().subscribe(
      (data: User[]) => {
        this.allUsers = data;
      },
      (err: Error) => {
        console.log(`${err.message}`);
      }); */

      // COMMENT when performing TDD MOCK
      this.allUsers = this.route.snapshot.data['resolveAllUsers'];

  }

  get emailInputRef() {
    return this.loginForm.get("emailInput");
  }

  get passwordInputRef() {
    return this.loginForm.get("passwordInput");
  }

  OnFormSubmit() {
    let emailFromForm = this.emailInputRef.value;
    let passwordFromForm = this.passwordInputRef.value;
    let successfulLogin: boolean = false;
    let nameofUser: string = "";
    let idofUser: number;
    // console.log(`${emailFromForm} : ${passwordFromForm}`);

    for(let user of this.allUsers) {
      if(user.emailId == emailFromForm && user.password == passwordFromForm) {
        nameofUser = user.firstName;
        idofUser = user.id;
        successfulLogin = true;
        break;
      }
    }

     //on successful login , set values
    if(successfulLogin) {
      AppComponent.isLoggedInForNav = true;
      AppComponent.nameofuserForNav = nameofUser;
      AppComponent.idofuserForNav = idofUser;
      // important to navigate for loggedIn param to be checked
      this._router.navigate(['/']);
    } 
    else {
      alert("INVALID credentials. Try again.");
    }
  }

  ngOnDestroy(){
    // MANUALLY SUBSCRIBING and UNSUBSCRIBING
    console.log("LOGIN Component getting destroyed...");
    this.componentActive = false;
  }

}
