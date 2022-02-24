import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Login from './pages/Login/index';

function App() {
  return (
    <div className="App">
      <Switch>
        <Route path="/login" component={ Login } />
      </Switch>
    </div>
  );
}

export default App;
