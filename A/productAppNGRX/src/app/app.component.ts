import { Component } from '@angular/core';
import { Product } from './product/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  product: Product;
  disp: Boolean;
  companyNaam: String;

  constructor(){
    this.disp = false;
    this.companyNaam = "Wipro";
  }

  receiveRecentProductShow($event) {
    this.disp = $event;
  }
  receiveProduct($event) {
    this.product = $event;
  }
}
