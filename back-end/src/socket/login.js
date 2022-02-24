const User = require('../services/users.services');

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('login', async (email, password) => {
    const token = await User.userLogin(email, password);       
    io.emit('sucess', token);
  });
}); 
