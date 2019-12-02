import React, { useState, useEffect, useReducer } from 'react';
import * as tf from "@tensorflow/tfjs";

import Game from "./Game";
import GameContext from "./GameContext";
import genericReducer from "./hooks";


const model = tf.loadModel("./model/model.json");
const labels = require("./labels.json");

function GameEngine() {

  const [points, dispatchPoints] = useReducer(genericReducer, { count: 0 });
  const [round, dispatchRounds] = useReducer(genericReducer, { count: 0 });
  const [state, setState] = useState({ round: 0, points: 0 });
  useEffect(() => {
    console.log("GAME ENGINE EFFECT");
    console.log("points = ");
    console.log(points);
    console.log("round = ");
    console.log(round);
    setState({ round: round.count, points: points.count })
    console.log("state");
    console.log(state);


    setTimeout(function () { console.log("timeout value =" + state.points); }, 3000);
    // only call useEffect after [points] have changed
  }, [points, round]);

  return (
    <div>
      <GameContext.Provider value={state} >
        <Game model={model} labels={labels} />
      </GameContext.Provider>

      <h2>Points</h2>
      <button onClick={() => dispatchPoints({ type: 'increment' })}>
        Win
        </button>
      <button onClick={() => dispatchPoints({ type: 'decrement' })}>
        Lose
        </button>
      <button onClick={() => dispatchPoints({ type: 'reset' })}>
        Reset
        </button>

      <h2>Rounds</h2>
      <button onClick={() => dispatchRounds({ type: 'increment' })}>
        Win
        </button>
      <button onClick={() => dispatchRounds({ type: 'decrement' })}>
        Lose
        </button>
      <button onClick={() => dispatchRounds({ type: 'reset' })}>
        Reset
        </button>
    </div>
  );
}


export default GameEngine;