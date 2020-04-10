import React from "react";
import BooksList from "../BooksList";
import ShoppingCartTable from "../ShoppingCartTable";

const HomePage = () => {
  return (
    <div>
      <BooksList />
      <ShoppingCartTable />
    </div>
  );
};

export default HomePage;
