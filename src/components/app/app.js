import React, {Component} from "react";
import Spinner from "../spinner";
import {withBookstoreService} from '../hoc';
import {Route, Router, Switch} from 'react-router-dom';
import {HomePage, CartPage} from '../pages';


const App = ({bookstoreService}) => {
    return (
        <Switch>
            <Route 
                path="/"
                component={HomePage}
                exact
            />
             <Route 
                path="/cart"
                component={CartPage}
            />
        </Switch>
    )
};

export default withBookstoreService()(App);