// the main routes of our app are defined here using react-router
// https://reacttraining.com/react-router/web/example/basic

import React from "react"
import { Switch, Route } from "react-router-dom"

import Account from "./account/Account"
import Error from "./shared/Error"

const Routes = () => (
  <Switch>
    <Route path="/account" component={Account} />
    <Route component={Error} />
  </Switch>
)

export default Routes
