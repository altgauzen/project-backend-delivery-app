import React, { useContext, useEffect } from 'react';
import Product from '../../components/Product';
import Navbar from '../../components/Navbar';
import ProductsService from '../../service/product.service';
import contextValue from '../../context/context';
import './products.css';
import Utils from '../../utils/functions/index.js';

function CustomerProducts() {
  const { products, setProducts, user, setUser } = useContext(contextValue);

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
        {products ? products.map((product) => (
          <Product product={ product } />
        )) : '' }
      </section>
    </div>
  );
}

export default CustomerProducts;
