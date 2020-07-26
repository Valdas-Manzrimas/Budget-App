import React, { useContext } from 'react';
import './App.scss';

import { Router, Switch, Route } from 'react-router-dom';

import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home/Home';
import history from './history';

class App extends React.Component {
  render() {
    return (
      <div className="App">
        <Router history={history}>
          <Navbar />
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
