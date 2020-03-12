import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { AppComponent } from 'src/app/app.component';
import { Router } from '@angular/router';
import { User } from '../user';
import { AuthService } from '../auth.service';

const checkPasswords: ValidatorFn = (fg: FormGroup) => {
  const password = fg.controls['passwordInput'];
  const cnfpassword = fg.controls['confirmPasswordInput'];
  const firstname = fg.controls['firstnameInput'];
  const lastname = fg.controls['lastnameInput'];
  const location = fg.controls['locationInput'];
  if(password.value.trim() == "") {
    password.setErrors({required: true});
  }
  if(cnfpassword.value.trim() == "") {
    cnfpassword.setErrors({required: true});
  }
  if(firstname.value.trim() == "") {
    firstname.setErrors({required: true});
  }
  if(lastname.value.trim() == "") {
    lastname.setErrors({required: true});
  }
  if(location.value.trim() == "") {
    location.setErrors({required: true});
  }
  if(password.value.trim() != cnfpassword.value.trim()){
    cnfpassword.setErrors({unequal: true});
    return {'unequalpasswords': true};
  }
  return null;
}

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit, OnDestroy {
  componentActive: boolean;
  signUpForm: FormGroup;

  allUsers: User[];

  constructor(private _fb: FormBuilder, private _router: Router, private _authService: AuthService) { }

  ngOnInit() {
    // to prevent memory leaks , to subscribe till it is TRUE
    this.componentActive = true;

    this.signUpForm = this._fb.group({
      emailInput: ['', [Validators.required, Validators.email]],
      passwordInput: ['', [Validators.required, Validators.minLength(6)]],
      confirmPasswordInput: ['', [Validators.required]],
      firstnameInput: ['', [Validators.required, Validators.minLength(3)]],
      lastnameInput: ['', [Validators.required, Validators.minLength(3)]],
      locationInput: ['', [Validators.required, Validators.minLength(3)]],
      mobileNumberInput: ['', [Validators.required]] 
    }, {validator: checkPasswords});

    this._authService.getAllUsers().subscribe(
      (data: User[]) => {
        this.allUsers = data;
      },
      (err: Error) => {
        console.log(`${err.message}`);
      }
    );
  }

  get emailInputRef() {
    return this.signUpForm.get("emailInput");
  }

  get passwordInputRef() {
    return this.signUpForm.get("passwordInput");
  }

  get confirmPasswordInputRef() {
    return this.signUpForm.get("confirmPasswordInput");
  }

  get firstnameInputRef() {
    return this.signUpForm.get("firstnameInput");
  }

  get lastnameInputRef() {
    return this.signUpForm.get("lastnameInput");
  }

  get locationInputRef() {
    return this.signUpForm.get("locationInput");
  }

  get mobileNumberInputRef() {
    return this.signUpForm.get("mobileNumberInput");
  }

  OnFormSubmit() {
    let emailFromForm = this.emailInputRef.value;
    let passwordFromForm = this.passwordInputRef.value;
    let firstnameFromForm = this.firstnameInputRef.value;
    let lastnameFromForm = this.lastnameInputRef.value;
    let locationFromForm = this.locationInputRef.value;
    let mobilenumberFromForm = this.mobileNumberInputRef.value;

    let newUser = {emailId: emailFromForm, password: passwordFromForm, firstName: firstnameFromForm, lastName: lastnameFromForm, location: locationFromForm, mobileNumber: mobilenumberFromForm};

    let successfulSignUp: boolean = true;

    for(let user of this.allUsers) {
      if(user.emailId == emailFromForm) {
        successfulSignUp = false;
        break;
      }
    }

    if(successfulSignUp) {
      this._authService.addUser(newUser).subscribe(
        (data: User) => {
          //on successful signup , set values
          AppComponent.isLoggedInForNav = true;
          AppComponent.nameofuserForNav = data.firstName;
          AppComponent.idofuserForNav = data.id;
          // important to navigate for isloggedIn param to be checked
          this._router.navigate(['/']);
        },
        (err: Error) => {
          console.log(`${err.message}`);
        }
      );
    }
    else {
      alert(`User with email ${emailFromForm} already exists`);
    }
  }

  ngOnDestroy(){
    // MANUALLY SUBSCRIBING and UNSUBSCRIBING
    console.log("SIGN-UP Component getting destroyed...");
    this.componentActive = false;
  }

}
