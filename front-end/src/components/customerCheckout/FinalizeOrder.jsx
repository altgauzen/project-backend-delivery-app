import React, { useContext, useEffect } from 'react';
import './FinalizeOrder.css';
import contextValue from '../../context/context';
import Utils from '../../utils/functions';
import { Button, Card } from "react-bootstrap";

export default function FinalizeOrder() {
  const { totalPrice, cart, setCart, setTotalPrice } = useContext(contextValue);

  useEffect(() => {
    setCart(Utils.getLocalStorage('carrinho'));
  }, [setCart]);

  const handlerRow = (index) => {
    const newCart = cart.filter((item) => item !== cart[index]);
    Utils.setLocalStorage('carrinho', newCart);
    setCart(newCart);
    let total = 0.0;
    Utils.getLocalStorage('carrinho').forEach((value) => {
      total += Utils.removeMaskNumber(value.subTotal);
    });
    setTotalPrice(Utils.putMaskNumber(total));
    return newCart;
  };

  return (
    <Card className="finalize-order mt-5">
          <Card.Body>
      <table className="table table-primary">
        <thead className="titles">
          <th scope="col">Item</th>
          <th scope="col">Descrição</th>
          <th scope="col">Quantidade</th>
          <th scope="col">Valor Unitário</th>
          <th scope="col">Sub-total</th>
        </thead>
        <tbody className="titles table-hover">
          {cart.map((row, index) => (
            <tr key={ index }>
              <td
                data-testid={
                  `customer_checkout__element-order-table-item-number-${index}`
                }
              >
                {index + 1}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-name-${index}`
                }
              >
                {row.name}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-quantity-${index}`
                }
              >
                {row.quantity}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-unit-price-${index}`
                }
              >
                {`R$ ${row.unitPrice}`}
              </td>
              <td
                data-testid={
                  `customer_checkout__element-order-table-sub-total-${index}`
                }
              >
                {`R$ ${row.subTotal}`}
              </td>
              <td
                type="button"
                data-testid={ `customer_checkout__element-order-table-remove-${index}` }
                onClick={ () => handlerRow(index) }
              >
                Remover
              </td>
            </tr>
          ))}
        </tbody>
      </table>
          </Card.Body>
      <Button
        type="button"
        data-testid="customer_checkout__element-order-total-price"
      >
        {`Total: R$ ${totalPrice}`}
      </Button>
    </Card>
  );
}
