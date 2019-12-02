import React from 'react';
import GameContext from "./GameContext";
import TextBlock from "./TextBlock";

function GameText(props)
{
  return (
    <GameContext.Consumer>
        {({ points, round }) => (
          <div>
            <TextBlock strings={["game"]} />
            <p>points = {points}</p>
            <p>round = {round}</p>
          </div>
        )}
      </GameContext.Consumer>
    );
}

export default GameText;