import React from 'react';

import Navbar from '../../components/Header/Navbar';
import FinalizeOrder from '../../components/customerCheckout/FinalizeOrder';
import DetailForDelivery from '../../components/customerCheckout/DetailForDelivery';
import SalesService from '../../service/sale.service';
import Utils from '../../utils/functions/index';
//  import Header from '../../components/Header/Navbar';
import context from '../../context/context';

function CustomerCheckout() {
  const { user } = React.useContext(context);
  return (
    <section>
      <Navbar user={ user } />
      <FinalizeOrder />
      <DetailForDelivery />
    </section>
  );
}

export default CustomerCheckout;
