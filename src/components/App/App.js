import React from "react";
import ErrorBoundry from "../ErrorBoundry";
import { BookstoreServiceProvider } from "../BookstoreServiceContext";
import BookstoreService from "../../services/BookstoreService";

import "./App.css";

const App = () => {
  const bookstoreService = new BookstoreService();

  return (
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookstoreService}>
        <h1>Welcome to ReStore</h1>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  );
};

export default App;
