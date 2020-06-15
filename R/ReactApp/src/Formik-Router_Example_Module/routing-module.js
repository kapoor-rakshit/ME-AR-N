import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, NavLink, Link } from 'react-router-dom';

import './Formik_Route_Component.css'

import PageNotFound from './NotFoundComponent';
import AboutComponent from './AboutComponent';
import AddProduct from './ProductAddComponent';
import ProductDetail from './ProductDetailComponent';
import EditProduct from './ProductEditComponent';
import ProductsList from './ProductsComponent';

class RouterOutlet extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            <Router>
            <nav className="navbar navbar-expand-lg sticky-top">
                <Link className="navbar-brand" to={`/`}>ProductsApp</Link>
                <NavLink className="nav-item nav-link" to={`/`} activeClassName={`activeNav`} exact>Home</NavLink>
                <NavLink className="nav-item nav-link" to={`/products`} activeClassName={`activeNav`}>Inventory</NavLink>
            </nav>
                <Switch>
                    <Route exact path={`/`} component={AboutComponent}></Route>
                    <Route exact path={`/home`}>
                        <Redirect to={`/`}/>
                    </Route>
                    <Route exact path={`/products`} component={ProductsList}></Route>
                    <Route exact path={`/products/add`} component={AddProduct}></Route>
                    <Route exact path={`/products/detail/:id`} component={ProductDetail}></Route>
                    <Route exact path={`/products/edit/:id`} component={EditProduct}></Route>
                    <Route path={`*`} component={PageNotFound}></Route>  
                </Switch>
            </Router>
            </>
        );
    }
}
export default RouterOutlet;