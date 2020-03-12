import { Component, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormBuilder, Validators, ValidatorFn } from '@angular/forms';
import { Router } from '@angular/router';

const checkAddProdInputs: ValidatorFn = (fg: FormGroup) => {
  const name = fg.controls['nameInput'];
  const desc = fg.controls['descriptionInput'];
  const manf = fg.controls['manufacturerInput'];
  const price = fg.controls['priceInput'];
  const quant = fg.controls['quantityInput'];

  if(name.valid && name.value.trim() == "") {
    name.setErrors({required: true});
  }
  if(desc.valid && desc.value.trim() == "") {
    desc.setErrors({required: true});
  }
  if(manf.valid && manf.value.trim() == "") {
    manf.setErrors({required: true});
  }
  if(price.valid && price.value.trim() == "") {
    price.setErrors({required: true});
  }
  if(quant.valid && quant.value.trim() == "") {
    quant.setErrors({required: true});
  }
  return null;
}

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent implements OnInit, OnDestroy {
  componentActive: boolean;
  addProductForm: FormGroup;

  constructor(private _fb: FormBuilder, private _router: Router) { }

  ngOnInit() {
    // to prevent memory leaks , to subscribe till it is TRUE
    this.componentActive = true;

    this.addProductForm = this._fb.group({
      nameInput: ['', [Validators.required, Validators.minLength(3)]],
      descriptionInput: ['', [Validators.required, Validators.minLength(3)]],
      manufacturerInput: ['', [Validators.required, Validators.minLength(3)]],
      priceInput: ['', [Validators.required]],
      quantityInput: ['', [Validators.required]]
    });

  }

  get nameInputRef() {
    return this.addProductForm.get('nameInput');
  }

  get descriptionInputRef() {
    return this.addProductForm.get('descriptionInput');
  }

  get manufacturerInputRef() {
    return this.addProductForm.get('manufacturerInput');
  }

  get priceInputRef() {
    return this.addProductForm.get('priceInput');
  }

  get quantityInputRef() {
    return this.addProductForm.get('quantityInput');
  }

  OnFormSubmit() {
    let nameFromForm = this.nameInputRef.value;
    let descFromForm = this.descriptionInputRef.value;
    let manfFromForm = this.manufacturerInputRef.value;
    let priceFromForm = this.priceInputRef.value;
    let quantFromForm = this.quantityInputRef.value;

    // call to service for POST request

    this._router.navigate(['/productinventory']);
  }

  ngOnDestroy(){
    // MANUALLY SUBSCRIBING and UNSUBSCRIBING
    console.log("ADD PRODUCT Component getting destroyed...");
    this.componentActive = false;
  }

}
