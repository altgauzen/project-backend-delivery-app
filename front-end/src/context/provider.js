import PropTypes from 'prop-types';
import React, { useState } from 'react';
import context from './context';

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState('');
  const [counter, setCounter] = useState(0);

  const contextValue = {
    products,
    setProducts,
    user,
    setUser,
    counter,
    setCounter,
  };

  return (
    <context.Provider value={ contextValue }>
      {children}
    </context.Provider>
  );
}

Provider.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Provider;
