import React, { useState } from "react";
import ButtonAddCart from "./ButtonAddCart";
import "../../styles/itemCounter.css";

const ItemCounter = ({ product }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => {
    if (quantity < product.stock) {
      setQuantity(quantity + 1);
    }
  };

  const decrement = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1);
    }
  };

  return (
    <div className="Counter">
      <div className="Controls">
        <button className="Button" onClick={decrement}>
          -
        </button>
        <h4 className="Number">{quantity}</h4>
        <button className="Button" onClick={increment}>
          +
        </button>
      </div>

      <ButtonAddCart id={product.id} quantity={quantity} />
    </div>
  );
};

export default ItemCounter;
