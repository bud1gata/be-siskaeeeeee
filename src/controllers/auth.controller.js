const {isEmpty} = require('lodash')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcrypt')
const saltRounds = 10
const { TOKEN_SECRET, TOKEN_ALGORITMA } = process.env

//model
const authModel = require('../models/auth.model') 

module.exports = {

  signIn: async (req, res) => {

    //request form
    const { email, password } = req.body
    
      //check if email found / data
      const isFoundEmail = await authModel.getAuthCondition({ email })
      if (!isEmpty(isFoundEmail)) { // if email found compare password 
        const isFoundPassword = isFoundEmail[0].password // get password

        // compare password
        await bcrypt.compare(password, isFoundPassword, function (error, isMatch) {
          if (error) {
            const data = {
              success: false,
              message: 'Failed match password'
            }
            res.status(400).send(data)
          } else if (!isMatch) {
            const data = {
              success: false,
              message: 'Password not match'
            }
            res.status(401).send(data)
          } else {

            //show data and sign token
            const payload = {
              id: isFoundEmail[0].id,
              email: isFoundEmail[0].email,
              role: isFoundEmail[0].nameRole,
            }
            const token = jwt.sign(payload, TOKEN_SECRET,
              {
                expiresIn: '24h',
                algorithm: TOKEN_ALGORITMA
              })
            const data = {
              success: true,
              message: 'Password Match',
              userData: {
                id: isFoundEmail[0].id,
                email: isFoundEmail[0].email,
                role: isFoundEmail[0].nameRole
              },
              token: token
            }
            res.status(200).header('Authorization', token).send(data)
          }
        })
      } else {
        const data = {
          success: false,
          message: 'Not Found Email'
        }
        res.status(400).send(data)
      }
  },

  signUp: async (req, res) => {
    const { email, password } = req.body
    const passwordHash = await bcrypt.hash(password, saltRounds)
    const isExist = await authModel.getAuthCondition({ email })
    if (isEmpty(isExist)) {
      const registerData = {
        email,
        password: passwordHash
      }
      const results = await authModel.signUp(registerData)
      if (results) {
        const data = {
          success: true,
          message: 'Register success',
          data: registerData.email
        }
        res.status(201).send(data)
      } else {
        const data = {
          success: false,
          message: 'Failed register'
        }
        res.status(400).send(data)
      }
    } else {
      const data = {
        success: false,
        message: 'Email is exist, please use another email'
      }
      res.status(400).send(data)
    }
  },

}