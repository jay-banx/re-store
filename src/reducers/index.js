const initialState = {
  books: [
    {
      id: 1,
      title: "React in Action",
      author: "Mark A. Thomas",
    },
    {
      id: 2,
      title: "Test Book",
      author: "Test Author",
    },
  ],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "BOOKS_LOADED":
      return {
        books: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
