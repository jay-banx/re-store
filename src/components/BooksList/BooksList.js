import React, { Component } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

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

BooksList.propTypes = {
  books: PropTypes.arrayOf(PropTypes.object),
  onAddedBookToCart: PropTypes.func,
};

BooksList.defaultProps = {
  books: [],
  onAddedBookToCart: () => {},
};

class BooksListContainer extends Component {
  static propTypes = {
    books: PropTypes.arrayOf(PropTypes.object),
    loading: PropTypes.bool,
    error: PropTypes.object,
    onAddedBookToCart: PropTypes.func,
  };

  static defaultProps = {
    books: [],
    loading: true,
    error: null,
    onAddedBookToCart: () => {},
  };

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
  return bindActionCreators(
    {
      fetchBooks: fetchBooks(bookstoreService),
      onAddedBookToCart: addedBookToCart,
    },
    dispatch
  );
};

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BooksListContainer);
