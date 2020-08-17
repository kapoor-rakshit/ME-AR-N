import React from 'react';
import { Link } from 'react-router-dom';
import ProductDataService from './ProductDataService';

class ProductsList extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            products: []
        };
    }

    componentDidMount() {
        ProductDataService.getAllProducts((respDATA) => {
            this.setState((prevState) => {
                return (
                    {products: [...prevState.products, ...respDATA]}
                );
            });
        });
    }

    render() {
        let productsData = this.state.products.map((prod) => {
            return (
                <tr key={prod.id}>
                    <td><Link to={`/products/detail/${prod.id}`}>{prod.id}</Link></td>
                    <td>{prod.name}</td>
                    <td>{prod.quantity}</td>
                    <td>{prod.price}</td>
                </tr>
            );
        });
        return (
            <>
            <div className={`tableContainer`}>
            <table>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>                
                    {productsData}
                </tbody>
            </table>
            </div>
            <br/>
            <br/>
            <Link className={`marginleft`} to={`/products/add`}><button className={`btn btn-primary`}>Add Product</button></Link>
            </>
        );
    }
}
export default ProductsList;