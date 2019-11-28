import React from 'react';

import TextBlock from "./TextBlock";
import Canvas from "./Canvas";
import CanvasControls from "./CanvasControls";

const ref = React.createRef();
function Game(props) {
  return (
    <div>
      <TextBlock strings={["game"]} />
      <Canvas ref={ref}
        height={300}
        width={300} />
      <CanvasControls theCanvas={ref} model={props.model} labels={props.labels} />
    </div>
  );
}


export default Game;