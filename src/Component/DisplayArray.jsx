import React from 'react';

function DisplayArray() {
  const items = ['Apple', 'Banana', 'Orange', 'Grapes'];
  return (
    <ul>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  );
}

export default DisplayArray;
