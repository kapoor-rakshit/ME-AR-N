import React from 'react';
import { Link } from 'react-router-dom';
import ProductStore from '../stores/ProductStore';
import ProductActions from '../actions/ProductActions';

class ProductListComponent extends React.Component {
    constructor(props) {
        super(props);
        this._onProductChange = this._onChange.bind(this);

        this.state = {
            products: ProductStore.getAllProducts()
        }
    }

    componentDidMount() {
        ProductStore.addChangeListener(this._onProductChange);
        ProductActions.getAllProductsAction();
    }

    componentWillUnmount() {
        ProductStore.removeChangeListener(this._onProductChange);
    }

    _onChange() {
        this.setState({products: ProductStore.getAllProducts()});
    }

    deleteProduct(prodID) {
        ProductActions.deleteProductAction(prodID);
    }

    render() {
        let productsData = this.state.products.map((prod) => {
            return (
                <tr key={prod.id}>
                    <td><Link to={`/products/detail/${prod.id}`}>{prod.id}</Link></td>
                    <td>{prod.name}</td>
                    <td>{prod.quantity}</td>
                    <td>{prod.price}</td>
                    <td><button className={`btn btn-danger`} onClick={()=> this.deleteProduct(prod.id)}>Delete</button></td>
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
                        <th></th>
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
export default ProductListComponent;