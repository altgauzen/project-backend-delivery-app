import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import Products from './pages/Products';
import Login from './pages/Login/index';
import Register from './pages/Register/index';
import Provider from './context/provider';
import Checkout from './pages/CustomerCheckout/index';

function App() {
  return (
    <div className="App">
      <Provider>
        <Switch>
          <Route exact path="/">
            <Redirect to="/login" />
          </Route>
          <Route path="/login" component={ Login } />
          <Route path="/register" component={ Register } />
          <Route path="/customer/products" component={ Products } />
          <Route path="/customer/checkout" component={ Checkout } />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
