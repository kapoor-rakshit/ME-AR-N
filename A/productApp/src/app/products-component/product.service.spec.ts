import { TestBed } from '@angular/core/testing';

import { ProductService } from './product.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Products } from './products';

describe('Product component SERVICE', () => {
  let httpClient: HttpClient;
  let httpTestingController: HttpTestingController;
  let productService: ProductService;
  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [],
      imports: [HttpClientTestingModule],
      providers: [ProductService]
    });
    console.log(`Inside beforeEach ProductServiceSPEC`);
    httpClient = TestBed.get(HttpClient);
    httpTestingController = TestBed.get(HttpTestingController);
    productService = TestBed.get(ProductService);
  });

  afterEach(() => {
     // After every test, assert that there are no more pending requests.
     httpTestingController.verify();
  });

  it('should be created', () => {
    const service: ProductService = TestBed.get(ProductService);
    expect(service).toBeTruthy();
  });

  describe('Get products', () => {
    let expectedProducts: Products[];

    beforeEach(() => {
      expectedProducts = [
        {id: 1, name: "HP", quantity: 1},
        {id: 2, name: "TOSHIBA", quantity: 1}
      ];
      console.log(`inside beforeEach GetProducts`);
    });

    it("return products using GET service", () => {
      productService.getProducts().subscribe(
        (products: Products[]) => {
          expect(products).toEqual(expectedProducts, `should have returned ${JSON.stringify(expectedProducts)}`);
          expect(products.length).toEqual(2);
        },
        fail
      );
      const req = httpTestingController.expectOne(productService._productsUrl);
      expect(req.request.method).toEqual("GET", `should have been a GET request`);

      req.flush(expectedProducts);
    });
  });

  describe("Add Product", () => {
    it("add product and return with inserted id", () => {
      let productToAdd: Products = {id: 5, name: "LENOVO", quantity: 1};
      let expectedProductToAdd: Products = {id: 5, name: "LENOVO", quantity: 1};

      productService.addProduct(productToAdd).subscribe(
        (product: Products) => {
          expect(product).toEqual(expectedProductToAdd,`should have returned`);
        },
        fail
      );
      const req = httpTestingController.expectOne(productService._productsUrl);
      expect(req.request.method).toEqual("POST", "should have been a POST request");
      expect(req.request.body).toEqual(productToAdd, `should have added ${JSON.stringify(productToAdd)}`);

      const expectedResponse = new HttpResponse({ status: 200, statusText: 'OK', body: productToAdd });
      req.event(expectedResponse);
    });
  });
});
