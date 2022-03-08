import { useHistory } from 'react-router-dom';
import React, { useContext, useEffect, useState } from 'react';
import Product from '../../components/Products';
import Navbar from '../../components/Header/Navbar';
import ProductsService from '../../service/product.service';
import contextValue from '../../context/context';
import './products.css';
import Utils from '../../utils/functions/index';

function CustomerProducts() {
  const {
    products,
    setProducts,
    user,
    setUser,
    cart,
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
        Utils.setLocalStorage('user', data.user);
        setUser(data.user);
        setProducts(data.products);
        setCart(data.products.map(({ id, name, price }) => ({
          productId: id,
          name,
          quantity: 0,
          unitPrice: Utils.putMaskNumber(Number(price)),
          subTotal: Utils.putMaskNumber(0 * Number(price)),
        })));
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setUser, setProducts, setCart]);

  const totalPriceState = () => {
    let total = 0;
    cart.forEach((value) => { total += Utils.removeMaskNumber(value.subTotal); });
    setTotalPrice(Utils.putMaskNumber(total));
    if (Utils.removeMaskNumber(totalPrice) === 0) setDisabled(!disabled);
  };

  const redirectCheckout = (e) => {
    e.preventDefault();
    history.push('/customer/checkout');
  };
  return (
    <div className="containerProducts">
      <Navbar user={ user } />
      <section className="cardsProducts">
        {products ? products.map((product) => (
          <Product
            setTotalPrice={ totalPriceState }
            key={ `${product.id}-${product.name}` }
            product={ product }
          />
        )) : ''}
        <button
          className='cartShop'
          type="button"
          onClick={ redirectCheckout }
          data-testid="customer_products__button-cart"
          disabled={ disabled }
        >
          Ver Carrinho: R$ <span data-testid="customer_products__checkout-bottom-value">{`${totalPrice}`}</span>
        </button>
      </section>
    </div>
  );
}

export default CustomerProducts;
