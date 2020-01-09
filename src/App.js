import React from "react";

import {
  HashRouter  as Router,
  Switch,
  Route
} from "react-router-dom";


import Welcome from './Welcome';
import GameEngine from './GameEngine';
import NavButton from './NavButton';



function App() {

  return (
    <div>
      <Router >
        <Switch>
          <Route exact path="/">
            <Welcome />
            <NavButton className='newGame' title='Start' goto='game' />
          </Route>
          <Route path="/game">
            <GameEngine />
          </Route>
        </Switch>
      </Router>

    </div>
  );
};

export default App;
