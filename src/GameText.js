import React from 'react';
import TextBlock from "./TextBlock";
import GameContext from "./GameContext";
import text from "./text.json";

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
          <p>points = {points}</p>
          <p>round = {round}</p>
          <TextBlock strings={[text.draw.replace('[formatedQuestion]', ((startsWithVowel(props.question)) ? 'an ' : 'a ') + props.question.toUpperCase())]} />
        </div>
      )}
    </GameContext.Consumer>
  );
}

export default GameText;