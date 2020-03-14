import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { AuthService } from './auth.service';
import { Observable } from 'rxjs';

@Injectable()
export class RouteGuardAuthService implements Resolve<any>{

  constructor(private _authService: AuthService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any[]> | Observable<any[]> | any {
    if(state.url.indexOf("userdetails") != -1){
      return this._authService.getUser(route.params['id']);
    }
    else {
      return this._authService.getAllUsers();
    }
  }
}
