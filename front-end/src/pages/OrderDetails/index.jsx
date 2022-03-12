import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import OrderDetailsHeader from '../../components/Orders/OrderDetailsHeader';
// import OrderProductsTable from '../../components/Orders/OrderProcuctsTable';
import Navbar from '../../components/Header/Navbar';
import SalesService from '../../service/sale.service';
import UserService from '../../service/user.service';
// import contextValue from '../../context/context';
// import './ordersDetails.css';

function OrderDetails() {
  const { id: orderId } = useParams();
  const [orderDetails, setOrderDetails] = useState(null);
  const [seller, setSeller] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const user = JSON.parse(localStorage.getItem('user'));
  const { token, role } = user;

  useEffect(() => {
    new SalesService()
      .getSaleById(token, orderId)
      .then((res) => {
        if (res) {
          setOrderDetails(res.data);
          getSeller(res.data.order.sellerId);
        }
      })
      .catch((err) => console.error(err));
  }, []);

  const getSeller = (idSeller) => {
    new UserService()
      .getUserById(token, idSeller)
      .then((res) => {
        if (res) setSeller(res.data);
        setLoading(false);
      })
      .catch((err) => console.error(err));
  };

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <section className="pageOrders">
      <Navbar user={ user } />
      <main>
        <br />
        <br />
        <br />

        <h1>Detalhes do Pedido</h1>
        <OrderDetailsHeader
          role={ role }
          orderData={ orderDetails }
          sellerData={ seller }
        />
        {/* <'OrderProductsTable /> */}
      </main>
    </section>
  );
}

export default OrderDetails;
