import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './homeComponent/homeComp';
import { UserLogin } from './login-signupComponent/userlogin';
import { UserSignup } from './login-signupComponent/usersignup';
import { AdminLogin } from './login-signupComponent/adminlogin';
import { AdminComp } from './adminComponent/adminComp';
import { UserComp } from './userComponent/userComp';
import { AddBus } from './adminComponent/addbus';
import { EditBus } from './adminComponent/editbus';
import { AdminCityComp } from './adminComponent/adminCityComp';
import { EditCity } from './adminComponent/editcity';
import { AddCity } from './adminComponent/addcity';
import { UserHistory } from './userComponent/userHistory';
import { UserDetails } from './userComponent/userDetails';
import { BookBus } from './userComponent/bookBus';


const appRoutes:Routes = [
    {path:"", component:HomeComponent},
    {path:"auth/user", component: UserLogin},
    {path:"auth/newuser", component: UserSignup},
    {path: "auth/admin", component: AdminLogin},
    {path: "adminconsole/buses", component: AdminComp},
    {path: "userconsole/buses", component: UserComp},
    {path: "adminconsole/cities", component: AdminCityComp},
    {path: "adminconsole/cities/editcity/:id", component: EditCity},
    {path: "adminconsole/cities/addcity", component: AddCity},
    {path: "adminconsole/buses/editbus/:id", component: EditBus},
    {path: "adminconsole/buses/addbus", component: AddBus},
    {path: "userconsole/history", component: UserHistory},
    {path: "userconsole/details", component: UserDetails},
    {path: "userconsole/buses/:id", component: BookBus}
];

export const routing = RouterModule.forRoot(appRoutes);
