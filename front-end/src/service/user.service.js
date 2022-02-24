import axios from 'axios';

class UserService {
  async login(email, password) {
    console.log(email, password);
    axios.post('http://localhost:3001/login', {
      email,
      password,
    })
      .then((token) => token)
      .catch((err) => err);
  }
}

export default UserService;
