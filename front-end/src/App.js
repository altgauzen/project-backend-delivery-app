import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import Products from './pages/Products';
import Login from './pages/Login/index';
import Register from './pages/Register/index';
import Orders from './pages/Orders/index';
import Provider from './context/provider';
import Checkout from './pages/CustomerCheckout/index';
import Management from './pages/management';

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
          <Route path="/customer/orders" component={ Orders } />
          <Route path="/customer/checkout" component={ Checkout } />
          <Route path="/management" component={ Management } />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
