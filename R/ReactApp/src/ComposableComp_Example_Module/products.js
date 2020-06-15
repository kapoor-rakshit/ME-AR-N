import React from 'react';

class Products extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            <tr>
                <td>{this.props.id}</td>
                <td>{this.props.children}</td>
                <td>{this.props.quantity}</td>
                <td>{this.props.price}</td>
            </tr>
            </>
        );
    }
}
export default Products;