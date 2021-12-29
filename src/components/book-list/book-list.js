import React, {Component} from "react";
import BookListItem from "../book-list-item";
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import { withBookstoreService } from "../hoc";
import {booksLoaded, booksRequested, booksError} from '../../actions';
import compose from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import './book-list.css';

class BookList extends Component {
    componentDidMount(){
        //1. recive data
        const {bookstoreService, booksLoaded, booksRequested, booksError} = this.props;
        booksRequested();
        bookstoreService.getBooks()
        .then((data)=>{
            booksLoaded(data);
        })
        .catch((err)=>{
            booksError(err)
        });
    }
    render() {
        const {books, loading, error} = this.props;
        if(loading){
            return(
                <Spinner />
            )
        }
        if(error){
            return <ErrorIndicator/>
        }
        return(
            <ul className="book-list">
                {
                    books.map((book)=>{
                        return(
                            <li key={book.id}><BookListItem book={book}/></li>
                        )
                    })
                }
            </ul>
        );
    }
}


const mapStatetoProps = ({books, loading, error}) => {
    return {
        books,
        loading,
        error
    };
};

// const mapDispatchToProps = (dispatch)=>{
//     // return{
//     //     booksLoaded: (newBooks) => {
//     //         dispatch(booksLoaded(newBooks));
//     //     }
//     // };
//     // return bindActionCreators({
//     //     booksLoaded
//     // }, dispatch);
    
// };

const mapDispatchToProps = {
    booksLoaded,
    booksRequested,
    booksError
};

export default compose(
    withBookstoreService(),
    connect(mapStatetoProps, mapDispatchToProps)
)(BookList);

// export default withBookstoreService()(connect(mapStatetoProps, mapDispatchToProps)(BookList));