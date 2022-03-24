import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import OrderDetailsHeader from '../../components/Orders/OrderDetailsHeader';
import Navbar from '../../components/Header/Navbar';
import SalesService from '../../service/sale.service';
import UserService from '../../service/user.service';
import OrderProducts from '../../components/Orders/OrderProducts';

function OrderDetails() {
  const { id: orderId } = useParams();

  const [orderDetails, setOrderDetails] = useState(null);
  const [seller, setSeller] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [productsById, setProductsById] = useState(null);

  const user = JSON.parse(localStorage.getItem('user'));

  const { token, role } = user;

  const getSeller = useCallback((idSeller) => {
    new UserService()
      .getUserById(token, idSeller)
      .then((res) => {
        if (res) setSeller(res.data);
        // setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [token]);

  const getProductsById = (tokenUser, orderProductById) => {
    new SalesService()
      .getOrderProductsByIdService(tokenUser, orderProductById)
      .then((res) => {
        setProductsById(res.data.products);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    new SalesService()
      .getSaleById(token, orderId)
      .then((res) => {
        if (res) {
          setOrderDetails(res.data);
          getSeller(res.data.order.sellerId);
          getProductsById(token, orderId);
        }
      })
      .catch((err) => console.error(err));
  }, [getSeller, orderId, token]);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <section className="pageOrders">
      <Navbar />
      <main className="mt-5">
        <h1 className="mt-3">Detalhes do Pedido</h1>
        <OrderDetailsHeader
          role={ role }
          orderData={ orderDetails }
          sellerData={ seller }
        />
        <OrderProducts
          productsById={ productsById }
        />
        {/* <'OrderProductsTable /> */}
      </main>
    </section>
  );
}

export default OrderDetails;
