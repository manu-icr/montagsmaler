import React from 'react';
import TextBlock from './TextBlock.js';


import text from './config/text.json';
import { useHighScore } from './customHooks.js';


function Score(props) {
  
  const [values] = useHighScore();

  function ScoreDetail() {
    if (values.isNewHighScore) {
      return (
        <div>
          <TextBlock strings={[text.highScore2 + values.highScore]} />
          <TextBlock strings={[text.highScore3]} />
        </div>
      );
    }
    else {
      
      return (<div><TextBlock strings={[text.scorePoints.replace("[points]", values.points)]} /></div>);
    }
  }
  return (
    <div>
      <TextBlock strings={[text.score]} />
      <ScoreDetail />
    </div>
  );
}
export default Score;