import axios from 'axios';

class GetSales {
  async getSalesAll(token) {
    const response = await axios({
      method: 'get',
      url: 'http://localhost:3001/customer/orders',
      data: {},
      headers: { authorization: token },
    });
    return response;
  }
}

export default GetSales;
