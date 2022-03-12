/* <table className="table">
          <thead className="titles">
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
        </button> */
