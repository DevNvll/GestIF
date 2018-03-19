import {Router} from 'express'
import User from '../../models/Users'
import jwt from 'jsonwebtoken'
import bcrypt from 'bcrypt'

const router = Router()

router.get('/', (req, res) => {
  res.send('test')
})

router.post('/', (req, res) => {
  User.findOne({ email: req.body.email })
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
      console.log(err)
      res.send('Error creating user')
    })
})

router.post('/register', (req, res) => {
  const {name, email, password} = req.body
  bcrypt.hash(password, 10).then(hash => {
    const newUser = new User({name, email, password: hash})
    newUser.save().then(user => {
      console.log('added', user.name)
      res.send(user)
    })
  })
  
})

export default router