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
  const {
    booksList: { books },
    shoppingCart: { cartItems },
  } = state;

  const book = books.find(({ id }) => id === bookId);
  const itemIndex = cartItems.findIndex(({ id }) => id === book.id);
  const item = cartItems[itemIndex];
  const newItem = updateCartItem(book, item, quantity);

  return {
    cartTotal: 0,
    cartItems: updateCartItems(cartItems, newItem, itemIndex),
  };
};

const updateShoppingCart = (state, action) => {
  if (state === undefined) {
    return {
      cartItems: [],
      cartTotal: 0,
    };
  }

  switch (action.type) {
    case "ADDED_BOOK_TO_CART":
      return updateOrder(state, action.payload, 1);
    case "REMOVED_BOOK_FROM_CART":
      return updateOrder(state, action.payload, -1);
    case "REMOVED_ALL_BOOKS_FROM_CART":
      const item = state.shoppingCart.cartItems.find(
        ({ id }) => id === action.payload
      );
      return updateOrder(state, action.payload, -item.count);
    default:
      return state.shoppingCart;
  }
};

export default updateShoppingCart;
