import React, { useContext, useState } from 'react';
import PropTypes from 'prop-types';
import contextValue from '../../context/context';
import Utils from '../../utils/functions/index';
import './products.css';


function Product({ product, setTotalPrice }) {
  const { cart, setCart } = useContext(contextValue);
  const [quantity, setQuantity] = useState(0);
  const { urlImage, id, name, price } = product;

  const setCartManual = (operation) => {
    const item = cart.filter((car) => id === car.productId)[0];
    item.subTotal = Utils.removeMaskNumber(item.subTotal);
    item.unitPrice = Utils.removeMaskNumber(item.unitPrice);
    switch (operation) {
    case '+':
      item.quantity += 1;
      item.subTotal = item.quantity * item.unitPrice;
      item.subTotal = Utils.putMaskNumber(item.subTotal);
      item.unitPrice = Utils.putMaskNumber(item.unitPrice);
      break;
    case '-':
      console.log(item.unitPrice, operation);
      if (item.quantity !== 0) item.quantity -= 1;
      item.subTotal = item.quantity * item.unitPrice;
      item.subTotal = Utils.putMaskNumber(item.subTotal);
      item.unitPrice = Utils.putMaskNumber(item.unitPrice);
      break;
    default:
      item.quantity = operation;
      item.subTotal = operation * item.unitPrice;
      item.subTotal = Utils.putMaskNumber(item.subTotal);
      item.unitPrice = Utils.putMaskNumber(item.unitPrice);
      break;
    }
    setQuantity(item.quantity);
    setCart(cart.map((prod) => (item.productId === prod.id ? item : prod)));
    Utils.setLocalStorage('carrinho', cart);
    setTotalPrice();
  };

  const controlQuantity = async ({ target: { innerText, value } }) => {
    setCartManual(innerText || (Number(value)));
  };

  return (
    <div className='containerCard'>
      <div className='containerDescription'>
        <h1
          data-testid={ `customer_products__element-card-price-${id}` }
        > 
          {`R$ ${ Utils.putMaskNumber(Number(price)) }`}
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
      </div>
      <div className="containerInput">
        <button
          type="button"
          data-testid={ `customer_products__button-card-add-item-${id}` }
          onClick={ (e) => controlQuantity(e) }
        >
          -
        </button>
        <input
          type="number"
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

  setTotalPrice: PropTypes.func.isRequired,
};

export default Product;
