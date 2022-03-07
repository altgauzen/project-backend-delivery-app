import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import './App.css';
import CustomerProducts from './pages/CustomerProducts';
import CustomerCheckout from './pages/CustomerCheckout';
import Login from './pages/Login/index';
import Register from './pages/Register/index';

// import Provider from './context/Provider';

function App() {
  return (
    <div className="App">
      {/* <Provider> */}
      <Switch>
        <Route exact path="/">
          <Redirect to="/login" />
        </Route>
        <Route path="/login" component={ Login } />
        <Route path="/register" component={ Register } />
        <Route path="/customer/products" component={ CustomerProducts } />
        <Route path="/customer/checkout" component={ CustomerCheckout } />
      </Switch>
      {/* </Provider> */}
    </div>
  );
}

export default App;
