'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.createTable('User', {
      id: {
        type: Sequelize.DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
      },
      firstName: Sequelize.DataTypes.TEXT,
      secondName: Sequelize.DataTypes.TEXT,
      middleName: Sequelize.DataTypes.TEXT,
      birthday: Sequelize.DataTypes.DATEONLY,
      artistName: Sequelize.DataTypes.TEXT,
      email: Sequelize.DataTypes.TEXT,
      phone: Sequelize.DataTypes.STRING,
      hashPassword: Sequelize.DataTypes.STRING,
      vkLink: Sequelize.DataTypes.STRING,
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('User');
  }
};