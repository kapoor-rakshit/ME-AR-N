import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HomeComponent } from './homeComponent/homeComp';
import { routing } from './app.routing';
import { AdminLogin } from './login-signupComponent/adminlogin';
import { UserLogin } from './login-signupComponent/userlogin';
import { UserSignup } from './login-signupComponent/usersignup';
import { loginsignupService } from './login-signupComponent/login-signupService';
import { Ng4LoadingSpinnerModule } from 'ng4-loading-spinner';
import 'rxjs';
import { AdminComp } from './adminComponent/adminComp';
import { UserComp } from './userComponent/userComp';
import { BusFilter } from './adminComponent/buses.pipe';
import { AddBus } from './adminComponent/addbus';
import { EditBus } from './adminComponent/editbus';
import { BusService } from './adminComponent/bus_service';
import { AdminCityComp } from './adminComponent/adminCityComp';
import { CityService } from './adminComponent/city_service';
import { AddCity } from './adminComponent/addcity';
import { EditCity } from './adminComponent/editcity';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AdminLogin,
    UserLogin,
    UserSignup,
    AdminComp,
    UserComp,
    AdminCityComp,
    EditBus,
    AddBus,
    BusFilter,
    AddCity,
    EditCity
  ],
  imports: [
    BrowserModule, routing, FormsModule, HttpClientModule, Ng4LoadingSpinnerModule.forRoot()
  ],
  providers: [loginsignupService, BusService, CityService],
  bootstrap: [AppComponent]
})
export class AppModule { }
