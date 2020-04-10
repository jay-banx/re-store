import React, { Component } from "react";
import { connect } from "react-redux";

import "./BooksList.css";

import { compose } from "../../utils";
import { booksLoaded } from "../../actions";
import { withBookstoreService } from "../hoc";

import BooksListItem from "../BooksListItem";
import Spinner from "../Spinner";

class BooksList extends Component {
  componentDidMount() {
    const { bookstoreService, booksLoaded } = this.props;
    bookstoreService.getBooks().then((data) => booksLoaded(data));
  }

  render() {
    const { books, loading } = this.props;
    if (loading) {
      return <Spinner />;
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

const mapStateToProps = ({ books, loading }) => {
  return { books, loading };
};

const mapDispatchToProps = { booksLoaded };

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BooksList);
