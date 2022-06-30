import React from "react";
// import { useState } from "react";

function Comp1(props) {
    return (
      <div>
        <h1>Send them a smile with your favorite movie!</h1>
        <h2>Choose from thousands of movies...</h2>
        {JSON.stringify(props.data)}
      </div>
    );
}

export { Comp1 };