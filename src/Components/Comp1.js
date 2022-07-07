import React from "react";
// import { useState } from "react";

function Comp1(props) {
    return (
      <div style={{display: "flex"}}>
        <div>
          <img src={props.cardImage} alt="image"></img>
          <h3>{props.cardTitle}</h3>
          <p>Description: {props.cardDescription}</p>
        </div>
      </div>
    );
}

export { Comp1 };