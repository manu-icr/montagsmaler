import React from 'react';


import Canvas from "./Canvas";
import CanvasControls from "./CanvasControls";
import GameText from "./GameText";
import Timer from "./Timer";
import './Game.css';


const ref = React.createRef();
function Game(props) {
  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <Canvas ref={ref}
            height={500}
            width={500}
            model={props.model}
            labels={props.labels}
            win={props.win} />
        </div>
        <div className="right">
          <GameText question={props.question}/>
          <Timer max={20} ref={props.timer} timeUp={props.timeUp} />
        </div>
      </div>
      <div className="bottom">
        <CanvasControls theCanvas={ref} model={props.model} labels={props.labels} />
      </div>
    </div>
  );
}

export default Game;