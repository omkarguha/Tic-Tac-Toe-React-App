import React from "react";

const Square = (props) => {
  return (
    <div
      onClick={props.onClick}
      className="sq"
      style={{ border: "1px solid black", height: "210px", width: "100%", display:"flex", justifyContent:"center", alignItems:"center" }}
    >
      <h1 style={{fontSize:"10vw", paddingTop:"14vh"}}>{props.value}</h1>
    </div>
  );
};

export default Square;
