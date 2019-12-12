import React from 'react';
import GameContext from "./GameContext";
import text from "./text.json";
import config from './config';

function GameText(props) {

  function startsWithVowel(testStr) {
    var vowelRegex = '^[aieouAIEOU].*'
    var matched = testStr.match(vowelRegex)
    return matched;
  }

  return (
    <GameContext.Consumer>
      {({ points, round }) => round > 0 && (
        <div className="gameText">
          <p>Round {round} of {config.round}</p>
          <p>Points: {points}</p>
          <p>{[text.draw.replace('[formatedQuestion]', ((startsWithVowel(props.question)) ? 'an ' : 'a ') + props.question.toUpperCase())]}</p>
        </div>
      )}
    </GameContext.Consumer>
  );
}

export default GameText;