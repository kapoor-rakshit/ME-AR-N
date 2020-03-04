import { Action } from '@ngrx/store';
import { Product } from '../product';

export enum ProductActionTypes {
    LOAD = 'LOAD',
    LOAD_SUCCESS = 'LOAD_SUCCESS',
    LOAD_ERROR = 'LOAD_ERROR',
    ADD = 'ADD',
    ADD_SUCCESS = 'ADD_SUCCESS',
    ADD_ERROR = 'ADD_ERROR',
}

export class Load implements Action {
    readonly type = ProductActionTypes.LOAD;
    constructor() {
        console.log(`ACTION => LOAD`);
    }
}

export class LoadSuccess implements Action {
    readonly type = ProductActionTypes.LOAD_SUCCESS;
    constructor(public payload: Product[]){
        console.log(`ACTION => LOAD_SUCCESS`);
    }
}

export class LoadError implements Action {
    readonly type = ProductActionTypes.LOAD_ERROR;
    constructor(public payload: string) {
        console.log(`ACTION => LOAD_ERROR`);
    }
}

export class Add implements Action {
    readonly type = ProductActionTypes.ADD;
    constructor(public payload: Product) {
        console.log(`ACTION => ADD`);
    }
}

export class AddSuccess implements Action {
    readonly type = ProductActionTypes.ADD_SUCCESS;
    constructor(public payload: Product) {
        console.log(`ACTION => ADD_SUCCESS`);
    }
}

export class AddError implements Action {
    readonly type = ProductActionTypes.ADD_ERROR;
    constructor(public payload: string) {
        console.log(`ACTION => ADD_ERROR`);
    }
}

export type ProductActions = Load | LoadSuccess | LoadError | Add | AddSuccess | AddError;
