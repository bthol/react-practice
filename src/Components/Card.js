import React from "react";
// import { useState } from "react";

function Card(props) {
    return (
      <div className="card">
        <div>
          <img src={props.cardImage} alt="card-image"></img>
          <h3>{props.cardTitle}</h3>
          <p><b>Description:</b> {props.cardDescription}</p>
        </div>
      </div>
    );
}

export { Card };