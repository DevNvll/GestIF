import express, { Router } from 'express'
import next from 'next'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'

import routes from './client/routes'
import api from './api'

import dotenv from 'dotenv'
dotenv.config()

mongoose.Promise = global.Promise
mongoose.connect(process.env.MONGO_URL, err =>
  console.log('> Conectado ao MongoDB')
)

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'

const app = next({ dev, dir: './src/client' })
const handler = app.getRequestHandler()

app.prepare().then(() => {
  const server = express()

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
