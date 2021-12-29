import React from "react";
import { Link } from "react-router-dom";
import './shop-header.css';

const ShopHeader =({numItems, total})=>{
    return (
        <header className="shop-header">
            <Link to='/'>
                <div className="logo text-dark" href="#">BookStore</div>
            </Link>
            <Link to='/cart'>
                <div>
                    <i className="cart-icon fa fa-shopping-cart shopping-cart"/>
                    <span className="cart-info">{numItems} items ($ {total})</span>
                </div>
            </Link>
        </header>
    );
};

export default ShopHeader;