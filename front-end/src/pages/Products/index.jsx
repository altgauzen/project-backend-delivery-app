import React, { useEffect } from 'react';
import Navbar from '../../components/Navbar';
import ProductsService from '../../service/product.service';

function CustomerProducts() {
  // const [products, setProducts] = useState([]);
  useEffect(() => {
    new ProductsService()
      .getProductsAll(localStorage.getItem('token'))
      .then((res) => {
        setProducts(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  return (
    <div>
      <Navbar />
      /customer/products
    </div>
  );
}

export default CustomerProducts;
