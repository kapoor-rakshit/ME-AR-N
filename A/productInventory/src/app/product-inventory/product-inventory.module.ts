import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductTopViewsComponent } from './product-top-views/product-top-views.component';
import { ProductRoutingModule } from './product-routing.module';



@NgModule({
  declarations: [ProductListComponent, ProductDetailComponent, ProductAddComponent, ProductEditComponent, ProductTopViewsComponent],
  imports: [
    CommonModule,
    ProductRoutingModule
  ]
})
export class ProductInventoryModule { }
