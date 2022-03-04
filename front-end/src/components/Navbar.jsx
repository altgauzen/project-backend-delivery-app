import React from 'react';

function Navbar({ user }) {
  const logout = () => {
    localStorage.clear()
  }
  return (
    <navbar style={ { display: 'flex', width: '100%' } }>
      <p data-testid='customer_products__element-navbar-link-products'>
        PRODUTOS
      </p>
      <p data-testid='customer_products__element-navbar-link-orders'>MEUS PEDIDOS</p>
      <p data-testid='customer_products__element-navbar-user-full-name'>{user.name}</p>
      <p data-testid='customer_products__element-navbar-link-logout'onClick={logout}>SAIR</p>
    </navbar>
  );
}

export default Navbar;
