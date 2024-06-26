const config = require('../src/config/env.config')
const express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const app = express()
const helmet = require('helmet')

app.use(bodyparser.json())
app.use(bodyparser.urlencoded({ extended: true }))
app.use(cors())
app.use(helmet()) //firewall

app.get('/', (request, response) => {
  const data = {
    name: 'Welcome to Siskaeeeee',
    version: '1.0.0'
  }
  response.send(data)
})

// route
const auth = require('./routes/auth.route')
const sdm = require('./routes/sdm.route')

app.use('/auth', auth)
app.use('/sdm', sdm)

// page notfound
app.get('*', (request, response) => {
  response.status(404).send('Page not found')
})

module.exports = app