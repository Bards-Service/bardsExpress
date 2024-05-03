import { Sequelize, Model, DataTypes } from 'sequelize';
const sequelize = new Sequelize('postgres:');

const User = sequelize.define('user', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  firstName: DataTypes.TEXT,
  secondName: DataTypes.TEXT,
  middleName: DataTypes.TEXT,
  birthday: DataTypes.DATEONLY,
  artistName: DataTypes.TEXT,
  email: DataTypes.TEXT,
  phone: DataTypes.STRING,
  hashPassword: DataTypes.STRING,
  vkLink: DataTypes.STRING,
});
