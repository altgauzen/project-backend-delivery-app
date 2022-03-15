import PropTypes from 'prop-types';
import React from 'react';
import Utils from '../../utils/functions/index';

export default function SellerOrderProducts({ productsById }) {
  let total = 0;

  const mult = (base, times) => {
    const res = base * times;
    total += res;
    return res.toFixed(2);
  };

  return (
    <div>
      <table className="table">
        <thead className="titles">
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
        </thead>
        <tbody className="titles">
          {productsById.map((row, index) => (
            <tr key={ index }>
              <td
                data-testid={
                  `seller_order_details__element-order-table-item-number-${index}`
                }
              >
                {index + 1}
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-name-${index}`
                }
              >
                {row.name}
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-quantity-${index}`
                }
              >
                {row.salesProducts.quantity}
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-unit-price-${index}`
                }
              >
                {`R$ ${row.price}`}
              </td>
              <td
                data-testid={
                  `seller_order_details__element-order-table-sub-total-${index}`
                }
              >
                {`R$ ${mult(row.price, row.salesProducts.quantity)}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3
        data-testid="seller_order_details__element-order-total-price"
      >
        {`${Utils.putMaskNumber(total)}`}
      </h3>
    </div>
  );
}

SellerOrderProducts.propTypes = {
  productsById: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};
