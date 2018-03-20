import { Router } from 'express'
import withToken from './withToken'

import auth from './auth'
import users from './users'
import reports from './reports'

const router = Router()

router.use('/auth', auth)
router.use('/users', withToken, users)
router.use('/reports', withToken, reports)

export default router
