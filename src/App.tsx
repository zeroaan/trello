import React from "react";
import Trello from "components/Trello";
import Board from "components/Board";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import "app.css";

const App = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/">
            <Trello />
          </Route>
          <Route exact path="/board">
            <Board />
          </Route>
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
