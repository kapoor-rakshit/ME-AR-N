import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductsComponentComponent } from './products-component/products-component.component';
import { AboutComponent } from './about/about.component';
import { ProductDetailComponent } from './products-component/product-detail/product-detail.component';
import { RouteGuardServiceService } from './products-component/route-guard-service.service';

const appRoutes: Routes = [
  {path: "", component: AboutComponent},
  {path: "products", children : [
    {path: "", component: ProductsComponentComponent, resolve: {productsFromRoute: RouteGuardServiceService}},
    {path: ":id", component: ProductDetailComponent, canActivate: [RouteGuardServiceService]}
  ]}
  
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
