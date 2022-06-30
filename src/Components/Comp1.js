import React from "react";
// import { useState } from "react";

function Comp1(props) {
    return (
      <div style={{display: "flex"}}>
        <div>
        {JSON.stringify(props.data)}
        </div>
      </div>
    );
}

export { Comp1 };