import React from "react";
import Image from "./Image";
import Description from "./Description";
import "../../styles/carditem.css";
import ButtonDetalles from "./ButtonDetalles";
import ItemCounter from "./ItemCounter";

const CardItem = ({ product, counter }) => {
  return (
    <div className="cardItem">
      <Image image={product.img} />
      <Description
        title={product.title}
        cantidad={product.stock}
        precio={product.price}
      />
      <div>
        {counter ? (
          <ItemCounter product={product} />
        ) : (
          <div className="buttons">
            <ButtonDetalles id={product.id} />
            
          </div>
        )}
      </div>
    </div>
  );
};

export default CardItem;
