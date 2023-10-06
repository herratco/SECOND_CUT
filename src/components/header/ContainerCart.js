import React from "react";
import "../../styles/containerCart.css";
import close from "../../img/close.svg";
import ItemCart from "./ItemCart";
import clear from "../../img/clear.svg";
import { useContext } from "react";
import { controllerShowCart } from "./ContextCart";
import { listCartContext } from "../components item/ProviderContextListCart";
import { Link } from "react-router-dom";

const ContainerCart = () => {
  const { cartShow, setCartShow } = useContext(controllerShowCart);
  const { listCart, clearCart } = useContext(listCartContext);

  const style = {
    display: cartShow,
  };

  const closeCart = () => {
    setCartShow(cartShow === "none" ? "flex" : "none");
  };

  return (
    <div className="cart" style={style}>
      <div className="cerrar">
        <button className="close" onClick={closeCart}>
          <img src={close}></img>
        </button>
      </div>

      <div className="containerItemsCart">
        {listCart.length === 0 ? (
          <span className="emptyCart">Your cart is empty, fill it up!</span>
        ) : (
          listCart.map((producto) => (
            <ItemCart
              key={producto.id}
              id={producto.id}
              title={producto.title}
              image={producto.img}
              quantity={producto.quantity}
              price={producto.price}
            />
          ))
        )}
      </div>

      <div className="TerminarCompra">
        <Link to="/checkout">
          <button className="terminar">Finish purchase</button>
        </Link>

        <button className="clear" onClick={clearCart}>
          <img src={clear}></img>
        </button>
      </div>
    </div>
  );
};

export default ContainerCart;
