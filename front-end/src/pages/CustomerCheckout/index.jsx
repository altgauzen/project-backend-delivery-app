import React from 'react';

import FinalizeOrder from '../../components/customerCheckout/FinalizeOrder';
import DetailForDelivery from '../../components/customerCheckout/DetailForDelivery';
// import Header from '../../components/Header/Navbar';
// import context from '../../context/context';

function CustomerCheckout() {
  return (
    <section>
      {/* <Header  user={ user }/> */}
      <FinalizeOrder />
      <DetailForDelivery />
    </section>
  );
}

export default CustomerCheckout;
