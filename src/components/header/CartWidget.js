import React from "react";
import { useContext } from "react";
import cart from "../../img/cart.svg";
import { listCartContext } from "../components item/ProviderContextListCart";
import { controllerShowCart } from "./ContextCart";

const CartWidget = () => {
  const { setCartShow, cartShow } = useContext(controllerShowCart);
  const { listCart } = useContext(listCartContext);

  const showCart = () => {
    setCartShow(cartShow === "none" ? "flex" : "none");
  };

  const calcularTotal = () => {
    let totalPrice = 0;

    for (let i = 0; i < listCart.length; i++) {
      const product = listCart[i];

      const subtotal = product.quantity;

      totalPrice += subtotal;
    }

    return totalPrice;
  };


  return (
    <div className="containerLength" onClick={showCart}>
      <img src={cart} alt="cart"></img>
      <span className="cantCart">{calcularTotal()}</span>
    </div>
  );
};

export default CartWidget;
