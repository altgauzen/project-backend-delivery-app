import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import moment from 'moment';
import OrderService from '../../service/sale.service';
import contextValue from '../../context/context';
import Utils from '../../utils/functions/index';
import SellerNavbar from '../../components/Header/SellerNavbar';
import { Card } from 'react-bootstrap';
import './seller.css';

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
    <div>
      <SellerNavbar />
      <div style={{ display: "flex", flexDirection: "row", flexWrap: 'wrap' }} className="mt-5">
          {
            orders ? orders.map((order) => (
              <Card>
              <div
                type="button"
                onClick={ () => history.push(`/seller/orders/${order.id}`) }
                key={ order.id }
                className="containerOrders"
              >
                <Card.Header className="alingItemColumn">
                <div>Pedido</div>{" "}
                <div
                className="containerOrders"
                data-testid={ `seller_orders__element-order-id-${order.id}` }>
                  { `${order.id}` }
                </div>
                </Card.Header> 
                <Card.Title
                className="alingItemStatus"
                data-testid={ `seller_orders__element-delivery-status-${order.id}` }>
                  { order.status }
                </Card.Title>
                <Card.Body className="alingItemPriceWithDay mb-2">
                <div data-testid={ `seller_orders__element-order-date-${order.id}` }>
                  {moment(order.sale_date).format('DD/MM/YYYY')}
                </div>
                <div data-testid={ `seller_orders__element-card-price-${order.id}` }>
                  {`R$ ${Utils.putMaskNumber(Number(order.total_price))}`}
                </div>
                <div data-testid={ `seller_orders__element-card-address-${order.id}` }>
                  {`${order.delivery_address}, ${order.delivery_number}`}
                </div>
                  </Card.Body>
              </div>
          </Card>
            )) : null
          }
        </div>
    </div>
  );
}

export default Seller;
