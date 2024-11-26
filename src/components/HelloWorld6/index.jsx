import React from 'react';

const HelloWorld6 = () => {
  const date = new Date().toLocaleDateString()
  const horus = new Date().toLocaleTimeString()
  const greeting = <h1>Hello, World! {date} {horus} </h1>;
  return greeting;
};

export default HelloWorld6;
