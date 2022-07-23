require('dotenv').config();

const env = process.env.NODE_ENV || 'dev';

const dev = {
    app: {
        host: process.env.DEV_APP_HOST,
        port: Number(process.env.DEV_APP_PORT),
        jwtScreet: process.env.DEV_APP_JWT,
    },
    db: {
        host: process.env.DEV_APP_DB_HOST,
        port: Number(process.env.DEV_APP_DB_PORT),
        user: process.env.DEV_APP_DB_USER,
        password: process.env.DEV_APP_DB_PASSWORD,
        name: process.env.DEV_APP_DB_NAME
    }
}

const prod = {
    app: {
        host: process.env.PROD_APP_HOST,
        port: Number(process.env.PROD_APP_PORT),
        jwtScreet: process.env.PROD_APP_JWT,
    },
    db: {
        host: process.env.PROD_APP_DB_HOST,
        port: Number(process.env.PROD_APP_DB_PORT),
        user: process.env.PROD_APP_DB_USER,
        password: process.env.PROD_APP_DB_PASSWORD,
        name: process.env.DEV_APP_DB_NAME
    }
}

const config = {
    dev,
    prod
  };
  
  module.exports = config[env];