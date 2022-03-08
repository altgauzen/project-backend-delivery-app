const updateSaleStatusOrder = require('../services/sales.service');

module.exports = (io) => io.on('connection', (socket) => {
  socket.on('updateStatus', async (saleId, status) => {
    await updateSaleStatusOrder({ saleId, status });
    io.emit('updated', { saleId, status });
  });
}); 
