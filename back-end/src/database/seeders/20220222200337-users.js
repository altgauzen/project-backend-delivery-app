"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          name: "Dona Tereza",
          email: "tereza@gmail.com",
          password: "e10adc3949ba59abbe56e057f20f883e",
          role: "administrator",
        },
        {
          name: "Lewis Hamilton",
          email: "hamilton@gmail.com",
          password: "e10adc3949ba59abbe56e057f20f883e",
          role: "customer",
        },
        {
          name: "Michael Schumacher",
          email: "MichaelSchumacher@gmail.com",
          password: "e10adc3949ba59abbe56e057f20f883e",
          role: "customer",
        },
        {
          name: "José da Cana",
          email: "canaBrava@gmail.com",
          password: "e10adc3949ba59abbe56e057f20f883e",
          role: "seller",
        },
      ],
      { timestamps: false }
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
