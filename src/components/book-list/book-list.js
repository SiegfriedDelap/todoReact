import React, {Component} from "react";
import BookListItem from "../book-list-item";
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import { withBookstoreService } from "../hoc";
import {fetchBooks} from '../../actions';
import compose from '../../utils';
import Spinner from '../spinner';
import ErrorIndicator from '../error-indicator';
import './book-list.css';

const BookList = ({books}) => {
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

class BookListContainer extends Component {
    componentDidMount(){
        this.props.fetchBooks();
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
        
        return <BookList books={books} />
       
    }
}



const mapStatetoProps = ({books, loading, error}) => {
    return {
        books,
        loading,
        error
    };
};

const mapDispatchToProps = (dispatch, {bookstoreService}) => {
    return {
       fetchBooks: fetchBooks(dispatch, bookstoreService)
    }
}

export default compose(
    withBookstoreService(),
    connect(mapStatetoProps, mapDispatchToProps)
)(BookListContainer);

// export default withBookstoreService()(connect(mapStatetoProps, mapDispatchToProps)(BookList));