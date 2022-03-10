import React, { useContext } from 'react';

import OrderDetailsComponent from '../../components/Orders/OrderDetailsComponent';
import Header from '../../components/Header/Navbar';
import contextValue from '../../context/context';
import './ordersDetails.css';

function OrderDetails() {
  const { user } = useContext(contextValue);

  return (
    <section className="pageOrders">
      <Header  user={ user }/>
      <OrderDetailsComponent />
    </section>
  );
}

export default OrderDetails;
