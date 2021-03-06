import { Router } from 'express'
import withToken from './middlewares/withToken'

import auth from './auth'
import users from './users'
import reports from './reports'
import reportar from './reports/reportar'
import logs from './logs'
import install from './install'

const router = Router()

//Define rotas principais de autenticação, usuários e reports.
//Rotas com withToken(middleware) só poderão ser acessadas se autenticado.
router.use('/auth', auth)
router.use('/users', withToken, users)
router.use('/reportar', reportar)
router.use('/reports', withToken, reports)
router.use('/logs', withToken, logs)
router.use('/install', install)

export default router
