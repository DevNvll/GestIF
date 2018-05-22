import { Router } from 'express'
import withToken from './withToken'

import auth from './auth'
import users from './users'
import reports from './reports'

const router = Router()

//Define rotas principais de autenticação, usuários e reports.
//Rotas com withToken(middleware) só poderão ser acessadas se autenticado.
router.use('/auth', auth)
router.use('/users', withToken, users)
router.use('/reports', withToken, reports)

export default router
