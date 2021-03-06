require('dotenv').config();

module.exports = {
  development: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true,
    },
    seederStorage: 'json',
    seederStoragePath: 'sequelizeData.json',
    seederStorageTableName: 'sequelize_data'
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: 3306,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true,
    },
    seederStorage: 'json',
    seederStoragePath: 'sequelizeData.json',
    seederStorageTableName: 'sequelize_data'
  },
  production: {
    username: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: process.env.PROD_DB_PORT,
    dialect: 'mysql',
    dialectOptions: {
      bigNumberStrings: true,
    },
    seederStorage: 'json',
    seederStoragePath: 'sequelizeData.json',
    seederStorageTableName: 'sequelize_data'
  },
};
