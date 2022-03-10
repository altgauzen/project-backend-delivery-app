import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';

import Products from './pages/Products';
import Login from './pages/Login/index';
import Register from './pages/Register/index';
import Orders from './pages/Orders/index';
import OrderDetails from './pages/OrderDetails';
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
          <Route exact path="/login" component={ Login } />
          <Route exact path="/register" component={ Register } />
          <Route exact path="/customer/products" component={ Products } />
          <Route exact path="/customer/orders" component={ Orders } />
          <Route exact path="/customer/orders/:id" component={ OrderDetails } />
          <Route exact path="/customer/checkout" component={ Checkout } />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
