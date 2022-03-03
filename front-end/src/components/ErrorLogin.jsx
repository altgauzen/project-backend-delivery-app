import React from 'react';

function errorLogin({ datatestid, message }) {
  return (<div data-testid={ datatestid }>{ message }</div>);
}

export default errorLogin;
