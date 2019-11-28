import React from "react";

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";


import TextBlock from "./TextBlock";
import Welcome from './Welcome';
import GameEngine from './GameEngine';
import Score from './Score';



function App() {

  return (
    <div>
      <TextBlock strings={["asdf"]} />
      <Router >
        <Switch>
          <Route exact path="/">
            <Welcome />
          </Route>
          <Route path="/game">
            <GameEngine />
          </Route>
          <Route path="/score">
            <Score />
          </Route>
        </Switch>
      </Router>

    </div>
  );
};

export default App;
