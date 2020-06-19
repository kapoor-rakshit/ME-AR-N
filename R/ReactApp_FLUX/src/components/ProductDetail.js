import React from 'react';
import { Prompt, withRouter } from 'react-router-dom';
import RouterOutlet from './routing-module';
import ProductActions from '../actions/ProductActions';
import ProductStore from '../stores/ProductStore';

class ProductDetailComponent extends React.Component {
    constructor(props) {
        super(props);

        this._onProductChange = this._onChange.bind(this);

        this.state = {
            productID: this.props.match.params.id,
            product: ProductStore.getProduct()
        }

        if(!window.confirm("Are you sure to view details ?")) {
            this.props.history.push(`/products`);
        }
        
    }

    componentDidMount() {
        ProductStore.addChangeListener(this._onProductChange);
        ProductActions.getProductAction(this.state.productID);
    }

    componentWillUnmount() {
        ProductStore.removeChangeListener(this._onProductChange);
    }

    _onChange() {
        this.setState({product: ProductStore.getProduct()});
    }

    render() {
        return (
            <>
            <h3 className={`textcenter`}>Product #{this.state.productID}</h3>
            <p>Name : {this.state.product.name}</p>
            <p>Quantity : {this.state.product.quantity}</p>
            <p>Price : {this.state.product.price}</p>
            <Prompt when={true} message={`Are you sure to leave ?`}></Prompt>
            </>
        );
    }
}
export default withRouter(ProductDetailComponent);