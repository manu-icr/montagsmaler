import React from 'react';

import GameContext from "./GameContext";
import TextBlock from "./TextBlock";
import NavButton from "./NavButton";
import config from "./config";
import text from "./text.json";

function Score(props) {
  return (
    <div>
      <GameContext.Consumer>
        {({ points, round }) => (
          (points === config.round * -3 && <TextBlock strings={[text.scoreWorst.replace('[points]',points)]} />) ||
          (points > config.round * -3 && points < 0 && <TextBlock strings={[text.scoreBad.replace('[points]',points)]} />) ||
          (points > 0 && points < round * config.timer && <TextBlock strings={[text.scoreGood.replace('[points]',points)]} />) ||
          (points === round * config.timer && <TextBlock strings={[text.scoreBest]} />)
        )}
      </GameContext.Consumer>
      <NavButton title='Home' goto='' />
    </div>
  );
}


export default Score;