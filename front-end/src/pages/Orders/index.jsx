import React, { useContext, useEffect, useState } from 'react';
//  import Order from '../../components/Order';
import moment from 'moment';
import Navbar from '../../components/Header/Navbar';
import OrderService from '../../service/sale.service';
import contextValue from '../../context/context';
//  import './products.css';
import Utils from '../../utils/functions/index';

function Orders() {
  const { user, setUser } = useContext(contextValue);
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    new OrderService()
      .getSalesAll(localStorage.getItem('token'))
      .then(({ data }) => {
        Utils.setLocalStorage('user', data.user);
        setUser(data.user);
        setOrders([data.orders]);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setOrders, setUser]);

  return (
    <div>
      <Navbar user={ user } />
      <section>
        {
          orders ? orders.map(({ id, status, sale_date, total_price, userId }) => (
            <div key={ `${id}-${userId}` }>
              <span
                data-testid={ `customer_orders__element-order-id-${id}` }
              >
                { `Pedido ${id}` }
              </span>
              <span
                data-testid={ `customer_orders__element-delivery-status-${id}` }
              >
                { status }
              </span>
              <div
                data-testid={ `customer_orders__element-order-date-${id}` }
              >
                <span>{moment(sale_date).format('DD-MM-YY')}</span>
                <span>
                  { total_price }
                </span>
              </div>
            </div>
          )) : ''
        }
      </section>
    </div>
  );
}

export default Orders;
