import React from 'react';


import Canvas from "./Canvas";
import GameText from "./GameText";
import Timer from "./Timer";
import StartGameButton from "./StartGameButton";
import './Game.css';
import config from './config';

const ref = React.createRef();
function Game(props) {

  return (
    <div className="container">
      <div className="wrapper">
        <div className="left">
          <Canvas ref={ref}
            model={props.model}
            labels={props.labels}
            win={props.win} />
        </div>
        <div className="right">
          <GameText question={props.question}/>
          <Timer max={config.timer} ref={props.timer} timeUp={props.timeUp} />
          <StartGameButton startGame={props.startGame}/>
        </div>
      </div>
    </div>
  );
}

export default Game;