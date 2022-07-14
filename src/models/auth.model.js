const db = require('../utils/connection')

module.exports = {
  getAuthCondition: (data) => {
    const sql = `SELECT u.id, 
                            u.email, 
                            u.password, 
                            l.name as nameRole
                     FROM users u
                     JOIN level as l ON l.id = u.level_id WHERE u.email = ?`
    return new Promise((resolve, reject) => {
      db.query(sql, data.email, (error, results) => {
        if (error) {
          console.log(error)
          // reject(Error(error))
        }
        resolve(results)
      })
    })
  },

  signUp: (data) => {
    const sql = 'INSERT INTO users SET ?'
    return new Promise((resolve, reject) => {
      db.query(sql, data, (error, results) => {
        if (error) {
          reject(Error(error))
        }
        resolve(true)
      })
    })
  }
}