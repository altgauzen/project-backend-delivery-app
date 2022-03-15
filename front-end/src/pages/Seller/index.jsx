import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import OrderService from '../../service/sale.service';
import contextValue from '../../context/context';
import Utils from '../../utils/functions/index';
import SellerNavbar from '../../components/Header/SellerNavbar';

function Seller() {
  const { setUser } = useContext(contextValue);
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  useEffect(() => {
    new OrderService()
      .getSalesAll(localStorage.getItem('token'))
      .then(({ data }) => {
        Utils.setLocalStorage('user', data.user);
        setUser(data.user);
        setOrders(data.orders);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [setOrders, setUser]);

  return (
    <>
      <SellerNavbar />
      <br />
      <br />
      <br />
      <div>
        <section>
          {
            orders ? orders.map((order) => (
              <button
                type="button"
                onClick={ () => history.push(`/seller/orders/${order.id}`) }
                key={ order.id }
                className="containerOrders"
              >
                <div data-testid={ `seller_orders__element-order-id-${order.id}` }>
                  { `Pedido ${order.id}` }
                </div>
                <div data-testid={ `seller_orders__element-delivery-status-${order.id}` }>
                  { order.status }
                </div>
                <div data-testid={ `seller_orders__element-order-date-${order.id}` }>
                  {moment(order.sale_date).format('DD/MM/YYYY')}
                </div>
                <div data-testid={ `seller_orders__element-card-price-${order.id}` }>
                  {`R$ ${Utils.putMaskNumber(Number(order.total_price))}`}
                </div>
                <div data-testid={ `seller_orders__element-card-address-${order.id}` }>
                  {`${order.delivery_address}, ${order.delivery_number}`}
                </div>
              </button>
            )) : null
          }
        </section>
      </div>
    </>
  );
}

export default Seller;
