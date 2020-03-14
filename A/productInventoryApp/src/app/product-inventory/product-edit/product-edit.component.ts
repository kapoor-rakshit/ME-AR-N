import { Component, OnInit, OnDestroy } from '@angular/core';
import { ValidatorFn, FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { ProductService } from '../product.service';
import { Product } from '../product';

const checkInputs: ValidatorFn = (fg: FormGroup) => {
  const name = fg.controls['nameInput'];
  const desc = fg.controls['descriptionInput'];
  const manf = fg.controls['manufacturerInput'];
  const price = fg.controls['priceInput'];
  const quant = fg.controls['quantityInput'];

  if(name.value.trim() == "") {
    name.setErrors({required: true});
  }
  if(desc.value.trim() == "") {
    desc.setErrors({required: true});
  }
  if(manf.value.trim() == "") {
    manf.setErrors({required: true});
  }
  if(price.value.trim() == "") {
    price.setErrors({required: true});
  }
  if(quant.value.trim() == "") {
    quant.setErrors({required: true});
  }

  return null;
}

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit, OnDestroy {
  nameFromServer: string = "Product's name";
  descFromServer: string = "Product's description";
  manfFromServer: string = "Product's manufacturer";
  priceFromServer: number = 9025;
  quantFromServer: number = 1089;

  componentActive: boolean;
  editProductForm: FormGroup;
  id: any;
  clicks: any;

  formSubmitted: boolean = false;

  constructor(private _fb: FormBuilder, private _router: Router, private route: ActivatedRoute, private _productService: ProductService) {
    this.route.params.forEach((param: Params) => {
      this.id = +param['id'];
    });
  }

  ngOnInit() {
    // to prevent memory leaks , to subscribe till it is TRUE
    this.componentActive = true;

    this.editProductForm = this._fb.group({
      nameInput: ['', [Validators.required, Validators.minLength(3)]],
      descriptionInput: ['', [Validators.required, Validators.minLength(3)]],
      manufacturerInput: ['', [Validators.required, Validators.minLength(3)]],
      priceInput: ['', [Validators.required]],
      quantityInput: ['', [Validators.required]]
    });

     // get details of a product using id and populate productData
      // UNCOMMENT when performing TDD MOCK
     /* this._productService.getProduct(this.id).subscribe(
       (data: Product) => {
        this.nameFromServer = data.name;
        this.descFromServer = data.description;
        this.manfFromServer = data.manufacturer;
        this.priceFromServer = data.price;
        this.quantFromServer = data.quantity;
        this.clicks = data.clicks;
       },
       (err: Error) => {
         console.log(`${err.message}`);
       }
     ); */
     // COMMENT when performing TDD MOCK
    const dataFromRoute = this.route.snapshot.data['resolveProduct'];
    this.nameFromServer = dataFromRoute.name;
    this.descFromServer = dataFromRoute.description;
    this.manfFromServer = dataFromRoute.manufacturer;
    this.priceFromServer = dataFromRoute.price;
    this.quantFromServer = dataFromRoute.quantity;
    this.clicks = dataFromRoute.clicks;

  }

  get nameInputRef() {
    return this.editProductForm.get('nameInput');
  }

  get descriptionInputRef() {
    return this.editProductForm.get('descriptionInput');
  }

  get manufacturerInputRef() {
    return this.editProductForm.get('manufacturerInput');
  }

  get priceInputRef() {
    return this.editProductForm.get('priceInput');
  }

  get quantityInputRef() {
    return this.editProductForm.get('quantityInput');
  }

  OnFormSubmit() {
    this.formSubmitted = true;
    let nameFromForm = this.nameInputRef.value;
    let descFromForm = this.descriptionInputRef.value;
    let manfFromForm = this.manufacturerInputRef.value;
    let priceFromForm = this.priceInputRef.value;
    let quantFromForm = this.quantityInputRef.value;

    let updatedProduct:Product = {id: this.id, name: nameFromForm, description: descFromForm, manufacturer: manfFromForm, price: priceFromForm, quantity: quantFromForm, clicks: this.clicks};

    // call to service for PUT request
    this._productService.updateProduct(updatedProduct,this.id).subscribe(
      (data: Product) => {
        console.log(`UPDATED PRODUCT ==> ${JSON.stringify(data)}`);
        this._router.navigate(['/productinventory']);
      },
      (err: Error) => {
        console.log(`${err.message}`);
      }
    );
  }

  ngOnDestroy(){
    // MANUALLY SUBSCRIBING and UNSUBSCRIBING
    console.log("EDIT PRODUCT Component getting destroyed...");
    this.componentActive = false;
  }

}
