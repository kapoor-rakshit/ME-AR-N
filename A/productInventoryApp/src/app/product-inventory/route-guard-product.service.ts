import { Injectable } from '@angular/core';
import { Resolve, RouterStateSnapshot, ActivatedRouteSnapshot, CanActivate, CanDeactivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';
import { AppComponent } from '../app.component';
import { ProductEditComponent } from './product-edit/product-edit.component';

@Injectable()
export class RouteGuardProductService implements Resolve<any>, CanActivate, CanDeactivate<any> {

  constructor(private _productService: ProductService, private router: Router) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<any[]> | Observable<any[]> | any {
    if(state.url.indexOf("detail") != -1 || state.url.indexOf("edit") != -1) {
      return this._productService.getProduct(route.params['id']);
    }
    else if(state.url.indexOf("topproducts") != -1) {
      return this._productService.getTopProducts();
    }
    else {
      return this._productService.getAllProducts();
    }
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(!AppComponent.isLoggedInForNav) {
      this.router.navigate(['/auth/login']);
      return false;
    }
    else {
      return true;
    }
  }

  canDeactivate(component: ProductEditComponent, route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if(component.editProductForm.dirty && !component.formSubmitted) {
      return confirm(`You have unsaved changes. Are you sure to leave ?`);
    }
    else {
      return true;
    }
  }
}
