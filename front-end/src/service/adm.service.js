import axios from 'axios';

class ADMService {
  async register(name, email, password, role) {
    const response = await axios({
      method: 'post',
      url: 'http://localhost:3001/management',
      data: {
        name,
        email,
        password,
        role,
      },
    });
    return response;
  }
}
export default ADMService;
