import React, { Component } from "react";
import { connect } from "react-redux";

import "./BooksList.css";

import { compose } from "../../utils";
import { fetchBooks, addedBookToCart } from "../../actions";
import { withBookstoreService } from "../hoc";

import BooksListItem from "../BooksListItem";
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";

const BooksList = ({ books, onAddedBookToCart }) => {
  return (
    <ul className="books-list">
      {books.map((book) => {
        return (
          <li key={book.id}>
            <BooksListItem
              book={book}
              onAddedBookToCart={() => onAddedBookToCart(book.id)}
            />
          </li>
        );
      })}
    </ul>
  );
};

class BooksListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks();
  }

  render() {
    const { books, loading, error, onAddedBookToCart } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return <BooksList books={books} onAddedBookToCart={onAddedBookToCart} />;
  }
}

const mapStateToProps = ({ booksList: { books, loading, error } }) => {
  return { books, loading, error };
};

const mapDispatchToProps = (dispatch, { bookstoreService }) => {
  return {
    fetchBooks: fetchBooks(dispatch, bookstoreService),
    onAddedBookToCart: (id) => dispatch(addedBookToCart(id)),
  };
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BooksListContainer);
