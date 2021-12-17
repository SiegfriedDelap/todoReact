import React from "react";
import './shop-header.css';

const ShopHeader =({numItems, total})=>{
    return (
        <header className="shop-header">
            <a className="logo text-dark" href="#">BookStore</a>
            <a>
                <i className="cart-icon fa fa-shopping-cart shopping-cart"/>
                <span className="cart-info">{numItems} items ($ {total})</span>
            </a>
        </header>
    );
};

export default ShopHeader;