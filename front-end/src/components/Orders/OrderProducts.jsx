import PropTypes from 'prop-types';
import React from 'react';
import contextValue from '../../context/context';

import './OrderProducts.css';

export default function OrderProducts({ productsById }) {
  const { totalPrice } = React.useContext(contextValue);
  // let total = 0;

  // const mult = (base, times) => {
  //   const res = (base * times).toFixed(2);
  //   total += Number(res);
  //   return res;
  // };

  return (
    <>
      <table className="table">
        <thead className="titles">
          <th scope="col">Item</th>
          <th scope="col">Descrição</th>
          <th scope="col">Quantidade</th>
          <th scope="col">Valor Unitário</th>
          <th scope="col">Sub-total</th>
        </thead>
        <tbody className="titles">
          { console.log(productsById) }
          {productsById.map((row, index) => (
            <tr key={ index } className="table table-blue table-hover">
              <td
                scope="row"
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
                data-testid="customer_order_details__element-order-total-price"
              >
                {`R$ ${totalPrice}`}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <h3>{`total de ${totalPrice}`}</h3>
    </>
  );
}

OrderProducts.propTypes = {
  productsById: PropTypes.shape({
    map: PropTypes.func,
  }).isRequired,
};
