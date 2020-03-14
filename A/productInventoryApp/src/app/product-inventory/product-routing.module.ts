import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductTopViewsComponent } from './product-top-views/product-top-views.component';
import { NgModule } from '@angular/core';
import { RouteGuardProductService } from './route-guard-product.service';

const routes: Routes = [
    {path: "", component: ProductListComponent, resolve: { resolveAllProducts: RouteGuardProductService }},
    {path: "product/add", component: ProductAddComponent, canActivate: [RouteGuardProductService]},
    {path: "product/detail/:id", component: ProductDetailComponent, canActivate: [RouteGuardProductService], resolve: { resolveProduct: RouteGuardProductService }},
    {path: "product/edit/:id", component: ProductEditComponent, canActivate:[RouteGuardProductService], canDeactivate: [RouteGuardProductService], resolve: { resolveProduct: RouteGuardProductService }},
    {path: "topproducts", component: ProductTopViewsComponent, resolve: { resolveTopProducts: RouteGuardProductService }}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductRoutingModule {}