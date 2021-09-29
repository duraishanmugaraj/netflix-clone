import React from 'react';
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import HomeScreen from './HomeScreen/HomeScreen';
import Login from "./LoginScreen/Login"
import './App.css';

function App() {
  return (
    <div className="app" id="app">
      <Router>
        <Switch>
          <Route path="/" exact>
            <HomeScreen />
          </Route>
          <Route path="/login" exact>
            <Login />
          </Route>
        </Switch>
      </Router>
    </div>
    // <div className="app" id="app">
    //   <HomeScreen />
    // </div>
  );
}

export default App;
