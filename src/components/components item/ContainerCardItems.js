import React from "react";
import CardItem from "./CardItem";
import { useState, useEffect } from "react";
import productos from "../../utils/products"
import "../../styles/containerCardsItems.css";
import { useParams } from "react-router-dom";
import { collection, getDocs, query, where } from "firebase/firestore";
import { db } from "../../service/firebase";

const ContainerCardItems = () => {
  const [productos, setProductos] = useState([]);
  const { idCategory } = useParams();
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    const coleccionProductos = idCategory
      ? query(collection(db, "productos"), where("category", "==", idCategory))
      : collection(db, "productos");
    getDocs(coleccionProductos)
      .then((res) => {
        const list = res.docs.map((product) => {
          return {
            id: product.id,
            ...product.data(),
          };
        });
        setProductos(list);
      })
      .catch((e) => setError(e))
      .finally(() => setLoading(false));
  }, [idCategory]);

  return (
    <div className="containerCardItems">
      {productos.map((product) => (
        <CardItem product={product} />
      ))}
    </div>
  );
};

export default ContainerCardItems;
