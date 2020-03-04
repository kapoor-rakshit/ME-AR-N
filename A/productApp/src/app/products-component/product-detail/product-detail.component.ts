import { Component, OnInit } from '@angular/core';
import { Products } from '../products';
import { ProductService } from '../product.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Location } from "@angular/common";

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  product: any = {};
  id: number;

  constructor(private _productsService: ProductService, private route: ActivatedRoute, private router: Router, private location: Location) {
    this.route.params.forEach((params: Params) => {
      this.id = +params['id'];                      // + sign is shorthand for converting string to number
    });

  }

  ngOnInit() {
    this.getProduct(this.id);
  }

  getProduct(id: number){
    this._productsService.getProduct(id).subscribe(
      (resp: Products) => {
        this.product = resp;
      },
      (err: any) => {
        console.log(`${err}`);
      }
    );
  }

  goBack() {
    // navigate to particular path as per routing-module
    this.router.navigate(['/products']);

    // go back as per browser history
    // this.location.back();
  }

}
