import PropTypes from 'prop-types';
import React, { useState } from 'react';
import context from './context';

function Provider({ children }) {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState('');
  const [cart, setCart] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [loading, setLoading] = useState(false);

  const contextValue = {
    products,
    setProducts,
    user,
    setUser,
    cart,
    setCart,
    totalPrice,
    setTotalPrice,
    loading,
    setLoading,
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
