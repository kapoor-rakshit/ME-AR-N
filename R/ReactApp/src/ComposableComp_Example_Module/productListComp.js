import React from 'react';
import Table from 'react-bootstrap/Table';
import Products from './products';

class ProductList extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        let productComponents = this.props.products.map((product) => {
            return (
                // USING HTML TAG as COMPOSABLE
                // <tr key={product.id}>
                //     <td>{product.id}</td>
                //     <td>{product.name}</td>
                //     <td>{product.quantity}</td>
                //     <td>{product.price}</td>
                // </tr>

                // USING COMPONENT as COMPOSABLE
                <Products key={product.id} id={product.id} price={product.price} quantity={product.quantity}>
                    {product.name}
                </Products>
            );
        });
        return (
            <>
            <Table responsive striped bordered hover>
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Quantity</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    {productComponents}
                </tbody>
            </Table>
            </>
        );
    }
}
export default ProductList;