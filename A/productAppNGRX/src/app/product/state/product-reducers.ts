import { createFeatureSelector, createSelector } from '@ngrx/store';
import { Product } from '../product';
import { ProductActions, ProductActionTypes } from './product-actions';
export interface ProductState {
    products: Product[];
    error: string;
}

const initialState: ProductState = {
    products: [],
    error: ''
}

const getEntireProductState = createFeatureSelector<ProductState>("productsState");

export const getProducts = createSelector(
    getEntireProductState,
    (stateDATA) => { return stateDATA.products }
);

export const getError = createSelector(
    getEntireProductState,
    (stateDATA) => { return stateDATA.error }
);

export const ProductReducers = (stateDATA: ProductState = initialState, actionDATA: ProductActions): ProductState => {
    switch(actionDATA.type) {
        case ProductActionTypes.LOAD_SUCCESS:
            console.log("PRODUCT REDUCER ==> LOAD_SUCCESS");
            return {
                ...stateDATA,
                products: actionDATA.payload,
                error: ''
            };
        case ProductActionTypes.LOAD_ERROR:
            console.log("PRODUCT REDUCER ==> LOAD_ERORR");
            return {
                ...stateDATA,
                products: [],
                error: actionDATA.payload
            };
        case ProductActionTypes.ADD_SUCCESS:
            console.log("PRODUCT REDUCER ==> ADD_SUCCESS");
            return {
                ...stateDATA,
                products: [...stateDATA.products, actionDATA.payload],
                error: ""
            };
        case ProductActionTypes.ADD_ERROR:
            console.log("PRODUCT REDUCER ==> ADD_ERROR");
            return {
                ...stateDATA,
                error: actionDATA.payload
            };
        default:
            console.log(`*** DEFAULT (PRODUCT REDUCER) => ${actionDATA.type}`);
            return stateDATA;
    }
}