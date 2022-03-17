import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
//  import Order from '../../components/Order';
import moment from "moment";
import Navbar from "../../components/Header/Navbar";
import OrderService from "../../service/sale.service";
import contextValue from "../../context/context";
import Utils from "../../utils/functions/index";
import { Form, Button, Card } from "react-bootstrap";
// import socketClient from '../../utils/soketClient/index'
import "./orders.css";

function Orders() {
  const { setUser } = useContext(contextValue);
  const [orders, setOrders] = useState([]);
  const history = useHistory();

  // useEffect(() => {
  //   socketClient.on('updated', ({ saleId, status }))
  // }, [])

  useEffect(() => {
    new OrderService()
      .getSalesAll(localStorage.getItem("token"))
      .then(({ data }) => {
        Utils.setLocalStorage("user", data.user);
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
      <Navbar />
      <div style={{ display: "flex", flexDirection: "row" }} className="mt-5">
        {orders
          ? orders.map((order) => (
              <Card>
                <div
                  type="button"
                  onClick={() => history.push(`/customer/orders/${order.id}`)}
                  key={order.id}
                  className="containerOrders"
                >
                  <Card.Header className="alingItemColumn">
                    <div>Pedido</div>{" "}
                    <div
                      data-testid={`customer_orders__element-order-id-${order.id}`}
                    >{` ${order.id}`}</div>
                  </Card.Header>
                  <Card.Title
                    className="alingItemStatus"
                    data-testid={`customer_orders__element-delivery-status-${order.id}`}
                  >
                    {order.status}
                  </Card.Title>
                  <Card.Body className="alingItemPriceWithDay mb-2">
                    <div
                      data-testid={`customer_orders__element-order-date-${order.id}`}
                    >
                      {moment(order.sale_date).format("DD/MM/YYYY")}
                    </div>
                    <div
                      data-testid={`customer_orders__element-card-price-${order.id}`}
                    >
                      {`R$ ${Utils.putMaskNumber(Number(order.total_price))}`}
                    </div>
                  </Card.Body>
                </div>
              </Card>
            ))
          : null}
      </div>
    </div>
  );
}

export default Orders;
