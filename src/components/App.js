import React, { useState } from "react";
import "../styles/App.css";

const App = () => {
  const [width, setWidth] = useState(320);
  const [height, setHeight] = useState(320);
  const changeWidth = (event) => {
    setWidth(event.target.value);
  };
  const changeHeight = (event) => {
    setHeight(event.target.value);
  };
  return (
    <div id="main">
      <img src="src/image.jpeg" id="resizable-img" style={{ width: `${width}px`, height: `${height}px` }}/>
      <input
        type="range"
        min={100}
        max={800}
        id="width-slider"
        step={1}
        value={width}
        onChange={changeWidth}
      />
      <input
        type="range"
        min={100}
        max={800}
        id="height-slider"
        step={1}
        value={height}
        onChange={changeHeight}
      />
    </div>
  );
};

export default App;
