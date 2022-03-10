import React, { useContext, useEffect } from 'react';
//  import './FinalizeOrder.css';
import contextValue from '../../context/context';
import Utils from '../../utils/functions';

export default function OrderDetailsComponent() {
  const { totalPrice, cart, setCart, setTotalPrice } = useContext(contextValue);

  useEffect(() => {
    setCart(Utils.getLocalStorage('carrinho'));
    let total = 0.0;
    Utils.getLocalStorage('carrinho').forEach((value) => {
      total += Utils.removeMaskNumber(value.subTotal);
    });
  }, [setCart]);

  return (
    <div className="detail-order">
      <h1>Detalhes do Pedido</h1>
      <table className="table">
        <thead className="titles">
          <th>
            <td></td>
          </th>
          <th>Item</th>
          <th>Descrição</th>
          <th>Quantidade</th>
          <th>Valor Unitário</th>
          <th>Sub-total</th>
        </thead>
        <tbody className="titles">
          {
            cart.map((row, index) => (
              <tr key={ index }>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-item-number-${index}`
                  }
                >
                  { row.productId }
                </td>
                <td
                  data-testid={ `customer_checkout__element-order-table-name-${index}` }
                >
                  { row.name }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-quantity-${index}`
                  }
                >
                  { row.quantity }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-unit-price-${index}`
                  }
                >
                  { `R$ ${row.unitPrice}` }
                </td>
                <td
                  data-testid={
                    `customer_checkout__element-order-table-sub-total-${index}`
                  }
                >
                  { `R$ ${row.subTotal}` }
                </td>
              </tr>
            ))
          }
        </tbody>
      </table>
      <button
        type="button"
        data-testid="customer_checkout__element-order-total-price"
      >
        {`Total: R$ ${totalPrice}`}
      </button>
    </div>
  );
}
