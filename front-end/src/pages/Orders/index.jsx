import React, { useContext, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
//  import Order from '../../components/Order';
import moment from 'moment';
import Navbar from '../../components/Header/Navbar';
import OrderService from '../../service/sale.service';
import contextValue from '../../context/context';
//  import './products.css';
import Utils from '../../utils/functions/index';
import './orders.css';

function Orders() {
  const { user, setUser } = useContext(contextValue);
  const [orders, setOrders] = useState([]);

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

  return (
    <div className="pageOrders">
      <nav>
        <Navbar user={ user } />
      </nav>
      <section className="ordersStyle">
        {console.log(orders)}
        {
          orders ? orders.map((order) => (
            <Link
              to={ `/customer/orders/${order.id}` }
              key={ order.id }
              className="containerOrders"
            >
              <div data-testid={ `customer_orders__element-order-id-${order.id}` }>
                { `Pedido ${order.id}` }
              </div>
              <div data-testid={ `customer_orders__element-delivery-status-${order.id}` }>
                { order.status }
              </div>
              <div data-testid={ `customer_orders__element-order-date-${order.id}` }>
                {moment(order.sale_date).format('DD-MM-YY')}
              </div>
              <div>
                {`R$ ${Utils.putMaskNumber(Number(order.totalPrice))}`}
              </div>
            </Link>
          )) : null
        }
      </section>
    </div>
  );
}

export default Orders;
