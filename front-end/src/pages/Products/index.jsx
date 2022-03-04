import React, { useEffect, useState } from 'react';
import Counter from '../../components/Counter';
import Navbar from '../../components/Navbar';
import ProductsService from '../../service/product.service';
// import './costumer'
function CustomerProducts() {
  const [products, setProducts] = useState([]);
  const [user, setUser] = useState('');

  useEffect(() => {
    new ProductsService()
      .getProductsAll(localStorage.getItem("token"))
      .then(({ data }) => {
        const { name, email, role } = data;
        localStorage.setItem('name', name);
        localStorage.setItem('email', email);
        localStorage.setItem('role', role);
        setName(data.user);
        setProducts(data.products);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <Navbar user={ user }/>
      <section className='containerProducts'>
        {products ? products.map(({urlImage, id, name, price}) => (
          <div key={`${name}${id}`}>
            <h1 data-testid={`customer_products__element-card-price-${ id }`} >{ price }</h1>
            <img data-testid={`customer_products__img-card-bg-image-${ id }`} src={ urlImage } alt={ name } />
            <h2 data-testid={`customer_products__element-card-title-${ id }`} >{ name }</h2>
            <Counter id={ id } />
          </div>
        )) : '' }
      </section>
    </div>
  );
}

export default CustomerProducts;
