import React, { useContext, useEffect } from 'react';
import Counter from '../../components/Counter';
import Navbar from '../../components/Navbar';
import ProductsService from '../../service/product.service';
import contextValue from '../../context/context';
import './products.css';

function CustomerProducts() {
  const { products, setProducts, user, setUser } = useContext(contextValue);

  useEffect(() => {
    new ProductsService()
      .getProductsAll(localStorage.getItem('token'))
      .then(({ data }) => {
        console.log(data);
        localStorage.setItem('user', JSON.stringify(data.user));
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
        {products ? products.map(({ urlImage, id, name, price }) => (
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
            <Counter id={ id } />
          </div>
        )) : '' }
      </section>
    </div>
  );
}

export default CustomerProducts;
