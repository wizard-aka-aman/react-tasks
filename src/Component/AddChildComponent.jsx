import React, { useState } from 'react'

const AddChildComponent = () => {
    const [children , setChildren] = useState([]);

    const addChild = ()=>{
        setChildren([...children , `Child Component ${children.length +1 }`])
    }
    return (
        <div>
          <button onClick={addChild}>Add Child</button>
          {children.map((child, index) => (
            <p key={index}>{child}</p>
          ))}
        </div>
      );
  
}

export default AddChildComponent
   
  
