import React from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Address from './pages/Address';
import Menu from './pages/Menu';
import Basket from './pages/Basket';
function App() {
  return (
    <div className='App select-none '>
      <Router>
        <Switch>
          <Route path='/menu'>
            <Menu></Menu>
          </Route>
          <Route path='/basket'>
            <Basket></Basket>
          </Route>
          <Route path='/'>
            <Address></Address>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
