'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.changeColumn(
          'User',
          'firstName',
          { 
            type: Sequelize.DataTypes.TEXT,
            validate: {
              len: [1, 255],
              notEmpty: true,
              isAlpha: true,
            },
          },
          { transaction: t },
        ),
        queryInterface.changeColumn(
          'User',
          'secondName',
          { 
            type: Sequelize.DataTypes.TEXT,
            validate: {
              len: [1, 255],
              notEmpty: true,
              isAlpha: true,
            },
          },
          { transaction: t },
        ),
        queryInterface.renameColumn(
          'User',
          'secondName',
          'lastName',
          { transaction: t },
        ),
        queryInterface.changeColumn(
          'User',
          'middleName',
          { 
            type: Sequelize.DataTypes.TEXT,
            validate: {
              len: [1, 255],
              isAlpha: true,
            },
          },
          { transaction: t },
        ),
        queryInterface.changeColumn(
          'User',
          'email',
          { 
            type: Sequelize.DataTypes.TEXT,
            allowNull: false,
            validate: {
              len: [1, 255],
              isEmail: true,
            },
          },
          { transaction: t },
        ),
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
        queryInterface.changeColumn(
          'User',
          'hashPassword',
          { 
            type: Sequelize.DataTypes.STRING,
            allowNull: false,
          },
          { transaction: t },
        ),
        queryInterface.changeColumn(
          'User',
          'vkLink',
          { 
            type: Sequelize.DataTypes.STRING,
            validate: {
              isUrl: true,
            },
          },
          { transaction: t },
        ),
        queryInterface.addColumn(
          'User',
          'createdAt',
          {
            allowNull: false,
            type: Sequelize.DATE,
          },
          { transaction: t },
        ),
        queryInterface.addColumn(
          'User',
          'updatedAt',
          {
            allowNull: false,
            type: Sequelize.DATE,
          },
          { transaction: t },
        ),
      ]);
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.sequelize.transaction(t => {
      return Promise.all([
        queryInterface.changeColumn('User', 'firstName', { type: Sequelize.DataTypes.TEXT }, { transaction: t }),
        queryInterface.changeColumn('User', 'lastName', { type: Sequelize.DataTypes.TEXT }, { transaction: t }),
        queryInterface.renameColumn('User', 'lastName', 'secondName', { transaction: t }),
        queryInterface.changeColumn('User', 'middleName', { type: Sequelize.DataTypes.TEXT }, { transaction: t }),
        queryInterface.changeColumn('User', 'email', { type: Sequelize.DataTypes.TEXT }, { transaction: t }),
        queryInterface.changeColumn('User', 'phone', { type: Sequelize.DataTypes.STRING }, { transaction: t }),
        queryInterface.changeColumn('User', 'hashPassword', { type: Sequelize.DataTypes.STRING }, { transaction: t }),
        queryInterface.changeColumn('User', 'vkLink', { type: Sequelize.DataTypes.STRING }, { transaction: t }),
        queryInterface.removeColumn('User', 'createdAt', { transaction: t }),
        queryInterface.removeColumn('User', 'updatedAt', { transaction: t }),
      ]);
    });
  },
};
