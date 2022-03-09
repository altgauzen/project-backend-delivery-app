import React from 'react';
import PropTypes from 'prop-types';
import moment from 'moment';
//  import contextValue from '../context/context';
//  import Utils from '../utils/functions/index';

function Order({ order }) {
  //  const { cart, setCart } = useContext(contextValue);
  //  const [quantity, setQuantity] = useState(0);
  //  const { id, status, total_price, sale_date } = order;

  // const setCartManual = () => {
  //   const item = cart.filter((car) => id === car.orderId);
  //   const unitPrice = parseFloat(price);
  //   if (!item.length && quantity !== 0) {
  //     const subTotal = price * quantity;
  //     setCart([...cart, {
  //       orderId: id,
  //       name,
  //       quantity,
  //       unitPrice: unitPrice.toFixed(2).replace(/\./, ','),
  //       subTotal: subTotal.toFixed(2).replace(/\./, ','),
  //     }]);
  //     Utils.setLocalStorage('carrinho', [...cart, {
  //       orderId: id,
  //       name,
  //       quantity,
  //       unitPrice: unitPrice.toFixed(2).replace(/\./, ','),
  //       subTotal: subTotal.toFixed(2).replace(/\./, ','),
  //     }]);
  //   } else {
  //     const newCarrt = cart.map((car) => {
  //       if (car.orderId === item[0].orderId) {
  //         const subTotal = price * quantity;
  //         car.quantity = quantity;
  //         car.subTotal = subTotal.toFixed(2).replace(/\./, ',');
  //       }
  //       return car;
  //     });
  //     setCart(newCarrt);
  //     Utils.setLocalStorage('carrinho', cart);
  //   }
  // };

  // useEffect(() => {
  //   setCartManual();
  // }, [setQuantity, quantity, setCartManual]);

  // const controlQuantity = async ({ target: { innerText, value } }) => {
  //   if (innerText === '+') {
  //     setQuantity(quantity + 1);
  //   } else if (innerText === '-' && quantity !== 0) {
  //     setQuantity(quantity - 1);
  //   } else if (value !== '0') {
  //     setQuantity(Number(value));
  //   }
  // };

  return (
    <div>
      <span
        data-testid={ `customer_orders__element-order-id-${id}` }
      >
        { `Pedido ${order.id}` }
      </span>
      <span
        data-testid={ `customer_orders__element-delivery-status-${id}` }
      >
        { order.status }
      </span>
      <div
        data-testid={ `customer_orders__element-order-date-${id}` }
      >
        <span>
          { moment(order.sale_date, 'DD-MM-YYYY') }
        </span>
        <span>
          { order.total_price }
        </span>
      </div>
    </div>
  );
}

Order.propTypes = {
  order: PropTypes.shape({
    id: PropTypes.number,
    sale_date: PropTypes.string,
    status: PropTypes.string,
    total_price: PropTypes.number,
  }).isRequired,
};

export default Order;
