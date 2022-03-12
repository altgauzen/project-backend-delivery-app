import React, { useContext, useEffect, useState } from 'react';
import moment from 'moment';

export default function OrderDetailsHeader({role, orderData, sellerData}) {
  return (
    <section className="containerOrders">
        <div data-testid="customer_order_details__element-order-details-label-order-id">
          {`Pedido ${orderData.id}`}
        </div>
        <div data-testid="customer_order_details__element-order-details-label-seller-name">
          {`Pessoa Vendedora ${order.seller_id}`}
        </div>
        <div data-testid="customer_order_details__element-order-details-label-order-date">
          {moment(orderData.sale_date).format('DD-MM-YY')}
        </div>
        <div data-testid="customer_order_details__element-order-details-label-delivery-status">
          {/* { order.status } */}
          { orderData.status }
        </div>
        <button
          type="button"
          // disabled={ !orderData.status.includes('Em Trânsito') }
          // onClick={ markAsDelivered }
          data-testid="customer_order_details__button-delivery-check"
        >
          Marcar como entregue
        </button>
    </section>
  );
}
