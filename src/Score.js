import React from 'react';

import GameContext from "./GameContext";
import TextBlock from "./TextBlock";
import NavButton from "./NavButton";


function Score(props) {
  return (
    <div>
      <GameContext.Consumer>
        {({ points, round }) => (
          <TextBlock strings={["score points = " + points]} />
        )}
      </GameContext.Consumer>
      <NavButton title='New Game' goto='' />
    </div>
  );
}


export default Score;