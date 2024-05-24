import { DataTypes, Model } from 'sequelize';
import db from './index.js';
import user from './user.js';

class News extends Model {}

const model = News.init(
  {
    id: {
      type: DataTypes.BIGINT,
      autoIncrement: true,
      primaryKey: true,
    },
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: user,
        key: 'id',
      },
    },
    title: {
      type: DataTypes.TEXT,
      validate: {
        notEmpty: true,
      },
    },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
    },
    imageSrc: DataTypes.TEXT,
    text: DataTypes.TEXT,
  },
  {
    sequelize: db,
    tableName: 'News',
    timestamps: true,
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
  },
);

model.belongsTo(user, { foreignKey: 'userId' });

export default model;
