import React, { useState, useEffect, useReducer } from 'react';
import * as tf from "@tensorflow/tfjs";

import Game from "./Game";
import Score from "./Score";
import GameContext from "./GameContext";
import genericReducer from "./hooks";

const model = tf.loadModel("./model/model.json");
const labels = require("./labels.json");

function GameEngine() {

  const [points, dispatchPoints] = useReducer(genericReducer, { count: 0 });
  const [round, dispatchRounds] = useReducer(genericReducer, { count: 0 });
  const [state, setState] = useState({ round: 0, points: 0 });
  const timerRef = React.createRef();

  useEffect(() => {
    console.log("GAME ENGINE EFFECT");
    console.log("points = ");
    console.log(points);
    console.log("round = ");
    console.log(round);
    setState({ round: round.count, points: points.count })
    console.log("state");
    console.log(state);

    // only call useEffect after [points] have changed
  }, [points, round]);

  function StartGame() {
    dispatchRounds({ type: 'increment' });
    timerRef.current.start();
  }

  function TimeUp() {
    dispatchRounds({ type: 'increment' });
    dispatchPoints({ type: 'add', value: -3 });
    console.log("timesup");

  }
  function NextRound() {
    dispatchPoints({ type: 'add', value: timerRef.current.getRemaining() });
    timerRef.current.reset();
    StartGame();
  }

  if (round.count <= 10) {
    return (
      <div>

        <GameContext.Provider value={state} >
          <Game model={model} labels={labels} timer={timerRef} timeUp={TimeUp} />
        </GameContext.Provider>


        <br />
        <br />
        <br />
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

        <h2>Control game</h2>
        <button onClick={() => StartGame()}>
          Start Timer
          </button>
        <button onClick={() => TimeUp()}>
          Time Up (3 sec penalty)
          </button>
        <button onClick={() => NextRound()}>
          NextRound (adds time left)
          </button>
        <button onClick={() => timerRef.current.reset()}>
          Reset Timer
          </button>
      </div>
    );

  }
  else {
    return (
      <div>
        <GameContext.Provider value={state} >
          <Score points={points.count} />
        </GameContext.Provider>
      </div>

    );
  }
}


export default GameEngine;