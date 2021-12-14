import React, {Component} from "react";
import BookListItem from "../book-list-item";
import {connect} from 'react-redux';
import { bindActionCreators } from "redux";
import { withBookstoreService } from "../hoc";
import {booksLoaded} from '../../actions';
import compose from '../../utils';
import './book-list.css';

class BookList extends Component {
    componentDidMount(){
        //1. recive data
        const {bookstoreService} = this.props;
        const data = bookstoreService.getBooks();
        //2. dispatch action to state
        this.props.booksLoaded(data);

    }
    render() {
        const {books} = this.props;
        return(
            <ul>
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


const mapStatetoProps = ({books}) => {
    return {
        books
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
    booksLoaded
};

export default compose(
    withBookstoreService(),
    connect(mapStatetoProps, mapDispatchToProps)
)(BookList);

// export default withBookstoreService()(connect(mapStatetoProps, mapDispatchToProps)(BookList));