import React, { Component } from "react";
import { connect } from "react-redux";

import "./BooksList.css";

import { compose } from "../../utils";
import { booksRequested, booksLoaded, booksFetchError } from "../../actions";
import { withBookstoreService } from "../hoc";

import BooksListItem from "../BooksListItem";
import Spinner from "../Spinner";
import ErrorIndicator from "../ErrorIndicator";

class BooksList extends Component {
  componentDidMount() {
    const {
      bookstoreService,
      booksRequested,
      booksLoaded,
      booksFetchError,
    } = this.props;

    booksRequested();
    bookstoreService
      .getBooks()
      .then((data) => booksLoaded(data))
      .catch((error) => booksFetchError(error));
  }

  render() {
    const { books, loading, error } = this.props;

    if (loading) {
      return <Spinner />;
    }

    if (error) {
      return <ErrorIndicator />;
    }

    return (
      <ul className="books-list">
        {books.map((book) => {
          return (
            <li key={book.id}>
              <BooksListItem book={book} />
            </li>
          );
        })}
      </ul>
    );
  }
}

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error };
};

const mapDispatchToProps = { booksRequested, booksLoaded, booksFetchError };

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BooksList);
