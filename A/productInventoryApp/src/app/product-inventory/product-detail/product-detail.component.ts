import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit, OnDestroy {

   // to prevent memory leaks , to subscribe till it is TRUE
   componentActive: boolean;

   nameFromServer: string = "Name of product";
   descFromServer: string = "Desc of prod";
   manfFromServer: string = "Manf of prod";
   priceFromServer: number = 1111;
   quantFromServer: number = 1111;

   id: any;

  constructor(private route: ActivatedRoute, private _router: Router, private _productService: ProductService) {
    this.route.params.forEach((param: Params) => {
      this.id = param['id'];
    });
  }

  ngOnInit() {
    this.componentActive = true;

    // UNCOMMENT when performing TDD MOCK
    /* this._productService.getProduct(this.id).subscribe(
      (data: Product) => {
        this.nameFromServer = data.name;
        this.descFromServer = data.description;
        this.manfFromServer = data.manufacturer;
        this.priceFromServer = data.price;
        this.quantFromServer = data.quantity;
      },
      (err:Error) => {
        console.log(`${err.message}`);
      }
    ); */
    // COMMENT when performing TDD MOCK
    const dataFromRoute = this.route.snapshot.data['resolveProduct'];
    this.nameFromServer = dataFromRoute.name;
    this.descFromServer = dataFromRoute.description;
    this.manfFromServer = dataFromRoute.manufacturer;
    this.priceFromServer = dataFromRoute.price;
    this.quantFromServer = dataFromRoute.quantity;
    
  }

  delete(idToDelete) {
    this._productService.deleteProduct(idToDelete).subscribe(
      (data: Product) => {
        console.log(`DELETED PRODUCT ID ==> ${idToDelete}`);
        this._router.navigate(['/productinventory']);
      },
      (err: Error) => {
        console.log(`${err.message}`);
      }
    );
  }

  ngOnDestroy(){
    // MANUALLY SUBSCRIBING and UNSUBSCRIBING
    console.log("DETAIL PRODUCT Component getting destroyed...");
    this.componentActive = false;
  }

}
