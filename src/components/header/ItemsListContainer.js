import React from "react";
import { Link } from "react-router-dom";

const ItemListContainer = (props) => {
  return (
    <ul>
      <li>
        <Link to="category/Phones">{props.itemUno}</Link>
      </li>
      <li>
        <Link to="category/Watchs">{props.itemDos}</Link>
      </li>
      <li>
        <Link to="category/Pods">{props.itemTres}</Link>
      </li>
     
    </ul>
  );
};

export default ItemListContainer;
