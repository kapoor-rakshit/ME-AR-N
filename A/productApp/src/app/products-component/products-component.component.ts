import { Component, OnInit, Input, Output, EventEmitter, ViewChild } from '@angular/core';
import { Products } from './products';
import { ProductService } from './product.service';
import { ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-products-component',
  templateUrl: './products-component.component.html',
  styleUrls: ['./products-component.component.css']
})
export class ProductsComponentComponent implements OnInit {

  title:string;
  nameHeader: string = "Name";
  quantityHeader: string = "Quantity";
  productsData: Products[] = [];
  nameModel: string = "";
  quantityModel: number;

  @Input("varForParent-Company") companyNameFromParent: string;
  @Output() emitProductToParent: EventEmitter<Products> = new EventEmitter<Products>();
  @Output() emitDispRecentAdded: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  @ViewChild("formRef", {static: false}) addProductFormReference: NgForm; 

  constructor(private _productsService: ProductService, private _route: ActivatedRoute) {
    this.title = "ProductApp";
    this.companyNameFromParent = "Wipro";
  }

  ngOnInit() {
    this.productsData = this._route.snapshot.data['productsFromRoute'];    // comment when performing TDD
    // this.getProducts();                                                      // uncomment when performing TDD
  }

  getProducts(){
    this._productsService.getProducts().subscribe(
      (products: any) => {
        this.productsData = products;
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  addProduct(obj){
    this._productsService.addProduct(obj).subscribe(
      (data: any) => {
        console.log(`Added ${data}`);
        this.getProducts();
        this.emitDispRecentAdded.emit(true);
        this.emitProductToParent.emit(obj);
      },
      (err: any) => {
        console.log(err);
      }
    );
  }

  onSubmit(formValue: any){
    let newProduct = {
      name: formValue.naam,
      quantity: formValue.quant
    };
    this.addProduct(newProduct);
    this.addProductFormReference.reset();
  }

}
