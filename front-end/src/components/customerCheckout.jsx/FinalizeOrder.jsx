import React from 'react';
import './FinalizeOrder.css';

import mockProducts from '../../utils/mock/mockProducts';

export default function FinalizeOrder() {
  return (
    <div className="finalize-order">
      <table className="table">
        <thead className="titles">
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
        </thead>
        <tbody className="titles">
          {
            mockProducts.map((row, index) => (
              <tr key={ index }>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-item-number-${index}`
                  }
                >
                  { row.item }
                </td>
                <td
                  data-testid={ `customer_checkout__element-order-table-name-${index}` }
                >
                  { row.descricao }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-quantity-${index}`
                  }
                >
                  { `R$ ${row.quantidade}` }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-unit-price-${index}`
                  }
                >
                  { `R$ ${row.valorUnitario}` }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-sub-total-${index}`
                  }
                >
                  { `R$ ${row.subTotal}` }
                </td>
                <button
                  type="button"
                  data-testid={ `customer_checkout__element-order-table-remove-${index}` }
                >
                  Remover
                </button>
              </tr>
            ))
          }
        </tbody>
      </table>
      <button
        type="button"
        data-testid="customer_checkout__element-order-total-price"
      >
        Total R$ 28,50
      </button>
    </div>
  );
}
