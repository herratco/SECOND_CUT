import React from "react";
import { Link } from "react-router-dom";

const ButtonDetalles = (props) => {
  return (
    <Link to={`/items/${props.id}`} className="ButtonsDetalles">
      Check details
    </Link>
  );
};

export default ButtonDetalles;
