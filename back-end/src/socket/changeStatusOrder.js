const updateSaleStatusOrder = require('../services/sales.service');

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('updateStatus', async (sale_id, status) => {
    await updateSaleStatusOrder({ sale_id, status });
    io.emit('updated', { sale_id, status });
  });
}); 
