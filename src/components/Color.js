import React from 'react';

const Color = ({percent,colorCode,handleColorChooser,handlePercentChange}) => {

    // defines which keys can be used in the input number picker 
    const keysAvailable = ["0","1","2","3","4","5","6","7","8","9",
    "Backspace","ArrowRight","ArrowLeft"];

    // allow only keys defined when user is typing in number input field 
    const handleTyping = (e) => {
        if(!keysAvailable.includes(e.key)){e.preventDefault();}
    } 

  return (
    <div className="color">
        <input 
            className="percent"
            type="text"
            defaultValue={percent} 
            maxLength="3" 
            onKeyUp={handlePercentChange}
            onKeyDown={handleTyping} 
        />
        <input className="color-choose" type="color" value={colorCode} onChange={handleColorChooser}/>
        <input className="hex-display" type="text" value={colorCode} />
    </div>
  );
}

export default Color;