import React, { Component } from 'react';
//import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import {Home, BulletinBoard, Donate, Volunteer, Contact, ErrorPage} from './screens/index';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/bulletinBoard" component={BulletinBoard} />
            <Route exact path="/donate" component={Donate} />
            <Route exact path="/volunteer" component={Volunteer} />
            <Route exact path="/contact" component={Contact} />
            <Route component={ErrorPage} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
