import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import "./ShopHeader.css";

const ShopHeader = ({ count, total }) => {
  const info = count > 0 ? `${count} items ($${total})` : null;
  return (
    <header className="shop-header row">
      <Link to="/">
        <div className="logo text-dark">ReStore</div>
      </Link>
      <Link to="/cart">
        <div className="shopping-cart">
          <i className="cart-icon fa fa-shopping-cart" />
          {info}
        </div>
      </Link>
    </header>
  );
};

ShopHeader.propTypes = {
  count: PropTypes.number,
  total: PropTypes.number,
};

ShopHeader.defaultProps = {
  count: 0,
  total: 0,
};

const mapStateToProps = (state) => {
  const { shoppingCart } = state;
  return {
    count: shoppingCart.cartCount,
    total: shoppingCart.cartTotal,
  };
};

export default connect(mapStateToProps)(ShopHeader);
