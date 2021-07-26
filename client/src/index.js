import React from 'react';
import ReactDOM from 'react-dom';
import './App.css';
import Home from './Home';
import Resources from './Resources';
import Forums from './Forums';
import Help from './Help';
import Register from './Register';
import Login from './Login';
import Preferences from './Preferences';
import reportWebVitals from './reportWebVitals';
import Nav from './templates/Nav';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';

ReactDOM.render(
  <React.StrictMode>

    <Router>
      <Nav />

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/resources">
            <Resources />
          </Route>
          <Route exact path="/forums">
            <Forums />
          </Route>
          <Route exact path="/Help">
            <Help />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/preferences">
            <Preferences />
          </Route>
        </Switch>


    </Router>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
