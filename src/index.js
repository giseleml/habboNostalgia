import React from 'react';
import ReactDOM from 'react-dom';

import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import './index.css';
import Homepage from './containers/Homepage/homepage'
import Userpage from './containers/Userpage/userpage'

const App = () => (
  <Switch>
    <Route path="/client">
      <Userpage />
    </Route>
    <Route exact path="/">
      <Homepage />
    </Route>
  </Switch>
)

ReactDOM.render(
  <Router>
    <App />
  </Router>,
  document.getElementById('root')
);
