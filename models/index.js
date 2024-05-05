import Sequelize from 'sequelize';
import process from 'process';
import config from '../config/config.js';

const env = process.env.NODE_ENV || 'development';

const db = new Sequelize(
  config[env].database,
  config[env].username,
  config[env].password,
  config[env],
);

export default db;
