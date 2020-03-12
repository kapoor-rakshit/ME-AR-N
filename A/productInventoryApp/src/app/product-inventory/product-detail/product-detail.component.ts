import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

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
   priceFromServer: string = "Price of product";
   quantFromServer: string = "Quantity of product";

   id: any;
   productData: any;

  constructor(private route: ActivatedRoute) {
    this.route.params.forEach((param: Params) => {
      this.id = param['id'];
    });
  }

  ngOnInit() {
    this.componentActive = true;


  }

  ngOnDestroy(){
    // MANUALLY SUBSCRIBING and UNSUBSCRIBING
    console.log("DETAIL PRODUCT Component getting destroyed...");
    this.componentActive = false;
  }

}
