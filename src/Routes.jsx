import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import Home from "./_pages/Home";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
