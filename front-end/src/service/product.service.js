import axios from "axios";

class GetProducts {
  async getProductsAll(token) {
    const response = await axios({
      method: 'get',
      url: 'http://localhost:3001/getProductsAll',
      data: {},
      headers: { authorization: token },
    });
    return response;
  }
}

export default GetProducts;
