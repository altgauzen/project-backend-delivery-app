import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';
import { Form, Button, Card } from "react-bootstrap";

export default function OrderDetailsHeader({ orderData, sellerData }) {
  return (
    <section className="containerOrders mt-2">
      <div data-testid="customer_order_details__element-order-details-label-order-id">
        {`Pedido: ${orderData.order.id}`}
      </div>
      <div
        data-testid="customer_order_details__element-order-details-label-seller-name"
      >
        {`Pessoa Vendedora ${sellerData.name}`}
      </div>
      <div data-testid="customer_order_details__element-order-details-label-order-date">
        {moment(orderData.order.sale_date).format('DD/MM/YYYY')}
      </div>
      <div
        data-testid="customer_order_details__element-order-details-label-delivery-status"
      >
        { orderData.order.status }
      </div>
      <Button
        type="button"
        disabled={ orderData.status !== 'Em Trânsito' }
        // onClick={ markAsDelivered }
        data-testid="customer_order_details__button-delivery-check"
      >
        Marcar como entregue
      </Button>
    </section>
  );
}

OrderDetailsHeader.propTypes = {
  orderData: PropTypes.shape({
    order: PropTypes.shape({
      id: PropTypes.number,
      sale_date: PropTypes.string,
      status: PropTypes.string,
    }),
    status: PropTypes.string,
  }).isRequired,
  sellerData: PropTypes.shape({
    name: PropTypes.string,
  }).isRequired,
};
