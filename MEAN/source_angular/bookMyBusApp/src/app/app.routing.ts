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


const appRoutes:Routes = [
    {path:"", component:HomeComponent},
    {path:"auth/user", component: UserLogin},
    {path:"auth/newuser", component: UserSignup},
    {path: "auth/admin", component: AdminLogin},
    {path: "adminconsole/buses", component: AdminComp},
    {path: "userconsole", component: UserComp},
    {path: "adminconsole/cities", component: AdminCityComp},
    {path: "adminconsole/buses/editbus/:id", component: EditBus},
    {path: "adminconsole/buses/addbus", component: AddBus}
];

export const routing = RouterModule.forRoot(appRoutes);
