import React, { Component } from "react";
import { connect } from "react-redux";

import "./BooksList.css";

import BooksListItem from "../BooksListItem";

class BooksList extends Component {
  render() {
    const { books } = this.props;
    return (
      <ul>
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

export default connect(mapStateToProps)(BooksList);
