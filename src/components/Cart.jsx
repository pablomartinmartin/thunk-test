import * as React from "react";
import { connect } from "react-redux";

const Cart = ({ cartItems }) => {
  console.log("cartItems: ", cartItems);
  return (
    <div>
      Estos son los productos en tu carrito
      {cartItems?.length
        ? cartItems.map((item, index) => <div key={index}>{item}</div>)
        : null}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

export default connect(mapStateToProps, null)(Cart);
