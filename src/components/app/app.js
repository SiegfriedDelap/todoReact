import React, {Component} from "react";
import Spinner from "../spinner";
import {withBookstoreService} from '../hoc';
import {Route, Router, Switch} from 'react-router-dom';
import {HomePage, CartPage} from '../pages';


const App = ({bookstoreService}) => {
    console.log(bookstoreService.getBooks());
    return (
        <Switch>
            <Route 
                path="/"
                component={HomePage}
            />
        </Switch>
    )
};

export default withBookstoreService()(App);