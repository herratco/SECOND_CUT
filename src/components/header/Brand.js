import { Link } from "react-router-dom";
import React from "react";
import cart from "../../img/brand.svg";
import "../../styles/brand.css";


const Brand = () => {
  return (
    <Link to="/">
      <div className="brandContainer">
      <img
        src={cart}
        alt=""
        width={70}
        height={70}
        title=""
      /> 
      <p className="brandName">Square Phones</p> 
      </div>
    </Link>
  );
};

export default Brand;
