import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-top-views',
  templateUrl: './product-top-views.component.html',
  styleUrls: ['./product-top-views.component.css']
})
export class ProductTopViewsComponent implements OnInit {

  title: string;
  type: string;
  chartData: any;
  columnNames: any;
  width: number;
  height: number;
  topMostRequired: number;
  tparr = [];

  constructor(private _productService: ProductService) { 
    this._productService.getTopProducts().subscribe(
      (data: Product[]) => {
        let dataFromServerLength = data.length;
        let pushToData = Math.min(dataFromServerLength, this.topMostRequired);
        for(let i = 0; i < pushToData; i+=1){
          this.tparr.push([data[i].name, data[i].clicks]);
        }
        this.title = "Most viewed products";
        this.type = "PieChart";
        this.columnNames = ["Product", "Views"];
        this.width = 750;
        this.height = 600;
        this.topMostRequired = 5;
        this.chartData = this.tparr;
      },
      (err: Error) => {
        console.log(`${err.message}`);
      }
    );
  }

  ngOnInit() {

  }

}
