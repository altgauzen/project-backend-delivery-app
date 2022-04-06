import React from 'react';
import userEvent from '@testing-library/user-event';

import { screen } from '@testing-library/react';
import App from '../App';
import renderWithRouter from '../utils/renderWithRouter';

describe('Check the Login component', () => {
  it('Verify if the word "Trybe" appears on the screen', () => {
    renderWithRouter(<App />);
    const trybe = screen.getByText(/Trybe/i);
    expect(trybe).toBeInTheDocument();
  });

  it('Verify if the glass image appears on the screen', () => {
    renderWithRouter(<App />);
    const glassImage = screen.getByText(/Glass/i);
    expect(glassImage).toBeInTheDocument();
  });

  it('Verify if there is a button with text login', () => {
    renderWithRouter(<App />);
    const loginButton = screen.getByRole('button', {
      name: /login/i,
    });
    expect(loginButton).toBeInTheDocument();
  });

  it('Verify if there is a button with text "Cadastre-se"', () => {
    renderWithRouter(<App />);
    const registerButton = screen.getByRole('button', {
      name: /Cadastre-se/i,
    });
    expect(registerButton).toBeInTheDocument();
  });

  it('Verify if click login button, redirect to products page', () => {
    const { history } = renderWithRouter(<App />);
    const loginField = screen.getByRole('textbox', {
      name: /login:/i,
    });
    userEvent.type(loginField, 'altgauzen@gmail.com');
    const passwordField = screen.getByRole('textbox', {
      id: 'setPassword',
    });
    userEvent.type(passwordField, '123456');
    const loginButton = screen.getByRole('button', {
      name: /login/i,
    });
    userEvent.click(loginButton);
    expect(history.location.pathname).toBe('/customer/products');
  });

  it('Verify if click "Cadastre-se" button, redirect to register page', () => {
    const { history } = renderWithRouter(<App />);
    const registerButton = screen.getByText(/Cadastre-se/i);
    userEvent.click(registerButton);
    const registerPage = screen.getByText('Cadastro');
    expect(registerPage).toBeInTheDocument();
    expect(history.location.pathname).toBe('/register');
  });
});