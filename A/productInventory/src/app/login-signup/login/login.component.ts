import { Component, OnInit, OnDestroy, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';
import { AppComponent } from 'src/app/app.component';

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

  constructor(private _fb: FormBuilder, private _router: Router) { }

  ngOnInit() {
    // to prevent memory leaks , to subscribe till it is TRUE
    this.componentActive = true;

    this.loginForm = this._fb.group({
      emailInput: ['', [Validators.required, Validators.email]],
      passwordInput: ['', [Validators.required, Validators.minLength(6)]]
    }, {validator: checkInputs});
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
    console.log(`${emailFromForm} : ${passwordFromForm}`);
    
    //on successful login , set values
    AppComponent.isLoggedInForNav = true;
    AppComponent.nameofuserForNav = "ra20024024";
    AppComponent.idofuserForNav = "1";
    // important to navigate for loggedIn param to be checked
    this._router.navigate(['/']);
  }

  ngOnDestroy(){
    // MANUALLY SUBSCRIBING and UNSUBSCRIBING
    console.log("LOGIN Component getting destroyed...");
    this.componentActive = false;
  }

}
