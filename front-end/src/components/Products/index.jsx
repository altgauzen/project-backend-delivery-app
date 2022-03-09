import React, { useContext, useEffect, useCallback, useState } from "react";
import PropTypes from "prop-types";
import contextValue from "../../context/context";
import Utils from "../../utils/functions/index";
import "./products.css";

function Product({ product, setTotalPrice }) {
  const { setCart } = useContext(contextValue);
  const [quantity, setQuantity] = useState(0);
  const { urlImage, id, name, price } = product;

  const productsQuantityLocal = useCallback(() => {
    const qtd = Utils.getLocalStorage("carrinho");
    qtd.forEach((prod) => {
      if (prod.productId === id) {
        document.getElementById(`inputQuantity-${id}`).value = prod.quantity;
      }
    });
  }, [id]);

  const setCartManual = (operation) => {
    const local = Utils.getLocalStorage("carrinho");
    const item = local.find((car) => id === car.productId);
    item.subTotal = Utils.removeMaskNumber(item.subTotal);
    item.unitPrice = Utils.removeMaskNumber(item.unitPrice);

    switch (operation) {
      case "+":
        item.quantity += 1;
        item.subTotal = item.quantity * item.unitPrice;
        item.subTotal = Utils.putMaskNumber(item.subTotal);
        item.unitPrice = Utils.putMaskNumber(item.unitPrice);
        break;
      case "-":
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
    const newLocal = local.map((prod) => (prod.productId === id ? item : prod));
    Utils.setLocalStorage("carrinho", newLocal);
    productsQuantityLocal();
    setCart(newLocal);
    setTotalPrice();
  };

  useEffect(() => {
    productsQuantityLocal();
  }, []);

  const increment = () => {
    setQuantity(quantity + 1);
  };

  const inputValue = (event) => {
    setQuantity(event.target.value);
  };

  const decrement = () => {
    if(quantity == 0){
      setQuantity(quantity)
    } else {
      setQuantity(quantity - 1)
    } 
  }

  const controlQuantity = ({ target: { innerText, value } }) => {
    setCartManual(innerText || Number(value));
  };

  // Utils.getLocalStorage('carrinho').find(x => x.productId === id).quantity;
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
          data-testid={`customer_products__button-card-rm-item-${id}`}
          onClick={() => decrement()}
        >
          -
        </button>
        <input
          type="number"
          id={`inputQuantity-${id}`}
          data-testid={`customer_products__input-card-quantity-${id}`}
          onChange={(e) => inputValue(e)}
          value={quantity}
        />
        <button
          type="button"
          data-testid={`customer_products__button-card-add-item-${id}`}
          onClick={() => increment()}
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
