import React, { useContext } from 'react';

import Navbar from '../../components/Header/Navbar';
import FinalizeOrder from '../../components/customerCheckout/FinalizeOrder';
import DetailForDelivery from '../../components/customerCheckout/DetailForDelivery';
import contextValue from '../../context/context';

function CustomerCheckout() {
  const { user } = useContext(contextValue);
  return (
    <section>
      <Navbar user={ user } />
      <FinalizeOrder />
      <DetailForDelivery />
    </section>
  );
}

export default CustomerCheckout;
