import React, { useContext } from 'react';
import Navbar from '../../components/Header/Navbar';
import FinalizeOrder from '../../components/customerCheckout/FinalizeOrder';
import DetailForDelivery from '../../components/customerCheckout/DetailForDelivery';


function CustomerCheckout() {
  return (
    <section>
      <Navbar />
      <FinalizeOrder />
      <DetailForDelivery />
    </section>
  );
}

export default CustomerCheckout;
