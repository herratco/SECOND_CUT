import React from "react";

const Image = (props) => {
  return (
    <div className="containerImg">
      <img src={props.image} height={200} width={200}></img>
    </div>
  );
};

export default Image;
