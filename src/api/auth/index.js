import {Router} from 'express'
import User from '../../models/Users'
import jwt from 'jsonwebtoken'

const router = Router()

router.get('/', (req, res) => {
  res.send('test')
})

router.post('/', (req, res) => {
  User.findOne({ email: req.body.email })
    .then(result => {
      if (req.body.password === result.password) {
        jwt.sign(
          { id: result._id },
          req.app.get('secret'),
          (err, token) => {
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
          }
        )
      } else {
        res.json({
          code: 'LOGIN_FAIL',
          result: {}
        })
      }
    })
    .catch(err => {
      console.log(err)
      res.send('Error creating user')
    })
})

export default router