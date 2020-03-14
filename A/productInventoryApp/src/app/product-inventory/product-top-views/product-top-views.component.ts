import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { ActivatedRoute } from '@angular/router';

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
  options: any;
  topMostRequired: number = 5;
  tparr = [];
  chartDisp: boolean = false;

  constructor(private _productService: ProductService, private route: ActivatedRoute) {}

  ngOnInit() {
    // UNCOMMENT when performing TDD MOCK
    /* this._productService.getTopProducts().subscribe(
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
        this.chartData = this.tparr;
        this.options = {    
          is3D:true
       };
        this.chartDisp = true;
      },
      (err: Error) => {
        console.log(`${err.message}`);
      }
    ); */
    // COMMENT when performing TDD MOCK
    const dataFromRoute = this.route.snapshot.data['resolveTopProducts'];
    let dataFromServerLength = dataFromRoute.length;
    let pushToData = Math.min(dataFromServerLength, this.topMostRequired);
    for(let i = 0; i < pushToData; i+=1){
      this.tparr.push([dataFromRoute[i].name, dataFromRoute[i].clicks]);
    }
    this.title = "Most viewed products";
    this.type = "PieChart";
    this.columnNames = ["Product", "Views"];
    this.width = 750;
    this.height = 600;
    this.chartData = this.tparr;
    this.options = {    
      is3D:true
    };
    this.chartDisp = true;
    
  }

}
