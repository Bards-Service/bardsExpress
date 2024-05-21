'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.addColumn(
          'News',
          'isDeleted',
          {
            type: Sequelize.BOOLEAN,
            defaultValue: false,
            allowNull: false,
          },
          { transaction: t },
        ),
      ]);
    });
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.removeColumn('News', 'isDeleted', { transaction: t }),
      ]);
    });
  }
};
