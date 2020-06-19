import Dispatcher from '../dispatcher/Dispatcher';
import * as ActionTypes from '../constants/ActionTypes';
import { EventEmitter } from 'events';

let products = [];
let product = {};

class ProductStoreClass extends EventEmitter {
    addChangeListener(cbFn) {
        this.on('change', cbFn);
    }
  
    removeChangeListener(cbFn) {
        this.removeListener('change', cbFn);
    }
  
    emitChange() {
        this.emit('change');
    }
  
    getAllProducts() {
        return products;
    }

    getProduct() {
        return product;
    }
}
let ProductStore = new ProductStoreClass();
export default ProductStore;

Dispatcher.register((action)=> {
    switch(action.actionType) {
        case ActionTypes.GET_ALL_PRODUCTS:
            products = [...action.data];
            ProductStore.emitChange();
            break;
        case ActionTypes.GET_PRODUCT:
            product = action.data;
            ProductStore.emitChange();
            break;
        case ActionTypes.ADD_PRODUCT:
            products.push(action.data);
            ProductStore.emitChange();
            break;
        case ActionTypes.DELETE_PRODUCT:
            let indexToDelete = -1;
            for(let ind in products) {
                if(parseInt(ind) == action.data) {
                    indexToDelete = parseInt(ind);
                    break;
                }
            }
            products.splice(indexToDelete, 1);
            ProductStore.emitChange();
            break;
    }
});