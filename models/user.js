import { DataTypes, Model } from 'sequelize';
import db from './index.js';

class User extends Model {}

const model = User.init(
  {
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
  },
  {
    sequelize: db,
    tableName: 'User',
  },
);

export default model;
