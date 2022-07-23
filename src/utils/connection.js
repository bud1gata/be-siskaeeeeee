const mysql = require('mysql');
const config = require('../config/env.config');

const connection = mysql.createConnection({
  host: config.db.host,
  user: config.db.user,
  password: config.db.password,
  database: config.db.name,
  port: config.db.port,
  insecureAuth : true
})
connection.connect(function (error) {
  if (error) {
    return connection.end()
    // console.log(error)
  }
  console.log('DB is connect')
})

module.exports = connection