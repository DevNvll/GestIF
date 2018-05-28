import express, { Router } from 'express'
import next from 'next'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import morgan from 'morgan'

import api from './api'

import dotenv from 'dotenv'
dotenv.config()

const port = parseInt(process.env.PORT, 10) || 3000
const dev = process.env.NODE_ENV !== 'production'
const MONGO_URL = dev
  ? process.env.MONGO_URL_DEV
    ? process.env.MONGO_URL_DEV
    : process.env.MONGO_URL
  : process.env.MONGO_URL

mongoose.Promise = global.Promise
mongoose.connect(MONGO_URL, err =>
  console.log('> Conectado ao MongoDB em', MONGO_URL)
)

if (process.env.MODE === 'backend_only') {
  //Inicia o aplicativo em modo apenas backend. (sem parte gráfica)
  console.log(`> Starting in backend only mode`)
  const server = express()

  server.set('secret', '#códigoSuperSecr3to@')
  server.use(bodyParser.urlencoded({ extended: false }))
  server.use(morgan('dev'))
  server.use(bodyParser.json())

  //registra rota padrão da API. Não mexer.
  server.use('/api', api)
  //registra rota padrão do app. Não mexer.
  server.listen(port, err => {
    if (err) throw err
    console.log(`> Ready on http://localhost:${port}`)
  })
} else {
  //Inicia o aplicativo normalmente.
  const app = next({ dev, dir: './src/client' })
  const handler = app.getRequestHandler()
  app.prepare().then(() => {
    const server = express()

    server.set('secret', '#códigoSuperSecr3to@')
    server.use(bodyParser.urlencoded({ extended: false }))
    server.use(morgan('tiny'))
    server.use(bodyParser.json())

    //registra rota padrão da API. Não mexer.
    server.use('/api', api)
    //registra rota padrão do app. Não mexer.
    server.get('*', handler)

    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
}
