const fetchBooksRequest = () => {
  return {
    type: "FETCH_BOOKS_REQUEST",
  };
};

const fetchBooksSuccess = (newBooks) => {
  return {
    type: "FETCH_BOOKS_SUCCESS",
    payload: newBooks,
  };
};

const fetchBooksFailure = (error) => {
  return {
    type: "FETCH_BOOKS_FAILURE",
    payload: error,
  };
};

const fetchBooks = (dispatch, bookstoreService) => () => {
  dispatch(fetchBooksRequest());
  bookstoreService
    .getBooks()
    .then((data) => dispatch(fetchBooksSuccess(data)))
    .catch((error) => dispatch(fetchBooksFailure(error)));
};

const addedBookToCart = (bookId) => {
  return {
    type: "ADDED_BOOK_TO_CART",
    payload: bookId,
  };
};

export { fetchBooks, addedBookToCart };
