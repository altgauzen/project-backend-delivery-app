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
