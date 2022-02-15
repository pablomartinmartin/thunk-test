import * as React from "react";

const ProductCard = ({
  productName,
  inCart,
  sku,
  onRemoveCart,
  onAddToCart,
}) => {
  return (
    <div>
      <div style={{ display: "flex", flexDirection: "column" }}>
        <div>{productName}</div>
        <div>{sku}</div>
      </div>

      {inCart ? (
        <button type="button" onClick={() => onRemoveCart(sku)}>
          Remover del Carrito
        </button>
      ) : (
        <button type="button" onClick={() => onAddToCart(sku)}>
          Agregar al Carrito
        </button>
      )}
    </div>
  );
};

export default ProductCard;
