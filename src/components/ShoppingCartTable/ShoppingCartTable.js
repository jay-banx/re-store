import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";

import "./ShoppingCartTable.css";

import {
  addedBookToCart,
  removedBookFromCart,
  removedAllBooksFromCart,
} from "../../actions";

const ShoppingCartTable = ({
  items,
  total,
  onDecrease,
  onIncrease,
  onDelete,
}) => {
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item;
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            className="btn btn-outline-danger btn-sm float-right"
            onClick={() => onDelete(id)}
          >
            <i className="fa fa-trash-o" />
          </button>
          <button
            className="btn btn-outline-success btn-sm float-right"
            onClick={() => onIncrease(id)}
          >
            <i className="fa fa-plus-circle" />
          </button>
          <button
            className="btn btn-outline-warning btn-sm float-right"
            onClick={() => onDecrease(id)}
          >
            <i className="fa fa-minus-circle" />
          </button>
        </td>
      </tr>
    );
  };

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>
      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Total</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>{items.map(renderRow)}</tbody>
      </table>

      <div className="total">Total: ${total}</div>
    </div>
  );
};

ShoppingCartTable.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object),
  total: PropTypes.number,
  onDecrease: PropTypes.func,
  onIncrease: PropTypes.func,
  onDelete: PropTypes.func,
};

ShoppingCartTable.defaultProps = {
  items: [],
  total: 0,
  onDecrease: () => {},
  onIncrease: () => {},
  onDelete: () => {},
};

const mapStateToProps = (state) => {
  const { shoppingCart } = state;
  return {
    items: shoppingCart.cartItems,
    total: shoppingCart.cartTotal,
  };
};

const mapDispatchToProps = {
  onDecrease: removedBookFromCart,
  onIncrease: addedBookToCart,
  onDelete: removedAllBooksFromCart,
};

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable);
