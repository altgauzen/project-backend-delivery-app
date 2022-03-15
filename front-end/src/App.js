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
import Management from './pages/management';
import Seller from './pages/Seller';
import SellerDetails from './pages/SellerDetails';

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
          <Route exact path="/admin/manage" component={ Management } />
          <Route exact path="/seller/orders" component={ Seller } />
          <Route exact path="/seller/orders/:id" component={ SellerDetails } />
        </Switch>
      </Provider>
    </div>
  );
}

export default App;
