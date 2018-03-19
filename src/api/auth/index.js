import {Router} from 'express'
import User from '../../models/Users'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'
import omit from 'lodash/omit'

const router = Router()

router.get('/', (req, res) => {
  res.send('test')
})

router.post('/', (req, res) => {
  User.findOne({ email: req.body.email }).select('+password')
    .then(result => {
      bcrypt.compare(req.body.password, result.password).then(passed => {
        if(passed) {
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
    })
    .catch(err => {
      res.json({
        code: 'LOGIN_FAIL',
        result: {}
      })
    })
})

router.post('/register', (req, res) => {
  const {name, email, password} = req.body
  if(!name) {
    res.status(400).json({
      code: 'MISSING_FIELD_NAME',
      result: {}
    })
  } else if(!email) {
    res.status(400).json({
      code: 'MISSING_FIELD_EMAIL',
      result: {}
    })
  } else if(!password) {
    res.status(400).json({
      code: 'MISSING_FIELD_PASSWORD',
      result: {}
    })
  } else {
    bcrypt.hash(password, 10).then(hash => {
      const newUser = new User({name, email, password: hash})
      User.findOne({email}).then(result => {
        if(!result) {
          newUser.save().then(user => {
            res.send({
              id: user._id,
              name: user.name,
              email: user.email,
              join_date: user.joined
            })
          })
        } else {
          res.status(400).json({
            code: 'EMAIL_IN_USE',
            result: {}
          })
        }
      })
      
    })
  }
})

export default router