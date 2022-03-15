import PropTypes from 'prop-types';
import React from 'react';

import './OrderProducts.css';

export default function OrderProducts({ productsById }) {
  // const { totalPrice, setTotalPrice } = useContext(contextValue);
  let total = 0;

  const mult = (base, times) => {
    const res = (base * times).toFixed(2);
    total += Number(res);
    return res;
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
          { console.log(productsById) }
          {productsById.map((row, index) => (
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
                {row.salesProducts.quantity}
              </td>
              <td
                data-testid={
                  `customer_order_details__element-order-table-sub-total-${index}`
                }
              >
                {`R$ ${row.price}`}
              </td>
              <td
                data-testid={'customer_order_details__element-order-total-price'}
              >
                {`R$ ${mult(row.price, row.salesProducts.quantity)}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>{`total de ${total}`}</h3>
    </div>
  );
}

OrderProducts.propTypes = {
  productsById: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};
