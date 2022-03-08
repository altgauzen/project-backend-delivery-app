import React from 'react';

import FinalizeOrder from '../../components/customerCheckout.jsx/FinalizeOrder';
import DetailForDelivery from '../../components/customerCheckout.jsx/DetailForDelivery';
import Header from '../../components/Header/Navbar'
import context from '../../context/context';

function CustomerCheckout() {
  const { user } = React.useContext(context);
  return (
    <section>
      {/* <Header  user={ user }/> */}
      <FinalizeOrder />
      <DetailForDelivery />
    </section>
  );
}

export default CustomerCheckout;
