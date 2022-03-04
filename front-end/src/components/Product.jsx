import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import contextValue from '../context/context';
import Utils from '../utils/functions/index.js';

function Product({ product }) {
  const { cart, setCart } = useContext(contextValue);
  const [quantity, setQuantity] = useState(0);
  const { urlImage, id, name, price } = product;

  const incrementClick = () => {
    const item = cart.filter((car) => id === car.productId);

    if (!item.length) {
      setQuantity(1);
      setCart([...cart, {
        productId: id,
        name,
        quantity: 1,
        unitPrice: price,
        subTotal: price
      }]);
      Utils.setLocalStorage("carrinho", [...cart, {
        productId: id,
        name,
        quantity: 1,
        unitPrice: price,
        subTotal: price
      }]);
    } else {
      const newCarrt = cart.map(car => {
        if (car.productId === item[0].productId) {
          car.quantity++;
          car.subTotal = car.quantity * car.unitPrice;
          setQuantity(car.quantity);
        }
        return car;
      })
      setCart(newCarrt);
    }
    Utils.setLocalStorage('carrinho', cart);
  };

   const decrementClick = () => {
    const item = cart.filter((car) => id === car.productId);
      const newCarrt = cart.map(car => {
        if (car.productId === item[0].productId && car.quantity !== 0) {
          car.quantity--;
          car.subTotal = car.quantity * car.unitPrice;
          setQuantity(car.quantity);
        }
        return car;
      })
      setCart(newCarrt);
      Utils.setLocalStorage('carrinho', cart);
  };

  const setQuantityManual = ({ target }) => {
    const item = cart.filter((car) => id === car.productId);
    setQuantity(Number(target.value));
    const newCarrt = cart.map(car => {
      if (car.productId === item[0].productId) {
        car.quantity= quantity;
        car.subTotal = quantity * car.unitPrice;
        setQuantity(car.quantity);
      }
      return car;
    })
    setCart(newCarrt);
  }


  return (
    <div key={ `${name}${id}` }>
      <h1
        data-testid={ `customer_products__element-card-price-${id}` }
      >
        { String(price).replace('.', ',') }
      </h1>
      <img
        data-testid={ `customer_products__img-card-bg-image-${id}` }
        src={ urlImage }
        alt={ name }
      />
      <h2
        data-testid={ `customer_products__element-card-title-${id}` }
      >
        { name }
      </h2>
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
          data-testid={`customer_products__input-card-quantity-${id}`}
          onChange={setQuantityManual}
          value={ quantity }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          onClick={ incrementClick }
        >
          +
        </button>
      </div>
    </div>
  );
}

Product.propTypes = {
  id: PropTypes.number.isRequired,
};

export default Product;
