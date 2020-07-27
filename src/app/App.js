import React from 'react';
import './App.scss';

import { Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar.js';

import Home from './pages/Home/Home';
import AllTransactions from './pages/allTransactions/AllTransactions';

import history from './history';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Header />
          <Navbar />
          <Switch>
            <Route exact path="/" exact>
              <Home />
            </Route>
            <Route exact path="/transactions">
              <AllTransactions />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
