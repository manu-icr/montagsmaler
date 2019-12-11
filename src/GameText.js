import React from 'react';
import GameContext from "./GameContext";
import TextBlock from "./TextBlock";

function GameText(props)
{
  return (
    <GameContext.Consumer>
        {({ points, round }) => round > 0 && (
          <div className="gameText">
            <TextBlock strings={["game"]} />
            <p>points = {points}</p>
            <p>round = {round}</p>
            <p>question = {props.question}</p>
          </div>
        )}
      </GameContext.Consumer>
    );
}

export default GameText;