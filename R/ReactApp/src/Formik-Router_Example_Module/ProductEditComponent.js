import React from 'react';
import { withFormik, Field, Form, Formik } from 'formik';
import * as Yup from 'yup';

import {withRouter, Link} from 'react-router-dom';

import ProductDataService from './ProductDataService';

class EditProduct extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            product_ID: this.props.match.params.id,
            naam: "",
            quant: 0,
            price: 0
        }
    }

    componentDidMount() {
        ProductDataService.getProduct((respDATA) => {
            this.setState({naam: respDATA.name, quant: respDATA.quantity, price: respDATA.price})
        }, this.state.product_ID);
    }

    render() {
        return (
            <>
            <Formik
                enableReinitialize={true}
                initialValues={{prodName: this.state.naam, prodQuant: this.state.quant, prodPrice: this.state.price}}
                validationSchema={Yup.object().shape({
                    prodName: Yup.string().trim().min(3, 'Name must be at least 3 characters in length').required('Name of product is required'),
                    prodQuant: Yup.number().min(1, 'Quantity must be positive').required('Quantity of product is required'),
                    prodPrice: Yup.number().min(1, 'Price must be positive').required('Price of product is required')
                })}
                onSubmit={(formValues, formActions) => {
                    console.log(`${JSON.stringify(formValues)}`);
                    ProductDataService.saveProduct((respDATA)=>{
                        console.log(`PRODUCT UPDATED ==> ${JSON.stringify(respDATA)}`);
                        this.props.history.replace('/products');
                    }, {id: this.state.product_ID, name: formValues.prodName, quantity: formValues.prodQuant, price: formValues.prodPrice});
                    //formActions.setSubmitting(false);
                }}
            >
            {
                props => (
                <fieldset className={`formContainer`}>
                <legend>Edit Product</legend>
                <Form>
                    <div className={`form-group`}>
                        <Field className={`form-control`} type="text" name="prodName" placeholder="Name"/>
                        {props.touched.prodName && props.errors.prodName && <div className={`alert alert-danger`}>{props.errors.prodName}</div>}
                    </div>
                    <div className={`form-group`}>
                        <Field className={`form-control`} type="number" name="prodQuant" placeholder="Quantity"/>
                        {props.touched.prodQuant && props.errors.prodQuant && <div className={`alert alert-danger`}>{props.errors.prodQuant}</div>}
                    </div>
                    <div className={`form-group`}>
                        <Field className={`form-control`} type="number" name="prodPrice" placeholder="Price"/>
                        {props.touched.prodPrice && props.errors.prodPrice && <div className={`alert alert-danger`}>{props.errors.prodPrice}</div>}
                    </div>
                    <button type="submit" className={`btn btn-primary`} disabled={!props.isValid}>Save</button>
                </Form>
                </fieldset>
            )}
            </Formik>
            </>
        );
    }
}
export default withRouter(EditProduct);