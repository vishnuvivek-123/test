import Sequelize from 'sequelize';

/** @type Sequelize  */
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USERNAME, process.env.DB_PASSWORD, {
  host: process.env.DB_HOST,
  port: process.env.DB_PORT,
  dialect: process.env.DB_DIALECT,
  logging: process.env.DB_LOGGING === 'true',
});

export default sequelize;
