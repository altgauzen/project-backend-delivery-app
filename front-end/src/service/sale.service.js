import axios from 'axios';

class SalesService {

  async createSale(token, sale) {
    const response = await axios({
      method: 'post',
      url: 'http://localhost:3001/createSale',
      data: {sale},
      headers: { authorization: token },
    });
    return response;
  }

  async getSalesAll(token) {
    const response = await axios({
      method: 'get',
      url: 'http://localhost:3001/customer/orders',
      data: {},
      headers: { authorization: token },
    });
    return response;
  }

  async getSellerAll(token) {
    const response = await axios({
      method: 'get',
      url: 'http://localhost:3001/sellers',
      data: {},
      headers: { authorization: token },
    });
    return response;
  }

  async getSaleById(token, orderId) {
    const response = await axios({
      method: 'get',
      url: `http://localhost:3001/customer/orders/${orderId}`,
      data: {},
      headers: { authorization: token },
    });
    console.log('NO FRONT SALE SERVICE VEM SALEBYID?', response);
    return response;
  }
}

export default SalesService;
