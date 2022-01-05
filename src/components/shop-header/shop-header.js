import React from "react";
import { Link } from "react-router-dom";
import './shop-header.css';
import { useSelector } from 'react-redux';


const ShopHeader = () => {
    const {cartItems, orderTotal} = useSelector(state => state.shoppingCart);
    let countItems = 0;
    cartItems.forEach((item)=>{
        countItems += item.count
    });
    return (
        <header className="shop-header">
            <Link to='/'>
                <div className="logo text-dark" href="#">BookStore</div>
            </Link>
            <Link to='/cart'>
                <div>
                    <i className="cart-icon fa fa-shopping-cart shopping-cart" />
                    <span className="cart-info">{countItems} items ($ {orderTotal})</span>
                </div>
            </Link>
        </header>
    );
};


export default ShopHeader;