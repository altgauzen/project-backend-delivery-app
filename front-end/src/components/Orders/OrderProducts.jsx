import React from 'react';
import mock from '../../utils/mock/mockProducts';

export default function OrderProducts() {
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
          {mock.map((row, index) => (
            <tr key={ index }>
              <td
                data-testid={
                  `customer_order_details__element-order-table-item-number-${index}`
                }
              >
                {index + 1}
              </td>
              <td
                data-testid={
                  `customer_order_details__element-order-table-name-${index}`
                }
              >
                {row.name}
              </td>
              <td
                data-testid={
                  `customer_order_details__element-order-table-quantity-${index}`
                }
              >
                {row.quantity}
              </td>
              <td
                data-testid={
                  `customer_order_details__element-order-table-sub-total-${index}`
                }
              >
                {`R$ ${row.unitPrice}`}
              </td>
              <td
                data-testid={
                  `customer_order_details__element-order-total-price-${index}`
                }
              >
                {`R$ ${row.subTotal}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <button type="button">total de ...</button>
    </div>
  );
}
