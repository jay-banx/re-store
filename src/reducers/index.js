const initialState = {
  books: [],
  loading: true,
  error: null,
  cartItems: [],
  cartTotal: 70,
};

const updateCartItems = (cartItems, item, idx) => {
  return item.count === 0
    ? [...cartItems.slice(0, idx), ...cartItems.slice(idx + 1)]
    : idx === -1
    ? [...cartItems, item]
    : [...cartItems.slice(0, idx), item, ...cartItems.slice(idx + 1)];
};

const updateCartItem = (book, item = {}, quantity) => {
  const { id = book.id, title = book.title, count = 0, total = 0 } = item;

  return {
    id,
    title,
    count: count + quantity,
    total: total + quantity * book.price,
  };
};

const updateOrder = (state, bookId, quantity) => {
  const { books, cartItems } = state;

  const book = books.find(({ id }) => id === bookId);
  const itemIndex = cartItems.findIndex(({ id }) => id === book.id);
  const item = cartItems[itemIndex];
  const newItem = updateCartItem(book, item, quantity);

  return {
    ...state,
    cartItems: updateCartItems(cartItems, newItem, itemIndex),
  };
};

const reducer = (state = initialState, action) => {
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
      return updateOrder(state, action.payload, 1);
    case "REMOVED_BOOK_FROM_CART":
      return updateOrder(state, action.payload, -1);
    case "REMOVED_ALL_BOOKS_FROM_CART":
      const item = state.cartItems.find(({ id }) => id === action.payload);
      return updateOrder(state, action.payload, -item.count);
    default:
      return state;
  }
};

export default reducer;
