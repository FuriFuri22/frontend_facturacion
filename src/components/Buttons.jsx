import React from 'react';
import './CssComponents/Buttons.css';


const Buttons = ({text, callBack, condition}) => {
    return (
      <button className="button-highlight" onClick={callBack} disabled={condition}>
        {text}
      </button>
    );
  };
  
  export default Buttons