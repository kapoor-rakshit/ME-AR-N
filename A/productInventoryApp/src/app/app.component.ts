import { Component, DoCheck } from '@angular/core';
import { Router, NavigationStart, NavigationCancel, NavigationEnd, Event, NavigationError } from '@angular/router';
import { LoginComponent } from './login-signup/login/login.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ProductInventoryApp';
  static isLoggedInForNav: boolean = false;
  static nameofuserForNav: string = "USER's NAME";
  static idofuserForNav: number = 1;
  isLoggedIn: boolean;
  nameofuser: string;
  idofuser: number;

  constructor(private _router: Router) {
    this._router.events.subscribe((event: Event) => {
      if (event instanceof NavigationStart) {
        
      }
      else if (event instanceof NavigationEnd || event instanceof NavigationError || event instanceof NavigationCancel) {
        this.isLoggedIn = AppComponent.isLoggedInForNav;
        this.nameofuser = AppComponent.nameofuserForNav;
        this.idofuser = AppComponent.idofuserForNav;
        }
    }); 
  }

  logOut() {
    AppComponent.isLoggedInForNav = false;
    this._router.navigate(['/auth/login']);
  }
}
