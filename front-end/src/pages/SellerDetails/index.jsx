import React, { useEffect, useState, useCallback } from 'react';
import { useParams } from 'react-router-dom';
import SellerOrdersDetails from '../../components/SellerOrderDetails/SellerOrdersDetails';
// import OrderProductsTable from '../../components/Orders/OrderProcuctsTable';
import SellerNavbar from '../../components/Header/SellerNavbar';
import SalesService from '../../service/sale.service';
import UserService from '../../service/user.service';
import SellerOrderProducts from '../../components/SellerOrderDetails/SellerOrderProducts';

// import contextValue from '../../context/context';
// import './ordersDetails.css';

function SellerDetails() {
  const { id: orderId } = useParams();

  const [orderDetails, setOrderDetails] = useState(null);
  const [seller, setSeller] = useState(null);
  const [isLoading, setLoading] = useState(true);
  const [productsById, setProductsById] = useState(null);

  const user = JSON.parse(localStorage.getItem('user'));

  const { token, role } = user;

  const getSeller = useCallback((idSeller) => {
    new UserService()
      .getUserById(token, idSeller)
      .then((res) => {
        if (res) setSeller(res.data);
        // setLoading(false);
      })
      .catch((err) => console.error(err));
  }, [token]);

  const getProductsById = (tokenUser, orderProductById) => {
    new SalesService()
      .getOrderProductsByIdService(tokenUser, orderProductById)
      .then((res) => {
        setProductsById(res.data.products);
        setLoading(false);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    new SalesService()
      .getSaleById(token, orderId)
      .then((res) => {
        if (res) {
          setOrderDetails(res.data);
          getSeller(res.data.order.sellerId);
          getProductsById(token, orderId);
        }
      })
      .catch((err) => console.error(err));
  }, [getSeller, orderId, token]);

  if (isLoading) {
    return <div className="App">Loading...</div>;
  }

  return (
    <section className="pageOrders">
      <SellerNavbar />
      <Card className="mt-5">
        <h1>Detalhes do Pedido</h1>
        <SellerOrdersDetails
          role={ role }
          orderData={ orderDetails }
          sellerData={ seller }
        />
        <SellerOrderProducts
          productsById={ productsById }
        />
        {/* <'OrderProductsTable /> */}
      </Card>
    </section>
  );
}

export default SellerDetails;
