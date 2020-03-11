import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from '../product';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  // to prevent memory leaks , to subscribe till it is TRUE
  componentActive: boolean = true;

  productsArr: Product[] = [];
  products = new MatTableDataSource<Product>(this.productsArr);
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ['name', 'description', 'manufacturer', 'price', 'quantity'];    
                              // NOTE : In order as desired, Same values as `matColumnDef` attr in HTML file
                              //        This is also same as data keys {{element.quantity}} for sorting to happen in MatTable
  constructor() { }

  ngOnInit() {
  }

  ngOnDestroy(){
    // MANUALLY SUBSCRIBING and UNSUBSCRIBING
    console.log("LIST PRODUCT Component getting destroyed...");
    this.componentActive = false;
  }

}
