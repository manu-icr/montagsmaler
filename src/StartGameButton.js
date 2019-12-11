import React from 'react';
import TextBlock from './TextBlock';
import text from './text.json';

class StartGameButton extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      startGame: props.startGame,
      show: true
    };
    this.relay = this.relay.bind(this);
  }

  relay() {
    this.setState({
      show: false
    });
    this.state.startGame();
  }

  render() {
    return (
      <div>
        {this.state.show &&
          <div>
            <TextBlock strings={[text.gameIntroduction]} />
            <button className='startGameButton' onClick={this.relay}>Start Game</button>
          </div>}
      </div>
    );
  }
}


export default StartGameButton;