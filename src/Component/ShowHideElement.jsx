import React, { useState } from 'react';

function ShowHideElement() {
  const [visible, setVisible] = useState(true);

  return (
    <div>
      {visible && <p>This element is visible</p>}
      <button onClick={() => setVisible(!visible)}>
        {visible ? 'Hide' : 'Show'} Element
      </button>
    </div>
  );
}

export default ShowHideElement;
