import React from 'react';

function Register() {
  return (
    <div>
      <h1>Cadastro</h1>
      <form action="" method="post">
        <label htmlFor="name">
          <input type="text" id="name" />
        </label>
        <label htmlFor="email">
          <input type="email" id="email" />
        </label>
        <label htmlFor="password">
          <input type="password" id="password" />
        </label>
      </form>
    </div>
  );
}

export default Register;
