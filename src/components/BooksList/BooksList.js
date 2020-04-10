import React, { Component } from "react";
import { connect } from "react-redux";

import "./BooksList.css";

import { compose } from "../../utils";
import { booksLoaded } from "../../actions";
import { withBookstoreService } from "../hoc";

import BooksListItem from "../BooksListItem";

class BooksList extends Component {
  componentDidMount() {
    const { bookstoreService } = this.props;
    const data = bookstoreService.getBooks();

    this.props.booksLoaded(data);
  }

  render() {
    const { books } = this.props;
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

const mapStateToProps = ({ books }) => {
  return { books };
};

const mapDispatchToProps = { booksLoaded };

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BooksList);
