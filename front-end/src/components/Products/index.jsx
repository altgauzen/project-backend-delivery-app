import React, { useContext, useEffect, useCallback, useState } from 'react';
import PropTypes from 'prop-types';
import contextValue from '../../context/context';
import Utils from '../../utils/functions/index';
import './products.css';

function Product({ product, setTotalPrice }) {
  const { setCart } = useContext(contextValue);
  const { urlImage, id, name, price } = product;
  const [quantity, setQuantity] = useState(0);

  const setCartManual = useCallback((operation) => {
    const local = Utils.getLocalStorage('carrinho');
    const item = local.find((car) => id === car.productId);
    item.subTotal = Utils.removeMaskNumber(item.subTotal);
    item.unitPrice = Utils.removeMaskNumber(item.unitPrice);

    item.quantity = operation;
    item.subTotal = operation * item.unitPrice;
    item.subTotal = Utils.putMaskNumber(item.subTotal);
    item.unitPrice = Utils.putMaskNumber(item.unitPrice);

    const newLocal = local.map((prod) => (prod.productId === id ? item : prod));
    Utils.setLocalStorage('carrinho', newLocal);
    setCart(newLocal);
    setTotalPrice();
  }, [quantity]);

  useEffect(() => {
    setCartManual(quantity);
  }, [setCartManual]);

  const increment = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const decrement = () => {
    if (quantity !== 0) {
      setQuantity((prevQuantity) => prevQuantity - 1);
    }
  };

  const inputValue = (event) => {
    const { value } = event.target;
    setQuantity(Number(value));
  };

  return (
    <div className="containerCard">
      <div className="containerDescription">
        <h1 data-testid={`customer_products__element-card-price-${id}`}>
          {`R$ ${Utils.putMaskNumber(Number(price))}`}
        </h1>
        <img
          data-testid={`customer_products__img-card-bg-image-${id}`}
          src={urlImage}
          alt={name}
        />
        <h2 data-testid={`customer_products__element-card-title-${id}`}>
          {name}
        </h2>
      </div>
      <div className="containerInput">
        <button
          type="button"
          data-testid={ `customer_products__button-card-rm-item-${id}` }
          onClick={ () => decrement() }
        >
          -
        </button>
        <input
          type="number"
          id={ `inputQuantity-${id}` }
          data-testid={ `customer_products__input-card-quantity-${id}` }
          onChange={ (e) => inputValue(e) }
          value={ quantity }
        />
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          onClick={ () => increment() }
        >
          +
        </button>
      </div>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    urlImage: PropTypes.string,
    price: PropTypes.string,
  }).isRequired,

  setTotalPrice: PropTypes.func.isRequired,
};

export default Product;
