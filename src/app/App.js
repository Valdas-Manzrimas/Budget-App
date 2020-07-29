import React from 'react';
import './App.scss';

import { Router, Switch, Route } from 'react-router-dom';

import Header from './components/header/Header';
import Navbar from './components/navbar/Navbar.js';

import Home from './pages/home/Home';
import AllTransactions from './pages/allTransactions/AllTransactions';

import { GlobalProvider } from './context/GlobalState';
import history from './history';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <GlobalProvider>
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
        </GlobalProvider>
      </div>
    );
  }
}

export default App;
