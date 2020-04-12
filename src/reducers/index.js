import updateBooksList from "./booksList";
import updateShoppingCart from "./shoppingCart";

const reducer = (state, action) => {
  return {
    booksList: updateBooksList(state, action),
    shoppingCart: updateShoppingCart(state, action),
  };
};

export default reducer;
