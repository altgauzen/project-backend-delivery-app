import { useHistory } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import Product from '../../components/Products';
import Navbar from '../../components/Header/Navbar';
import ProductsService from '../../service/product.service';
import contextValue from '../../context/context';
import './products.css';
import Utils from '../../utils/functions/index';
import { Form, Button, Card } from "react-bootstrap";

function CustomerProducts() {
  const {
    products,
    setProducts,
    setUser,
    totalPrice,
    setCart,
    setTotalPrice,
  } = useContext(contextValue);
  const [disabled, setDisabled] = useState(true);
  const history = useHistory();

  useEffect(() => {
    new ProductsService()
      .getProductsAll(localStorage.getItem('token'))
      .then(({ data }) => {
        setProducts(data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setUser, setProducts, setCart]);

  const totalPriceState = () => {
    if (Utils.getLocalStorage('carrinho')) {
      let total = 0.00;
      Utils.getLocalStorage('carrinho')
        .forEach((value) => { total += Utils.removeMaskNumber(value.subTotal); });
      setTotalPrice(Utils.putMaskNumber(total));
      if (total === 0.00) {
        setDisabled(true);
      } else {
        setDisabled(false);
      }
    }
  };

  const redirectCheckout = (e) => {
    e.preventDefault();
    history.push('/customer/checkout');
  };

  return (
    <div className="containerProducts">
      <Navbar />
      <section className="cardsProducts">
        {products ? products.map((product) => (
          <Product
            setTotalPrice={ totalPriceState }
            key={ `${product.id}-${product.name}` }
            product={ product }
          />
        )) : ''}
        <Button
          className="cartShop"
          type="button"
          onClick={ redirectCheckout }
          data-testid="customer_products__button-cart"
          disabled={ disabled }
        >
          Ver Carrinho: R$
          {' '}
          <span
            data-testid="customer_products__checkout-bottom-value"
          >
            {`${totalPrice}`}
          </span>
        </Button>
      </section>
    </div>
  );
}

export default CustomerProducts;
