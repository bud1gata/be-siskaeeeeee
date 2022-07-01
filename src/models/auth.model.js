const db = require('../utils/connection')

module.exports = {
  getAuthCondition: (data) => {
    const sql = `SELECT users.id, 
                            users.email, 
                            users.password, 
                            roles.name as nameRole, 
                            user_details.name as nameUser FROM users 
                     JOIN roles ON roles.id = users.role_id 
                LEFT JOIN user_details ON user_details.user_id = users.id WHERE ?`
    return new Promise((resolve, reject) => {
      db.query(sql, data, (error, results) => {
        if (error) {
          reject(Error(error))
        }
        resolve(results)
      })
    })
  },
}