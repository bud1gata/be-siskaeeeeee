require('dotenv').config()
const PORT = process.env.PORT || 3100
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

// const auth = require('./src/routes/auth')

// app.use('/auth', auth)

app.get('*', (request, response) => {
  response.status(404).send('Page not found')
})

app.listen(PORT, () => {
  console.log('Server running')
})

module.exports = app