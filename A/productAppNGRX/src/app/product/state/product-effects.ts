import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { mergeMap, map, catchError, tap } from 'rxjs/operators';
import { of } from 'rxjs';

import { ProductActionTypes, Load, LoadSuccess, LoadError, Add, AddSuccess, AddError } from './product-actions';
import { Product } from '../product';
import { ProductService } from '../product.service';

@Injectable()
export class ProductEffects {
    constructor(private actions$: Actions, private productService: ProductService) {}

    @Effect()
    loadProducts$ = this.actions$.pipe(
        ofType(ProductActionTypes.LOAD),
        tap(val => console.log(`EFFECT LOAD ${JSON.stringify(val)}`)),
        mergeMap((action: Load) => this.productService.getProducts().pipe(
            map((products: Product[]) => (new LoadSuccess(products))),
            catchError(err => of(new LoadError(err)))
        ))
    )

    @Effect()
    addProduct$ = this.actions$.pipe(
        ofType(ProductActionTypes.ADD),
        tap(val => console.log(`EFFECT ADD ${JSON.stringify(val)}`)),
        map((action: Add) => {return action.payload}),
        mergeMap((product: Product) => this.productService.addProduct(product).pipe(
            map((product: Product) => (new AddSuccess(product))),
            catchError(err => of(new AddError(err)))
        ))
    )
}
