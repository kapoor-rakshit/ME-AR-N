import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot,RouterStateSnapshot, Resolve } from '@angular/router';
import { ProductService } from './product.service';
import { Products } from './products';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RouteGuardServiceService implements CanActivate, Resolve<Products[]>{

  loadComponent: boolean;
  id: number;

  constructor(private _productsService: ProductService) {
    this.loadComponent = false;
   }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {

    this.id = route.params['id'];
    console.log(`${state.url}`);

    let cnfstat = confirm(`View details for product ID ${this.id} ?`);
    if(cnfstat) {
      this.loadComponent = true;
      return true;
    }
    else{
      this.loadComponent = false;
      return false;
    }
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any[]> | Observable<any[]> | any{
    return this._productsService.getProducts();
  }
}
