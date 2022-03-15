import PropTypes from 'prop-types';
import React from 'react';
import moment from 'moment';

export default function SellerOrdersDetails({ orderData }) {
  // const markAsDelivered = () => {

  // }

  return (
    <section className="containerOrders">
      <div data-testid="seller_order_details__element-order-details-label-order-id">
        {`Pedido: ${orderData.order.id}`}
      </div>
      <div data-testid="seller_order_details__element-order-details-label-order-date">
        {moment(orderData.order.sale_date).format('DD/MM/YYYY')}
      </div>
      <div
        data-testid="seller_order_details__element-order-details-label-delivery-status"
      >
        { orderData.order.status }
      </div>
      <button
        type="button"
        // disabled={ orderData.status !== 'Em Trânsito' }
        // onClick={ markAsDelivered }
        data-testid="seller_order_details__button-preparing-check"
      >
        Preparar pedido
      </button>
      <button
        type="button"
        disabled={ orderData.status !== 'Em Trânsito' }
        // onClick={ markAsDelivered }
        data-testid="seller_order_details__button-dispatch-check"
      >
        Saiu para a entrega
      </button>
    </section>
  );
}

SellerOrdersDetails.propTypes = {
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
