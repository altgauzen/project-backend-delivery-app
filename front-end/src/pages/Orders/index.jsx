import React, { useContext, useEffect, useState } from 'react';
//  import Order from '../../components/Order';
import Navbar from '../../components/Header/Navbar';
import OrderService from '../../service/sale.service';
import contextValue from '../../context/context';
//  import './products.css';
import Utils from '../../utils/functions/index';

function Orders() {
  const { setUser } = useContext(contextValue);
  const { orders, setOrders } = useState([]);

  useEffect(() => {
    new OrderService()
      .getSalesAll(localStorage.getItem('token'))
      .then(({ data }) => {
        Utils.setLocalStorage('user', data.user);
        setUser(data.user);
        setOrders(data.orders);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setOrders, setUser]);
  console.log('EM ORDERS PAGE VEM orders?', orders);

  return (
    <div>
      <Navbar />
      <section>
        {
          orders.map((order) => (
            <div key={ order.id }>
              <span
                data-testid={ `customer_orders__element-order-id-${id}` }
              >
                { `Pedido ${order.id}` }
              </span>
              <span
                data-testid={ `customer_orders__element-delivery-status-${id}` }
              >
                { order.status }
              </span>
              <div
                data-testid={ `customer_orders__element-order-date-${id}` }
              >
                <span>
                  { moment(order.sale_date, 'DD-MM-YYYY') }
                </span>
                <span>
                  { order.total_price }
                </span>
              </div>
            </div>
          ))
        }
      </section>
    </div>
  );
}

export default Orders;
