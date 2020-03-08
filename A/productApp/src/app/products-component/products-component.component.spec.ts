import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ProductsComponentComponent } from './products-component.component';
import { BehaviorSubject } from 'rxjs';
import { Products } from './products';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';
import { ProductService } from './product.service';
import { FormsModule } from '@angular/forms';

class MockProductService {
  products:BehaviorSubject<Products[]> = new BehaviorSubject<Products[]>([
    {id: 1, name: "Swift", quantity: 1},
    {id: 2, name: "Baleno", quantity: 3},
    {id: 3, name: "Cruze", quantity: 2}
  ]);

  getProducts(): BehaviorSubject<Products[]>{
    return this.products;
  }
  addProduct(prod: Products) {
    let tempproducts = this.products.getValue();
    tempproducts.push(prod);
    this.products.next(tempproducts);
  }
}

describe('ProductsComponentSPEC', () => {

  describe("Product component CLASS", () => {
    let component: ProductsComponentComponent;
    let fixture: ComponentFixture<ProductsComponentComponent>;
    let productService: ProductService;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ ProductsComponentComponent ],
        imports: [RouterTestingModule, FormsModule],
        providers: [{provide: ProductService, useClass: MockProductService}]
      }).compileComponents();
  
      productService = TestBed.get(ProductService);
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(ProductsComponentComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it('should create', () => {
      expect(component).toBeTruthy();
    });

    it("check count of products after component inited", () => {
      expect(component.productsData.length).toEqual(3);
    });
    
  });

  describe("Product component DOM", () => {
    let component: ProductsComponentComponent;
    let fixture: ComponentFixture<ProductsComponentComponent>;
    let productService: ProductService;

    beforeEach(async(() => {
      TestBed.configureTestingModule({
        declarations: [ ProductsComponentComponent ],
        imports: [RouterTestingModule, FormsModule],
        providers: [{provide: ProductService, useClass: MockProductService}]
      }).compileComponents();
  
      productService = TestBed.get(ProductService);
    }));
  
    beforeEach(() => {
      fixture = TestBed.createComponent(ProductsComponentComponent);
      component = fixture.componentInstance;
      fixture.detectChanges();
    });

    it("check for company name in h3 tag", () => {
      const debugElem: DebugElement = fixture.debugElement.queryAll(By.css("h3"))[0];
      const htmlElem: HTMLElement = debugElem.nativeElement;
      expect(htmlElem.textContent).toEqual("ProductApp - Wipro", `company name appears here`);
    });

    it("check for table headers count plus text", () => {
      const debugElems: DebugElement[] = fixture.debugElement.queryAll(By.css("thead"))[0].queryAll(By.css("th"));
      expect(debugElems.length).toEqual(2);
      const thname = debugElems[0].nativeElement.textContent;
      const thquant = debugElems[1].nativeElement.textContent;
      expect(thname).toEqual("Name");
      expect(thquant).toEqual("Quantity");
    });

    it("check for count of table data rows", () => {
      const debugElems: DebugElement[] = fixture.debugElement.queryAll(By.css("tbody"))[0].queryAll(By.css("tr"));
      expect(debugElems.length).toEqual(3);
    });

    it("check for table data", () => {
      const debugElems: DebugElement[] = fixture.debugElement.queryAll(By.css("tbody"))[0].queryAll(By.css("tr"));
      const tr0td1 = debugElems[0].queryAll(By.css("td"))[1].nativeElement.textContent;
      const tr2td0 = debugElems[2].queryAll(By.css("td"))[0].nativeElement.textContent;
      expect(tr0td1).toEqual("1");
      expect(tr2td0).toEqual("Cruze");
    });

    it("check for type attr of input fields", () => {
      const debugElemName: DebugElement = fixture.debugElement.query(By.css("#nameID[type='text']"));
      const debugElemQuant: DebugElement = fixture.debugElement.query(By.css("#quantityID[type='number']"));
      expect(debugElemName).toBeTruthy();
      expect(debugElemQuant).toBeTruthy();
    });

    it("check for existence of submit button", () => {
      const debugElemSubmit = fixture.debugElement.query(By.css("[type='submit']"));
      expect(debugElemSubmit).toBeTruthy();
    });
    
  });
});
