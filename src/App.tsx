import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Trello from "components/Trello";
import Board from "components/Board";

const App = () => {
  return (
    <>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
        <Switch>
          <Route exact path="/" component={Trello} />
          <Route exact path="/board/:boardId" component={Board} />
        </Switch>
      </BrowserRouter>
    </>
  );
};

export default App;
