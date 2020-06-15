import React from 'react';
import ProductList from './productListComp';
import ProductService from './productService';
import './productsComp.css'

class AllProductsComponent extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: [
                {
                "id": 1,
                "name": "Adidas",
                "quantity": 5,
                "price": 5000
                }
            ],
            changeColor : true
        };
    }

    componentDidMount() {
        console.log(`DID MOUNT`);
        // LOCAL DATA REQUEST
        let resp = ProductService.getAllProducts_LOCAL();
        this.setState((prevState) => {
            return (
                {products: [...prevState.products, ...resp.productsDATA]}
            );
        });

        // SERVER DATA REQUEST
        // ProductService.getAllProducts((resData) => {
        //     this.setState((prevState) => {
        //         return (
        //             {products: [...prevState.products, ...resData]}
        //         );
        //     });
        // });
    }

    componentDidUpdate() {
        console.log(`DID UPDATE`);
    }

    render() {
        console.log(`RENDER`);
        return (
            <>
            <h3 className={`textCenter ${this.state.changeColor ? 'blueColor' : ''}`}>Products</h3>
            <ProductList products={this.state.products}></ProductList>
            </>
        );
    }
}
export default AllProductsComponent;