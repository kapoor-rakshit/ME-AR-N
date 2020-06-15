import React from 'react';
import ProductDataService from './ProductDataService';

import {withRouter, Link} from 'react-router-dom';

class ProductDetail extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            productID: this.props.match.params.id
        }
    }

    deleteProduct(et, prodID) {
        ProductDataService.deleteProduct((respDATA) => {
            console.log(`DELETE RESPONSE ==> ${JSON.stringify(respDATA)}`);
            this.props.history.replace('/products');
        }, prodID);
    }

    render() {
        return (
            <>
            <h3 className={`textcenter`}>Product #{this.state.productID}</h3>
            <Link to={`/products/edit/${this.state.productID}`}><button className={`btn btn-primary marginleft`}>Edit</button></Link>&nbsp;&nbsp;
            <button className={`btn btn-danger marginleft`} onClick={(evt) => this.deleteProduct(evt, this.state.productID)}>Delete</button>
            </>
        );
    }
}
export default withRouter(ProductDetail);