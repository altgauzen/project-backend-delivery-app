import React from 'react';

import FinalizeOrder from '../../components/customerCheckout.jsx/FinalizeOrder';
import DetailForDelivery from '../../components/customerCheckout.jsx/DetailForDelivery';

function CustomerCheckout() {
  return (
    <section>
      <FinalizeOrder />
      <DetailForDelivery />
    </section>
  );
}

export default CustomerCheckout;
