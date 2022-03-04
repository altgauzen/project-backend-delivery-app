import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import contextValue from '../context/context';

function Counter({ id }) {
  const { counter, setCounter } = useContext(contextValue);
  const incrementClick = () => {
    setCounter(counter + 1);
  };
  const decrementClick = () => {
    if (counter === 0) {
      setCounter(counter)
    } else {
      setCounter(counter - 1);
    }
  };
  return (
    <div>
      <button
        type="button"
        data-testid={ `customer_products__button-card-add-item-${id}` }
        onClick={ decrementClick }
      >
        -
      </button>
      <input
        type="number"
        data-testid={ `customer_products__input-card-quantity-${id}` }
        value={ counter }
      />
      <button
        type="button"
        data-testid={ `customer_products__button-card-rm-item-${id}` }
        onClick={ incrementClick }
      >
        +
      </button>
    </div>
  );
}

Counter.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Counter;
