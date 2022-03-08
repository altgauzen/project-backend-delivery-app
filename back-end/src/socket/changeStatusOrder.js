const updateSaleStatusOrder = require('../services/sales.service');

let sum = 0;

module.exports = (io) => io.on('connection', (socket) => {
  sum += 1;

  socket.on('updateStatus', async (saleId, status) => {
    await updateSaleStatusOrder({ saleId, status });
    io.emit('updated', { saleId, status });
  });
}); 
