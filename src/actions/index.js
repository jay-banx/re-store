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

const removedBookFromCart = (bookId) => {
  return {
    type: "REMOVED_BOOK_FROM_CART",
    payload: bookId,
  };
};

const removedAllBooksFromCart = (bookId) => {
  return {
    type: "REMOVED_ALL_BOOKS_FROM_CART",
    payload: bookId,
  };
};

export {
  fetchBooks,
  addedBookToCart,
  removedBookFromCart,
  removedAllBooksFromCart,
};
