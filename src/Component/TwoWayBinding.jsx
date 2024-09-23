import React, { useState } from 'react';

function TwoWayBinding() {
  const [text, setText] = useState('');

  return (
    <div>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
      />
      <p>Typed Text: {text}</p>
    </div>
  );
}

export default TwoWayBinding;
