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
            <div className="top">
              <TextBlock strings={[text.gameIntroduction]} />
            </div>
            <div className="bottom">
              <button className='startGameButton' onClick={this.relay}>Start Game</button>
            </div>
          </div>
        }
      </div>
    );
  }
}


export default StartGameButton;