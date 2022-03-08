import React, { useContext, useEffect, useState } from 'react';
import Order from '../../components/Order';
import Navbar from '../../components/Navbar';
import OrderService from '../../service/sale.service';
import contextValue from '../../context/context';
//  import './products.css';
//  import Utils from '../../utils/functions/index';

function Orders() {
  const { user } = useContext(contextValue);
  const { orders, setOrders } = useState('');

  useEffect(() => {
    new OrderService()
      .getAllSales(localStorage.getItem('token'))
      .then(({ data }) => {
        setOrders(data.orders);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setOrders]);

  return (
    <div className="containerProducts">
      <Navbar user={ user } />
      <section className="cardsOrders">
        {orders ? orders.map((order) => (
          <Order key={ `${order.id}` } order={ order } />
        )) : ''}
      </section>
    </div>
  );
}

export default Orders;
