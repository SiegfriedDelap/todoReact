import React, {Component} from "react";
import Spinner from "../spinner";
import {withBookstoreService} from '../hoc';

const App = ({bookstoreService}) => {
    console.log(bookstoreService.getBooks());
    return (
        <Spinner/>
    )
};

export default withBookstoreService()(App);