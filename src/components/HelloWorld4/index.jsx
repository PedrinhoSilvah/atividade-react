import React from "react";

function HelloWorld4() {
  const date = new Date().toLocaleDateString()
  const horus = new Date().toLocaleTimeString()
  return <h1>Hello, World! {date} {horus} </h1>;
}

export default HelloWorld4;
