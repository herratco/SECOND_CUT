import React, { useState, useContext } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { listCartContext } from "../components item/ProviderContextListCart";
import { db } from "../../service/firebase";
import "../../styles/checkout.css";

const Checkout = () => {
  const [user, setUser] = useState({});
  const [validateEmail, setValidateEmail] = useState("");
  const [orderId, setOrderId] = useState("");
  const { listCart = [], clearCart } = useContext(listCartContext);

  console.log("listCart", listCart);
  console.log("order id", orderId);

  const calcularTotal = () => {
    let totalPrice = 0;

    for (let i = 0; i < listCart.length; i++) {
      const product = listCart[i];

      const subtotal = product.quantity * product.price;

      totalPrice += subtotal;
    }

    return totalPrice;
  };

  const datosComprador = (e) => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const finalizarCompra = (e) => {
    e.preventDefault();
    if (!user.name && !user.phone) {
      alert("Campos incompletos");
    } else {
      let orders = {
        user,
        item: listCart,
        price: calcularTotal(),
        date: serverTimestamp(),
      };
      const ventas = collection(db, "orders");
      addDoc(ventas, orders)
        .then((res) => {
          console.log("order set", res.id);
          setOrderId(res.id);
          clearCart();
        })
        .catch((error) => console.log(error));
    }
  };

  return (
    <div className="checkoutContainer" style={{ marginTop: "100px" }}>
      {orderId !== "" ? (
        <div>
          <h2 className="checkoutTitle">Congratulations! Your order was successfully generated!</h2>
          <h5 className="checkoutText">Your registration id is: {orderId}</h5>
        </div>
      ) : (
        <div>
          <h2 className="checkoutTitle">Completes purchase  </h2>
          <h5 className="checkoutText">Total price: ${calcularTotal()}</h5>
          <h5 className="checkoutTextLast">Please complete your details to continue</h5>
          <form onSubmit={finalizarCompra}>
            <label className="form-label">Full Name</label>
            <div className="mb-3">
              <input
                className="form-control"
                onChange={datosComprador}
                type="text"
                placeholder="Your name"
                name="name"
              />
            </div>
            <label className="form-label">Phone Number</label>
            <div className="mb-3">
              <input
                className="form-control"
                onChange={datosComprador}
                type="number"
                placeholder="+1 456458716"
                name="phone"
              />
            </div>
            <label className="form-label">Mail Address</label>
            <div className="mb-3">
              <input
                className="form-control"
                onChange={datosComprador}
                type="email"
                placeholder="yourmail@example.com"
                name="mail"
              />
            </div>
            <label className="form-label">Confirm Mail Address</label>
            <div className="mb-3">
              <input
                className="form-control"
                type="email"
                placeholder="yourmail@example.com"
                name="mail"
                onChange={(e) => setValidateEmail(e.target.value)}
              />
            </div>
            <button
              className="btn btn-dark"
              type="submit"
              disabled={validateEmail !== user.mail}
            >
              Confirm purchase
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

export default Checkout;
