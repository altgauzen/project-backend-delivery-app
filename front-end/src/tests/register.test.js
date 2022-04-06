import React from 'react';
import userEvent from '@testing-library/user-event';

import { screen } from '@testing-library/react';
import Register from '../pages/Register';
import renderWithRouter from '../utils/renderWithRouter';

describe('Check the Register component', () => {

  it('Verify if the word "Nome" appears on the screen', () => {
    renderWithRouter(<Register />);
    const name = screen.getByText(/Nome/i);
    expect(name).toBeInTheDocument();
  });

  it('Verify if the word "Email" appears on the screen', () => {
    renderWithRouter(<Register />);
    const email = screen.getByText(/Email/i);
    expect(email).toBeInTheDocument();
  });

  it('Verify if the word "Senha" appears on the screen', () => {
    renderWithRouter(<Register />);
    const pass = screen.getByText(/Senha/i);
    expect(pass).toBeInTheDocument();
  });

  it('Verify if the word "CADASTRAR" appears on the screen', () => {
    renderWithRouter(<Register />);
    const register = screen.getByText(/CADASTRAR/i);
    expect(register).toBeInTheDocument();
  });
});