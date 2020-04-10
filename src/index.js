import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { BrowserRouter as Router } from "react-router-dom";

import BookstoreService from "./services/BookstoreService";
import { BookstoreServiceProvider } from "./components/BookstoreServiceContext";

import ErrorBoundry from "./components/ErrorBoundry";

import store from "./store";

import App from "./components/App";

const bookstoreService = new BookstoreService();

ReactDOM.render(
  <Provider store={store}>
    <ErrorBoundry>
      <BookstoreServiceProvider value={bookstoreService}>
        <Router>
          <App />
        </Router>
      </BookstoreServiceProvider>
    </ErrorBoundry>
  </Provider>,
  document.getElementById("root")
);
