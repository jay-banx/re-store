import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import { HomePage, CartPage } from "../pages";

const App = () => {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/cart" component={CartPage} />
      <Route
        render={() => {
          return <div>Page not found</div>;
        }}
      />
    </Switch>
  );
};

export default App;
