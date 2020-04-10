import React from "react";
import { withBookstoreService } from "../hoc";

import "./App.css";

const App = ({ bookstoreService }) => {
  console.log(bookstoreService.getBooks());
  return <h1>Welcome to ReStore</h1>;
};

export default withBookstoreService()(App);
