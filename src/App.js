import React, { useState, useEffect } from 'react';
import './App.css';
import Gradient from './components/Gradient';
import Output from './components/Output';
import Color from './components/Color';

function App() {

  // set initial 3 colors 
  const [color, setColor] = useState({
    percentOne: "0",
    colorCodeOne: "#a872ee",
    percentTwo: "50",
    colorCodeTwo: "#cf8bf3", 
    percentThree: "100",
    colorCodeThree: "#fdb99b"
  });
  const {percentOne,colorCodeOne,percentTwo,colorCodeTwo,percentThree,colorCodeThree} = color; 

  // set initial gradient 
  const [gradient, setGradient] = useState({
      background: `linear-gradient(
          90deg, 
          ${colorCodeOne} ${percentOne}%, 
          ${colorCodeTwo} ${percentTwo}%, 
          ${colorCodeThree} ${percentThree}%
      )`
  });
  const {background} = gradient;
  
  // whenever a color updates, update the gradient text 
  useEffect(()=>{
    console.log("side-effect");
    console.log(color);
    setGradient({
      background: `linear-gradient(
        90deg, 
        ${colorCodeOne} ${percentOne}%, 
        ${colorCodeTwo} ${percentTwo}%, 
        ${colorCodeThree} ${percentThree}%
      )`
    });
  },[color]);

  // handles color state updates based on user input values
  const updateColor = (key,index,value) => {
    if( key === "colorCode"){
      if(index === 0){
        setColor({
          ...color,
          colorCodeOne: value
        });
      }else if (index === 1){
        setColor({
          ...color,
          colorCodeTwo: value
        });
      }else{
        setColor({
          ...color,
          colorCodeThree: value
        });
      }
    }else{
      if(index === 0){
        setColor({
          ...color,
          percentOne: value
        });
      }else if (index === 1){
            setColor({
                ...color,
                percentTwo: value
            });
        }else{
            setColor({
              ...color,
              percentThree: value
            });
        }
    }
  }

  // receive a new color from the color pickers 
  const handleColorChooser = (e) => { 
    const target = e.target.parentElement;
    const targetIndex = Array.from(target.parentElement.children).indexOf(target);
    const hexValue = e.target.value; 
    updateColor("colorCode",targetIndex,hexValue);
  }

  // recieve a new percentage from the percent input fields
  const handlePercentChange = (e) => {
    const percent = e.target.value; 
    if(percent > 100 || percent < 0){
        alert("Please enter a percentage value from 0 - 100");
    }else{
        const target = e.target.parentElement;
        const targetIndex = Array.from(target.parentElement.children).indexOf(target);
        updateColor("percent",targetIndex,percent);
    }
  }

  return (
    <div className="container">
      <Gradient 
        gradient={gradient}
      /> 
      <div className="controls">
        <h1>Gradient Generator</h1>
        <div className="colors-control">
          <Color 
            percent={percentOne} 
            colorCode={colorCodeOne} 
            handleColorChooser={handleColorChooser} 
            handlePercentChange={handlePercentChange}
          /> 
          <Color 
            percent={percentTwo}
            colorCode={colorCodeTwo} 
            handleColorChooser={handleColorChooser}
            handlePercentChange={handlePercentChange}  
          /> 
          <Color 
            percent={percentThree}
            colorCode={colorCodeThree} 
            handleColorChooser={handleColorChooser}
            handlePercentChange={handlePercentChange} 
          /> 
          <Output text={background} />
        </div>
      </div>
    </div>
  );
}

export default App;
