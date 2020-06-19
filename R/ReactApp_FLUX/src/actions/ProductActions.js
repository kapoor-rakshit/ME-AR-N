import ProductService from "../components/productService";
import Dispatcher from "../dispatcher/Dispatcher";
import * as ActionTypes from '../constants/ActionTypes';

class ProductActions {
    static getAllProductsAction() {
        ProductService.getAllProducts((respDATA)=> {
            console.log(`ALL PRODUCTS FETCHED`);
            console.table(respDATA);
            Dispatcher.dispatch({
                actionType: ActionTypes.GET_ALL_PRODUCTS,
                data: respDATA
            }); 
        });
    }

    static getProductAction(idOfProduct) {
        ProductService.getProduct((respDATA)=> {
            console.log(`PRODUCT FETCHED`);
            console.table(respDATA);
            Dispatcher.dispatch({
                actionType: ActionTypes.GET_PRODUCT,
                data: respDATA
            });
        }, idOfProduct);
    }

    static addProductAction(newProduct) {
        ProductService.addProduct((respDATA)=>{
            console.log(`PRODUCT ADDED ==> ${JSON.stringify(respDATA)}`);
            Dispatcher.dispatch({
                actionType: ActionTypes.ADD_PRODUCT,
                data: respDATA
            });
        }, newProduct);
    }

    static deleteProductAction(idOfProduct) {
        ProductService.deleteProduct((respDATA)=>{
            console.log(`PRODUCT DELETED ==> ${JSON.stringify(respDATA)}`);
            Dispatcher.dispatch({
                actionType: ActionTypes.DELETE_PRODUCT,
                data: idOfProduct
            });
        }, idOfProduct);
    }
}
export default ProductActions;