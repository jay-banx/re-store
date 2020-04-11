const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [
    {
      id: 0,
      title: "Book 1",
      count: 2,
      total: 40,
    },
    {
      id: 1,
      title: "Book 2",
      count: 1,
      total: 30,
    },
  ],
  cartTotal: 70,
};

const reducer = (state = initialState, action) => {
  console.log(action.type);
  switch (action.type) {
    case "FETCH_BOOKS_REQUEST":
      return {
        ...state,
        books: [],
        loading: true,
        error: null,
      };
    case "FETCH_BOOKS_SUCCESS":
      return {
        ...state,
        books: action.payload,
        loading: false,
        error: null,
      };
    case "FETCH_BOOKS_FAILURE":
      return {
        ...state,
        books: [],
        loading: false,
        error: action.payload,
      };
    case "ADDED_BOOK_TO_CART":
      const bookID = action.payload;
      const book = state.books.find((book) => book.id === bookID);
      return {
        ...state,
        cartItems: [
          ...state.cartItems,
          {
            id: book.id,
            title: book.title,
            count: 1,
            total: book.price,
          },
        ],
      };
    default:
      return state;
  }
};

export default reducer;
