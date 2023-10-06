import React from "react";
import { useState, useEffect } from "react";
import { createContext } from "react";
import { db } from "../../service/firebase";
import { collection, getDocs } from "firebase/firestore";

export const listCartContext = createContext(null);

const ProviderContextListCart = ({ children }) => {
  const [listCart, setListCart] = useState([]);
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    getDocs(collection(db, "productos")).then((res) => {
      const list = res.docs.map((product) => {
        return {
          id: product.id,
          ...product.data(),
        };
      });
      setProductos(list);
    });
  }, []);

  const addProduct = (id, selectedQuantity) => {
    //producto a añadir al carrito
    const productAdd = productos.find((product) => product.id === id);

    // productos se mantendran en el carrito
    const productsToMaintain = listCart.filter((product) => product.id !== id);

    let add = true;
    for (let product of listCart) {
      if (product.id === id) {
        let quantity = product.quantity;

        if (quantity < productAdd.stock) {
          const newQuantity = {
            ...product,
            quantity: product.quantity + selectedQuantity,
          };
          setListCart([...productsToMaintain, newQuantity]);
        }

        add = false;
        break;
      }
    }

    add &&
      setListCart([
        ...productsToMaintain,
        { ...productAdd, quantity: selectedQuantity },
      ]);
  };

  const clearCart = () => {
    setListCart([]);
  };

  const removeFromCart = (id) => {
    const updateList = listCart.filter((product) => product.id !== id);
    setListCart(updateList);
  };

  return (
    <listCartContext.Provider
      value={{ removeFromCart, listCart, addProduct, clearCart }}
    >
      {children}
    </listCartContext.Provider>
  );
};

export default ProviderContextListCart;
