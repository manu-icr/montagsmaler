import React, { useState, useEffect, useReducer } from 'react';
import * as tf from "@tensorflow/tfjs";

import Game from "./Game";
import Score from "./Score";
import GameContext from "./GameContext";
import genericReducer, { useQuestion } from "./hooks";
import config from './config';

const model = tf.loadModel("./model/model.json");
const labels = require("./labels.json");
const timerRef = React.createRef();

function GameEngine() {

  const [points, dispatchPoints] = useReducer(genericReducer, { count: 0 });
  const [round, dispatchRounds] = useReducer(genericReducer, { count: 0 });
  const [state, setState] = useState({ round: 0, points: 0 });
  const [getQuestion, setNextRound] = useQuestion(labels);

  useEffect(() => {
    setState({ round: round.count, points: points.count })
  }, [points, round]);

  function StartGame() {
    dispatchRounds({ type: 'increment' });
    if (round.count >= config.round) {
    } else {

      timerRef.current.start();
    }
  }

  function TimeUp() {
    dispatchPoints({ type: 'add', value: -3 });
    setNextRound();
    StartGame();
  }
  function Win(newPrediction) {
    if (round.count > 0 && newPrediction === getQuestion) {
      dispatchPoints({ type: 'add', value: timerRef.current.getRemaining() });
      setNextRound();
      StartGame();
    }
  }

  if (round.count <= config.round) {
    return (
      <div>
        <GameContext.Provider value={state} >
          <Game model={model} labels={labels} timer={timerRef} timeUp={TimeUp} win={Win} question={getQuestion} startGame={StartGame} />
        </GameContext.Provider>
      </div>
    );

  }
  else {
    return (
      <div>
        <GameContext.Provider value={state} >
          <Score />
        </GameContext.Provider>
      </div>

    );
  }
}


export default GameEngine;