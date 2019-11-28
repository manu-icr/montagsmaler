import React from 'react';
import * as tf from "@tensorflow/tfjs";

import TextBlock from "./TextBlock";
import Game from "./Game";



const model = tf.loadModel("./model/model.json");
const labels = require("./labels.json");

function GameEngine()
{
  return (
    <div>
      <TextBlock strings={["game engine"]} />
      <Game model={model} labels={labels}/>
    </div>
  );
}


export default GameEngine;