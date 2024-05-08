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
    firstName: {
      type: DataTypes.TEXT,
      validate: {
        len: [1, 255],
        notEmpty: true,
        isAlpha: true,
      },
    },
    lastName: {
      type: DataTypes.TEXT,
      validate: {
        len: [1, 255],
        notEmpty: true,
        isAlpha: true,
      },
    },
    middleName: {
      type: DataTypes.TEXT,
      validate: {
        len: [1, 255],
        isAlpha: true,
      },
    },
    birthday: DataTypes.DATEONLY,
    artistName: DataTypes.TEXT,
    email: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1, 255],
        isEmail: true,
      },
    },
    phone: {
      type: DataTypes.STRING,
      validate: {
        is: ['+[0-9]{11}'],
      },
    },
    hashPassword: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    vkLink: {
      type: DataTypes.STRING,
      validate: {
        isUrl: true,
      },
    },
  },
  {
    sequelize: db,
    tableName: 'User',
  },
);

export default model;
