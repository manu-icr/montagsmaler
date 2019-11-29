import React from 'react';
import * as tf from "@tensorflow/tfjs";

import TextBlock from "./TextBlock";
import Game from "./Game";
import GameContext from "./GameContext";



const model = tf.loadModel("./model/model.json");
const labels = require("./labels.json");

function GameEngine() {
  return (
    <div>
      <GameContext.Provider value={{round : 0, points : 0}} >
        <TextBlock strings={["game engine"]} />
        <Game model={model} labels={labels} />
      </GameContext.Provider>
    </div>
  );
}


export default GameEngine;