import React from "react";
import PropTypes from "prop-types";

import "./BooksListItem.css";

const BooksListItem = ({ book, onAddedBookToCart }) => {
  const { title, author, price, coverImage } = book;
  return (
    <div className="books-list-item">
      <div className="book-cover">
        <img src={coverImage} alt="cover" />
      </div>
      <div className="book-details">
        <span className="book-title">{title}</span>
        <div className="book-author">{author}</div>
        <div className="book-price">${price}</div>
        <button
          className="btn btn-info add-to-cart"
          onClick={onAddedBookToCart}
        >
          Add to cart
        </button>
      </div>
    </div>
  );
};

BooksListItem.propTypes = {
  book: PropTypes.object,
  onAddedBookToCart: PropTypes.func,
};

BooksListItem.defaultProps = {
  book: {},
  onAddedBookToCart: () => {},
};

export default BooksListItem;
