'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.changeColumn(
          'User',
          'phone',
          { 
            type: Sequelize.DataTypes.STRING,
            validate: {
              is: /^\+[0-9]{11}$/
            },
          },
          { transaction: t },
        ),
      ]);
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.changeColumn(
          'User',
          'phone',
          { 
            type: Sequelize.DataTypes.STRING,
            validate: {
              is: ["\+[0-9]{11}"]
            },
          },
          { transaction: t },
        ),
      ]);
    });
  }
};
