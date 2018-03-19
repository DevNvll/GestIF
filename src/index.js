import express, { Router } from 'express'
import next from 'next'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import routes from './client/routes'
import api from './api'

import User from './models/Users'

mongoose.Promise = global.Promise
mongoose.connect(
  'mongodb://devnvll:99442047@ds119129.mlab.com:19129/gestif',
  err => console.log('> Conectado ao MongoDB')
)

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev, dir: './src/client' })
const handler = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

  // api.get('/users', (req, res) => {
  //   User.find()
  //     .select('-password')
  //     .then(users => {
  //       res.send(users)
  //     })
  // })

  server.set('secret', '#códigoSuperSecr3to@')
  server.use(bodyParser.urlencoded({ extended: false }))
  server.use(bodyParser.json())

  server.use('/api', api)

  server.get('*', handler)

  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
})
