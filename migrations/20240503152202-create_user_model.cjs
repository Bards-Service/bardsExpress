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
      firstName: { 
        type: Sequelize.DataTypes.TEXT,
        validate: {
          len: [1, 255],
          notEmpty: true,
          isAlpha: true,
        },
      },
      lastName: { 
        type: Sequelize.DataTypes.TEXT,
        validate: {
          len: [1, 255],
          notEmpty: true,
          isAlpha: true,
        },
      },
      middleName: { 
        type: Sequelize.DataTypes.TEXT,
        validate: {
          len: [1, 255],
          isAlpha: true,
        },
      },
      birthday: Sequelize.DataTypes.DATEONLY,
      artistName: Sequelize.DataTypes.TEXT,
      email: { 
        type: Sequelize.DataTypes.TEXT,
        allowNull: false,
        validate: {
          len: [1, 255],
          isEmail: true,
        },
      },
      phone: { 
        type: Sequelize.DataTypes.STRING,
        validate: {
          is: ["\+[0-9]{11}"]
        },
      },
      hashPassword: { 
        type: Sequelize.DataTypes.STRING,
        allowNull: false,
      },
      vkLink: { 
        type: Sequelize.DataTypes.STRING,
        validate: {
          isUrl: true,
        },
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    })
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.dropTable('User');
  }
};
