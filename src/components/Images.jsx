import * as React from "react";
import { connect } from "react-redux";

import { addToCart } from "../actions/actionCreators.js";

const Imagenes = (props) => {
  console.log("props: ", props);

  return (
    <div>
      Algunas Imagenes aca
      <button onClick={() => props.onAddToCart("1234")}>
        Agregar al Carrito{" "}
      </button>
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    cartItems: state.cart.cartItems,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onAddToCart: (productId) => dispatch(addToCart(productId)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Imagenes);
