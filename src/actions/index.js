const booksLoaded = (newBooks) => {
  return {
    type: "BOOKS_LOADED",
    payload: newBooks,
  };
};

const booksRequested = () => {
  return {
    type: "BOOKS_REQUESTED",
  };
};

const booksFetchError = (error) => {
  return {
    type: "BOOKS_FETCH_ERROR",
    payload: error,
  };
};

export { booksLoaded, booksRequested, booksFetchError };
