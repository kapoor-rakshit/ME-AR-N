import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';
import { RouteGuardAuthService } from './routeguardauthservice.service';

const routes: Routes = [
    {path: "auth", children:[
        {path: "login", component: LoginComponent, resolve: { resolveAllUsers: RouteGuardAuthService }},
        {path: "signup", component: SignupComponent, resolve: { resolveAllUsers: RouteGuardAuthService }},
        {path: "userdetails/:id", component: UserDetailComponent, resolve: { resolveUserDetails: RouteGuardAuthService }}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthRoutingModule {}