import { Routes, RouterModule } from "@angular/router";
import { ProductListComponent } from './product-list/product-list.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductTopViewsComponent } from './product-top-views/product-top-views.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
    {path: "", component: ProductListComponent},
    {path: "product/add", component: ProductAddComponent},
    {path: "product/detail/:id", component: ProductDetailComponent},
    {path: "product/edit/:id", component: ProductEditComponent},
    {path: "topproducts", component: ProductTopViewsComponent}
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class ProductRoutingModule {}