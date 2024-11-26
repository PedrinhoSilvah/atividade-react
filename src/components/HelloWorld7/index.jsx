import React from 'react';

const date = new Date().toLocaleDateString()
const horus = new Date().toLocaleTimeString()

const HelloWorld7 = () => (
  
  <h1 style={{ color: 'blue', fontSize: '2em' }}>Hello, World! {date} {horus} </h1>
);

export default HelloWorld7;
