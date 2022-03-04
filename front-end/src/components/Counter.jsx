import React, { useState } from 'react'

function Counter({ id }) {
  const [counter, setCounter] = useState(0);
  const incrementClick = () => {
    setCounter(counter + 1);
  } 
  const decrementClick = () => {
    setCounter(counter - 1);
  }
  return (
    <div>
      <button data-testid={`customer_products__button-card-add-item-${ id }`} onClick={decrementClick}>-</button>
      <input type="number" data-testid={`customer_products__input-card-quantity-${ id }`} value={ counter }/>
    <button data-testid={`customer_products__button-card-rm-item-${ id }`}  onClick={incrementClick}>+</button>
    </div>
  )
}

export default Counter
