import React, { useContext, useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import contextValue from '../context/context';
import Utils from '../utils/functions/index';

function Product({ product }) {
  const { cart, setCart } = useContext(contextValue);
  const [quantity, setQuantity] = useState(0);
  const { urlImage, id, name, price } = product;

  const setCartManual = () => {
    const item = cart.filter((car) => id === car.productId);
    const unitPrice = parseFloat(price);
    if (!item.length && quantity !== 0) {
      const subTotal = price * quantity;
      setCart([...cart, {
        productId: id,
        name,
        quantity,
        unitPrice: unitPrice.toFixed(2).replace(/\./, ','),
        subTotal: subTotal.toFixed(2).replace(/\./, ','),
      }]);
      Utils.setLocalStorage('carrinho', [...cart, {
        productId: id,
        name,
        quantity,
        unitPrice: unitPrice.toFixed(2).replace(/\./, ','),
        subTotal: subTotal.toFixed(2).replace(/\./, ','),
      }]);
    } else {
      const newCarrt = cart.map((car) => {
        if (car.productId === item[0].productId) {
          const subTotal = price * quantity;
          car.quantity = quantity;
          car.subTotal = subTotal.toFixed(2).replace(/\./, ',');
        }
        return car;
      });
      setCart(newCarrt);
      Utils.setLocalStorage('carrinho', cart);
    }
  };

  useEffect(() => {
    setCartManual();
  }, [setQuantity, quantity, setCartManual]);

  const controlQuantity = async ({ target: { innerText, value } }) => {
    if (innerText === '+') {
      setQuantity(quantity + 1);
    } else if (innerText === '-' && quantity !== 0) {
      setQuantity(quantity - 1);
    } else if (value !== '0') {
      setQuantity(Number(value));
    }
  };

  return (
    <div>
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
          onClick={ (e) => controlQuantity(e) }
        >
          -
        </button>
        <input
          type="text"
          data-testid={ `customer_products__input-card-quantity-${id}` }
          onChange={ (e) => controlQuantity(e) }
          value={ quantity }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          onClick={ (e) => controlQuantity(e) }
        >
          +
        </button>
      </div>
    </div>
  );
}

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    urlImage: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,
};

export default Product;
