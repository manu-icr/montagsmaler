import React from 'react';

import GameContext from "./GameContext";
import TextBlock from "./TextBlock";


function Score(props) {
  return (
    <GameContext.Consumer>
      {({ points, round }) => (
        <TextBlock strings={["score points = " + points]} />
      )}
    </GameContext.Consumer>
  );
}


export default Score;