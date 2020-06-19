import React from 'react';
import { BrowserRouter as Router, Route, Redirect, Switch, NavLink, Link } from 'react-router-dom';

import './productModule.css'
import ProductListComponent from './ProductList';
import AboutComponent from './AboutComponent';
import AddProductComponent from './AddComponent';
import ProductDetailComponent from './ProductDetail';
import PageNotFoundComponent from './PageNotFound';

class RouterOutlet extends React.Component {
    static isLoggedIn = true;

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <>
            <Router>
            <nav className={`navbar navbar-expand-lg sticky-top`}>
                <Link className="navbar-brand" to={`/`}>ProductsApp</Link>
                <NavLink className="nav-item nav-link" to={`/`} activeClassName={`activeNav`} exact>Home</NavLink>
                <NavLink className="nav-item nav-link" to={`/products`} activeClassName={`activeNav`}>Inventory</NavLink>
            </nav>
            <Switch>
                <Route exact path={`/`} component={AboutComponent}></Route>
                <Route path={`/home`}>
                    <Redirect to={`/`}></Redirect>
                </Route>
                <Route exact path={`/products`} component={ProductListComponent}></Route>
                <Route exact path={`/products/add`} component={AddProductComponent}></Route>
                <Route exact path={`/products/detail/:id`} component={ProductDetailComponent}></Route>
                <Route path={`*`} component={PageNotFoundComponent}></Route>  
            </Switch>
            </Router>
            </>
        );
    }
}
export default RouterOutlet;