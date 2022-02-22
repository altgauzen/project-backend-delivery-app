'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
  
    await queryInterface.bulkInsert('Products', [
      {
        name: 'Antartica Pilsen 300ml',
        price: 2.50,
        url_image: `http://localhost/${__dirname}/public/antarctica_pilsen_300ml.jpg`,
      },
      {
        name: 'Heineken 600ml',
        price: 12.00,
        url_image: `http://localhost/${__dirname}/public/heineken_600ml.jpg`,
      },
      {
        name: 'Becks 600ml',
        price: 6.00,
        url_image: `http://localhost/${__dirname}/public/becks_600ml.jpg`,
      },
    ], {timestamps: false});
 
  },

  down: async (queryInterface, Sequelize) => {
    
    await queryInterface.bulkDelete('Products', null, {});
     
  }
};
