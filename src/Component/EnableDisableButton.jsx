import React, { useState } from 'react';

function EnableDisableButton() {
  const [disabled, setDisabled] = useState(false);

  return (
    <div>
      <button disabled={disabled}>Click Me!</button>
      <button onClick={() => setDisabled(!disabled)}>
        {disabled ? 'Enable' : 'Disable'} Button
      </button>
    </div>
  );
}

export default EnableDisableButton;
