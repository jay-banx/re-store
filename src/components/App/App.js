import React from "react";
import { Route, Switch } from "react-router-dom";

import "./App.css";

import ShopHeader from "../ShopHeader";
import { HomePage, CartPage } from "../pages";

const App = () => {
  return (
    <main role="main" className="container">
      <ShopHeader />
      <Switch>
        <Route path="/" exact component={HomePage} />

        <Route path="/cart" component={CartPage} />
        <Route
          render={() => {
            return <div>Page not found</div>;
          }}
        />
      </Switch>
    </main>
  );
};

export default App;
