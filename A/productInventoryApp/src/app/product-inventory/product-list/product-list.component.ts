import { Component, OnInit, ViewChild, OnDestroy, OnChanges } from '@angular/core';
import {SelectionModel} from '@angular/cdk/collections';
import { Product } from '../product';

import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { AppComponent } from 'src/app/app.component';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit, OnDestroy {

  // to prevent memory leaks , to subscribe till it is TRUE
  componentActive: boolean;

  nameDisp: boolean = true;
  descriptionDisp: boolean = true;
  manufacturerDisp: boolean = true;
  priceDisp: boolean = true;
  quantityDisp: boolean = true;
  editDisabled: boolean;
  deleteDisabled: boolean;

  productsArr: Product[] = [];
  products = new MatTableDataSource<Product>(this.productsArr);
  selection = new SelectionModel<Product>(true, []);                        // (allowMultiSelect, initialSelection)
  @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort: MatSort;
  displayedColumns: string[] = ['select', 'name', 'description', 'manufacturer', 'price', 'quantity', 'editbtns', 'delbtns'];    
                              // NOTE : In order as desired, Same values as `matColumnDef` attr in HTML file
                              //        This is also same as data keys {{element.quantity}} for sorting to happen in MatTable
  constructor() { }

  ngOnInit() {
    this.componentActive = true;

    this.editDisabled = !AppComponent.isLoggedInForNav;
    this.deleteDisabled = !AppComponent.isLoggedInForNav;

    this.productsArr.push({name: "prod", description: "test prod", quantity: 56, price: 67, id: 5, manufacturer: "wipro"},
    {name: "prod 2", description: "test prod 2", quantity: 5, price: 90543, id: 34, manufacturer: "nagarro"});

    this.products.paginator = this.paginator;
    this.products.sort = this.sort;
  }

  /** Whether the number of selected elements matches the total number of rows. */
  isAllSelected() {
    const numSelected = this.selection.selected.length;
    const numRows = this.products.data.length;
    return numSelected === numRows;
  }

  /** Selects all rows if they are not all selected; otherwise clear selection. */
  masterToggle() {
    this.isAllSelected() ?
        this.selection.clear() :
        this.products.data.forEach(row => this.selection.select(row));
  }

  /** The label for the checkbox on the passed row */
  checkboxLabel(row?: Product): string {
    if (!row) {
      return `${this.isAllSelected() ? 'select' : 'deselect'} all`;
    }
    return `${this.selection.isSelected(row) ? 'deselect' : 'select'} row ${row.id}`;
  }

  delete(idToDelete) {
    // call service to delete
  }

  deleteSelected() {
    this.selection.selected.forEach((obj) => {
      // call delete function
      this.delete(obj.id);
    });
  }

  chkcolumns() {
    this.displayedColumns = [];
    if(this.nameDisp || this.descriptionDisp || this.manufacturerDisp || this.priceDisp || this.quantityDisp) this.displayedColumns.push("select");
    if(this.nameDisp) this.displayedColumns.push("name");
    if(this.descriptionDisp) this.displayedColumns.push("description");
    if(this.manufacturerDisp) this.displayedColumns.push("manufacturer");
    if(this.priceDisp) this.displayedColumns.push("price");
    if(this.quantityDisp) this.displayedColumns.push("quantity");
    if(this.nameDisp || this.descriptionDisp || this.manufacturerDisp || this.priceDisp || this.quantityDisp) this.displayedColumns.push("editbtns");
    if(this.nameDisp || this.descriptionDisp || this.manufacturerDisp || this.priceDisp || this.quantityDisp) this.displayedColumns.push("delbtns");
  }

  incCounter(idOfProd) {
    // call service to increment counter of respective id
    console.log(`${idOfProd} clicked`);
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.products.filter = filterValue.trim().toLowerCase();
  }

  ngOnDestroy(){
    // MANUALLY SUBSCRIBING and UNSUBSCRIBING
    console.log("LIST PRODUCT Component getting destroyed...");
    this.componentActive = false;
  }

}
