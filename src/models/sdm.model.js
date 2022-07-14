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

  getSdmConditionId: (data) => {
    const sql = `SELECT id 
                     FROM sdm WHERE id = ?`
    return new Promise((resolve, reject) => {
      db.query(sql, data.id, (error, results) => {
        if (error) {
          reject(Error(error))
        }
        resolve(results)
      })
    })
  },

  getAllSdm: () => {
    const sql = `SELECT id, 
                        no_kta,
                        fullname
                     FROM sdm ORDER BY no_kta ASC`
    return new Promise((resolve, reject) => {
      db.query(sql,  (error, results) => {
        if (error) {
          reject(Error(error))
        }
        resolve(results)
      })
    })
  },

  updateSdm: (data) => {
    const sql = `UPDATE sdm SET ? WHERE ?`
    return new Promise((resolve, reject) => {
      db.query(sql, data,  (error, results) => {
        if (error) {
          reject(Error(error))
        }
        resolve(results)
      })
    })
  },

  deleteSdm: (data) => {
    const sql = `DELETE FROM sdm WHERE id=?`
    return new Promise((resolve, reject) => {
      db.query(sql, data.id,  (error, results) => {
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