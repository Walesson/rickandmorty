import React from 'react'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import { Home } from '~/pages'

export const Routes = () => (
  <Router>
    <Switch>
      <Route path='/' component={Home} />
    </Switch>
  </Router>
)
