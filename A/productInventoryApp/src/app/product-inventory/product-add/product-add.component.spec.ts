import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductAddComponent } from './product-add.component';
import { RouterTestingModule } from '@angular/router/testing';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DebugElement } from '@angular/core';
import { By } from '@angular/platform-browser';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { ProductService } from '../product.service';
import { BehaviorSubject } from 'rxjs';
import { Product } from '../product';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

class MockProductService {
  mockProducts:BehaviorSubject<Product[]> = new BehaviorSubject<Product[]>([
    {id: 1, name: "IPod", description: "first apple prod", manufacturer: "Apple", price: 12000, quantity: 1, clicks: 1}
  ]);

  getAllProducts(): BehaviorSubject<Product[]>{
    return this.mockProducts;
  }
  
  addProduct(prod: Product) {
    let tempproducts = this.mockProducts.getValue();
    tempproducts.push(prod);
    this.mockProducts.next(tempproducts);
  }
}

describe('ProductAddComponent', () => {
  describe("ProductAdd component CLASS", () => {
    let component: ProductAddComponent;
    let fixture: ComponentFixture<ProductAddComponent>;
    let productService: ProductService;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ ProductAddComponent ],
        imports: [RouterTestingModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatInputModule, BrowserAnimationsModule],
        providers: [{provide: ProductService, useClass: MockProductService}]
      }).compileComponents();

      productService = TestBed.get(ProductService);
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(ProductAddComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
    it('should create', () => {
      expect(component).toBeTruthy();
    });
  
   });

   describe("ProductAdd component DOM", () => {
    let component: ProductAddComponent;
    let fixture: ComponentFixture<ProductAddComponent>;
    let productService: ProductService;
  
    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ ProductAddComponent ],
        imports: [RouterTestingModule, FormsModule, ReactiveFormsModule, MatFormFieldModule, MatButtonModule, MatInputModule, BrowserAnimationsModule],
        providers: [{provide: ProductService, useClass: MockProductService}]
      }).compileComponents();

      productService = TestBed.get(ProductService);
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(ProductAddComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });
  
     it("check submit button", () => {
      const debugElem: DebugElement = fixture.debugElement.query(By.css("button[type='submit']"));
      expect(debugElem).toBeTruthy();
     });
  
   });
});
