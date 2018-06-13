import { Router } from 'express'
import User from '../../models/Users'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import Log from '../../utils/LogService'

const router = Router()

router.post('/', (req, res) => {
  User.findOne({ email: req.body.email })
    .select('+password')
    .then(result => {
      bcrypt.compare(req.body.password, result.password).then(passed => {
        if (passed) {
          jwt.sign({ id: result._id }, req.app.get('secret'), (err, token) => {
            Log('LOGIN', result.name + ' logou.', result.name, '#1bff80')
            res.status(200).json({
              code: 'LOGIN_SUCCESS',
              result: {
                profile: {
                  email: result.email,
                  name: result.name,
                  join_date: result.joined
                },
                access_token: token
              }
            })
          })
        } else {
          res.json({
            code: 'LOGIN_FAIL',
            result: {}
          })
        }
      })
    })
    .catch(err => {
      res.json({
        code: 'LOGIN_FAIL',
        result: {}
      })
    })
})

export default router
