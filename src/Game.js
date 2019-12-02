import React, { useContext } from 'react';


import Canvas from "./Canvas";
import CanvasControls from "./CanvasControls";
import GameText from "./GameText";


const ref = React.createRef();
function Game(props) {
  return (
    <div>
      
      <GameText />
      <Canvas ref={ref}
        height={300}
        width={300} />
      <CanvasControls theCanvas={ref} model={props.model} labels={props.labels} />
    </div>
  );
}

export default Game;