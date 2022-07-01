const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const saltRounds = 10
const { TOKEN_SECRET, TOKEN_ALGORITMA } = process.env
// const authModel = require('../models/auth')

module.exports = {

  signIn: async (request, response) => {
    const { email, password } = request.body
    const isLoginLogs = await logsModel.getCheckLogin({ user_email: email })
    if (isLoginLogs.length > 0) {
      if (isLoginLogs[0].user_email === email) {
        const data = {
          success: false,
          message: 'user has logged in'
        }
        response.status(400).send(data)
      }
    } else {
      const isFound = await authModel.getAuthCondition({ email })
      if (isFound.length > 0) {
        const isFoundPassword = isFound[0].password
        await bcrypt.compare(password, isFoundPassword, function (error, isMatch) {
          if (error) {
            const data = {
              success: false,
              message: 'Failed match password'
            }
            response.status(400).send(data)
          } else if (!isMatch) {
            const data = {
              success: false,
              message: 'Password not match'
            }
            response.status(401).send(data)
          } else {
            const payload = {
              id: isFound[0].id,
              email: isFound[0].email,
              role: isFound[0].nameRole,
              nameUser: isFound[0].nameUser
            }
            const token = jwt.sign(payload, TOKEN_SECRET,
              {
                expiresIn: '24h',
                algorithm: TOKEN_ALGORITMA
              })
            const isLoginLogsData = {
              user_email: email,
              type: 0,
              description: 'login',
              status: 0
            }
            logsModel.createLogsLogin(isLoginLogsData)
            const data = {
              success: true,
              message: 'Password Match',
              userData: {
                id: isFound[0].id,
                email: isFound[0].email,
                role: isFound[0].nameRole
              },
              token: token
            }
            response.status(200).header('Authorization', token).send(data)
          }
        })
      } else {
        const data = {
          success: false,
          message: 'Not Found Email'
        }
        response.status(400).send(data)
      }
    }
  },

}