const User = require('../services/users.services');

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('getUsersAll', async () => {
    const users = await User.getUserAll();       
    io.emit('UsersAll', users);
  });
}); 
