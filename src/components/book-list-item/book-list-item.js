// eslint-disable-next-line no-lone-blocks
// eslint-disable-next-line jsx-a11y/anchor-is-valid
import React from "react";
import './book-list-item.css';

const BookListItem =({book, onAddedToCart})=>{
    const {title, author, price, coverImage} = book;
    return(
        <div className="book-list-item">
            <div className="book-cover">
                <img src = {coverImage} alt="cover"/>
            </div>
            <div className="book-details">
                {/* <a href="" className="book-title">{title}</a> */}
                <div className="book-title">{title}</div>
                <div className="book-author">{author}</div>
                <div className="book-price"> $ {price}</div>
                <button 
                    onClick={onAddedToCart}
                    className="btn btn-info add-to-cart">Add to cart
                    </button>           
            </div>
        </div>
    );
};

export default BookListItem;