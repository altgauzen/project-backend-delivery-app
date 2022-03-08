import axios from 'axios';

class GetAllSales {
  async getSalesAll(token) {
    const response = await axios({
      method: 'get',
      url: 'http://localhost:3001/getSalesAll',
      data: {},
      headers: { authorization: token },
    });
    return response;
  }
}

export default GetAllSales;
