import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { db } from "../../service/firebase";
import { collection, getDocs } from "firebase/firestore";
import fetchSimultion from "../../utils/fetchSimulation";
import productos from "../../utils/products";
import CardItem from "./CardItem";
import "../../styles/detailsItem.css";

const DetailsItem = (props) => {
  const [product, setProduct] = useState();
  const { idItem } = useParams();
  const [loader, setLoader] = useState(false);
  const [error, setError] = useState();

  useEffect(() => {
    setLoader(true);
    const products = collection(db, "productos");
    getDocs(products)
      .then((res) => {
        const list = res.docs.map((product) => {
          return {
            id: product.id,
            ...product.data(),
          };
        });

        const productFilter = list.filter((p) => {
          return p.id === idItem;
        });

        setProduct(productFilter[0]);
      })
      .catch((e) => setError(e))
      .finally(() => setLoader(false));
  }, []);

  return (
    <div className="detailsItem">
      {product && <CardItem product={product} counter />}
    </div>
  );
};

export default DetailsItem;
