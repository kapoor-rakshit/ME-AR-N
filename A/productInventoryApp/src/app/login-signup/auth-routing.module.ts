import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { UserDetailComponent } from './user-detail/user-detail.component';
import { SignupComponent } from './signup/signup.component';
import { LoginComponent } from './login/login.component';

const routes: Routes = [
    {path: "auth", children:[
        {path: "login", component: LoginComponent},
        {path: "signup", component: SignupComponent},
        {path: "userdetails/:id", component: UserDetailComponent}
    ]}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthRoutingModule {}