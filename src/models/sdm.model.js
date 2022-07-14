const db = require('../utils/connection')

module.exports = {
  getAuthCondition: (data) => {
    const sql = `SELECT id, 
                        no_kta
                     FROM sdm WHERE no_kta = ?`
    return new Promise((resolve, reject) => {
      db.query(sql, data.no_kta, (error, results) => {
        if (error) {
          reject(Error(error))
        }
        resolve(results)
      })
    })
  },

 createSdm: (data) => {
    const sql = 'INSERT INTO sdm SET ?'
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