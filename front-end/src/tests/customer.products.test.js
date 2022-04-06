import React from 'react';
import userEvent from '@testing-library/user-event';

import { screen } from '@testing-library/react';
import App from '../App';
import CustomerProducts from '../pages/Products';
import renderWithRouter from '../utils/renderWithRouter';

describe('Check the Customer Products component', () => {
  it('Verify if the word "PRODUTOS" appears on the screen', () => {
    const { history } = renderWithRouter(<CustomerProducts />);
    history.push('/customer/products');
    expect(history.location.pathname).toBe('/customer/products');
    const products = screen.getByText(/PRODUTOS/i);
    expect(products).toBeInTheDocument();
  });

  it('Verify if the word "Meus Pedidos" appears on the screen', () => {
    const { history } = renderWithRouter(<CustomerProducts />);
    history.push('/customer/products');
    const request = screen.getByText(/Meus Pedidos/i);
    expect(request).toBeInTheDocument();
  });

  it('Verify if the word "SAIR" appears on the screen', () => {
    const { history } = renderWithRouter(<CustomerProducts />);
    history.push('/customer/products');
    const logout = screen.getByText(/SAIR/i);
    expect(logout).toBeInTheDocument();
  });

  it('Verify if the user name appears on the screen', () => {
    const { history } = renderWithRouter(<CustomerProducts />);
    history.push('/customer/products');
    const userName = screen.getByTestId('customer_products__element-navbar-user-full-name');
    expect(userName).toBeInTheDocument();
  });
});