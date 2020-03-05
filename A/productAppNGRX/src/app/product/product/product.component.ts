import { Component, OnInit, Input, Output, EventEmitter, ViewChild, OnDestroy } from '@angular/core';
import { Product } from './../product';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { ProductState, getError, getProducts } from '../state/product-reducers';
import { Store, select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Load, Add } from '../state/product-actions';
import { takeWhile } from 'rxjs/operators';

@Component({
  selector: 'app-product-module',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit, OnDestroy {

  @Input("companyNameVARForParent") companyName: String;
  @Output() product: EventEmitter<Product> = new EventEmitter<Product>();
  @Output() recentProductShow: EventEmitter<Boolean> = new EventEmitter<Boolean>();

  addProductForm: FormGroup;
  
  errMsg$: Observable<string>;
  componentActive: boolean = true;
  productsArr: Product[] = [];
  products = new MatTableDataSource<Product>(this.productsArr);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ['name', 'quantity'];    // NOTE : In order as desired, Same values as `matColumnDef` attr in HTML file
                                                        //        This is also same as data keys {{element.quantity}} for sorting to happen in MatTable

  constructor(private _fb: FormBuilder, private store: Store<ProductState>) {
    this.companyName = "Default Company Name";
   }

  ngOnInit() {
    // to prevent memory leaks , to subscribe till it is TRUE
    this.componentActive = true;

    // AUTOMATIC SUBSCRIBING/UNSUBSCRIBING using `async` pipe in .html
    this.errMsg$ = this.store.pipe(select(getError));
    
    // DISPATCH LOAD ACTION , defined in EFFECT
    this.store.dispatch(new Load());

    // MANUALLY SUBSCRIBING/UNSUBSCRIBING using takeWhile() and componentActiveVAR (refer ngOnDestroy)
    this.store.pipe(select(getProducts), takeWhile(() => this.componentActive))
      .subscribe((products: Product[]) => {
        if(this.productsArr.length == 0) {
        products.forEach((prod: Product) => {this.productsArr.push(prod);});
        }
        else {
          this.productsArr.push(products.pop());
        }
        this.products.paginator = this.paginator;
        this.products.sort = this.sort;
      });

    this.addProductForm = this._fb.group({
      naam: ['', [Validators.required, Validators.minLength(3)]],
      quant: ['', [Validators.required]]
    });
  }

  get naamValidAlertFunc(){
    return this.addProductForm.get("naam");
  }

  get quantValidAlertFunc(){
    return this.addProductForm.get("quant");
  }

  addProduct(prod){
    // DISPATCH ADD ACTION , defined in EFFECT
    this.store.dispatch(new Add(prod));

    this.product.emit(prod);
    this.recentProductShow.emit(true);
  }

  OnFormSubmit(){
    let newProduct = {
      name: this.addProductForm.get("naam").value,
      quantity: this.addProductForm.get("quant").value
    };
    this.addProduct(newProduct);
    this.addProductForm.reset();
  }

  ngOnDestroy(){
    // MANUALLY SUBSCRIBING and UNSUBSCRIBING
    console.log("Product Component getting destroyed...");
    this.componentActive = false;
  }
}
