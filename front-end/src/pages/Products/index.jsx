import React, { useContext, useEffect } from 'react';
import Product from '../../components/Product';
import Navbar from '../../components/Navbar';
import ProductsService from '../../service/product.service';
import contextValue from '../../context/context';
import './products.css';
import Utils from '../../utils/functions/index';

function CustomerProducts() {
  const { products, setProducts, user, setUser, cart } = useContext(contextValue);

  useEffect(() => {
    new ProductsService()
      .getProductsAll(localStorage.getItem('token'))
      .then(({ data }) => {
        Utils.setLocalStorage('user', data.user);
        setUser(data.user);
        setProducts(data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setProducts, setUser]);

  return (
    <div className="containerProducts">
      <Navbar user={ user } />
      <section className="cardsProducts">
        <div data-testid="customer_products__checkout-bottom-value">
          {
            cart.reduce((previousTotal, currentTotal) => parseFloat(previousTotal.subTotal
              .replace(',', '.')) + parseFloat(currentTotal.subTotal
              .replace(',', '.')), 0)
          }
        </div>
        {products ? products.map((product) => (
          <Product key={ `${product.id}-${product.name}` } product={ product } />
        )) : ''}
      </section>
    </div>
  );
}

export default CustomerProducts;
