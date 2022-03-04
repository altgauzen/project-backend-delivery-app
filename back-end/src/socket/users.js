const User = require('../services/users.service');

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('getUsersAll', async () => {
    const users = await User.getUserAll();       
    io.emit('UsersAll', users);
  });
}); 
