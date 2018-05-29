import express from 'express'
import next from 'next'
import mongoose from 'mongoose'
import bodyParser from 'body-parser'
import morgan from 'morgan'
import compression from 'compression'
import helmet from 'helmet'

import api from './server/api'

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
mongoose.connect(MONGO_URL, err => {
  if (!err) console.log('> Conectado ao MongoDB em', MONGO_URL)
  else console.log('> Erro ao conectar ao MongoDB em', MONGO_URL)
})

const server = express()

server.set('secret', process.env.SECRET)
server.use(bodyParser.urlencoded({ extended: false }))
server.use(morgan('dev'))
server.use(bodyParser.json())
server.use(helmet()) // adiciona headers de segurança às rotas
if (!dev) server.use(compression()) // adiciona compressão gzip a todos os requests

//registra rota padrão da API. Não mexer.
server.use('/api', api)

if (process.env.MODE === 'backend_only') {
  //Inicia o aplicativo em modo apenas backend. (sem parte gráfica)
  console.log(`> Starting in backend only mode`)

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
    //registra rota padrão do app. Não mexer.
    server.get('*', handler)

    server.listen(port, err => {
      if (err) throw err
      console.log(`> Ready on http://localhost:${port}`)
    })
  })
}
