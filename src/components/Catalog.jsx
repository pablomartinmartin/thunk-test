import * as React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

import {
  addToCart,
  getProducts,
  removeCart,
} from "../actions/actionCreators.js";

import ProductCard from "./ProductCard";

const Catalog = ({
  cartItems,
  catalog,
  onAddToCart,
  onGetProducts,
  onRemoveCart,
}) => {
  console.log("cartItems: ", cartItems);
  React.useEffect(() => {
    onGetProducts();
  }, []);

  return (
    <div>
      <div style={{ margin: "20px" }}>
        <Link to="/cart">Ir al Carrito</Link>
      </div>

      {catalog &&
        catalog?.productos &&
        catalog.productos.map((item) => (
          <ProductCard
            key={item.id}
            productName={item.title}
            onAddToCart={onAddToCart}
            onRemoveCart={onRemoveCart}
            sku={item.sku}
          />
        ))}
    </div>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    cartItems: state.cart.cartItems,
    catalog: state.cart.catalog,
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onGetProducts: () => dispatch(getProducts()),
    onAddToCart: (productSku) => dispatch(addToCart(productSku)),
    onRemoveCart: (productSku) => dispatch(removeCart(productSku)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Catalog);
