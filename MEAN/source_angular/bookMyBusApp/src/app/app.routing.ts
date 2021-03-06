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
import { TopCities } from './adminComponent/topCities';
import { BookingHistory } from './adminComponent/bookingHistory';


const appRoutes:Routes = [
    {path:"", component:HomeComponent},
    {path:"auth/user", component: UserLogin},
    {path:"auth/newuser", component: UserSignup},
    {path: "auth/admin", component: AdminLogin},
    {path: "adminconsole/buses", component: AdminComp},
    {path: "userconsole/buses/:userid", component: UserComp},
    {path: "adminconsole/cities", component: AdminCityComp},
    {path: "adminconsole/cities/editcity/:id", component: EditCity},
    {path: "adminconsole/cities/addcity", component: AddCity},
    {path: "adminconsole/buses/editbus/:id", component: EditBus},
    {path: "adminconsole/buses/addbus", component: AddBus},
    {path: "userconsole/history/:userid", component: UserHistory},
    {path: "userconsole/details/:userid", component: UserDetails},
    {path: "userconsole/buses/:userid/:id", component: BookBus},
    {path: "adminconsole/topcities",component: TopCities},
    {path: "adminconsole/history", component: BookingHistory}
];

export const routing = RouterModule.forRoot(appRoutes, {useHash: true});
