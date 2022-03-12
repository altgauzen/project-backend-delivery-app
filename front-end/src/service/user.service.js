import axios from 'axios';

class UserService {
  async login(email, password) {
    const response = await axios({
      method: 'post',
      url: 'http://localhost:3001/login',
      data: {
        email,
        password,
      },
    });
    return response;
  }

  async getUserById(token, id) {
    const response = await axios({
      method: 'get',
      url: `http://localhost:3001/user/${id}`,
      data: {},
      headers: { authorization: token },
    });
    console.log('NO FRONT SALE SERVICE VEM SALEBYID?', response);
    return response;
  }

  async register(name, email, password) {
    const response = await axios({
      method: 'post',
      url: 'http://localhost:3001/register',
      data: {
        name,
        email,
        password,

      },
    });
    return response;
  }
}

export default UserService;
