import React, { useContext } from "react";
import cartWhite from "../../img/cart-white.svg";
import { listCartContext } from "./ProviderContextListCart";

const ButtonAddCart = ({ id, quantity }) => {
  const { addProduct } = useContext(listCartContext);

  return (
    <button id="AddCart" onClick={() => addProduct(id, quantity)}>
      <img src={cartWhite} height={50} width={50} alt="Añadir al carrito" />
    </button>
  );
};

export default ButtonAddCart;
