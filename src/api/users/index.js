import { Router } from 'express'
import bcrypt from 'bcrypt'
import User from '../../models/Users'

const router = Router()

router.get('/', (req, res) => {
  User.find({}).then(users => {
    res.send(users)
  })
})

router.post('/create', (req, res) => {
  const { name, email, password } = req.body
  if (!name) {
    res.status(400).json({
      code: 'MISSING_FIELD_NAME',
      result: {}
    })
  } else if (!email) {
    res.status(400).json({
      code: 'MISSING_FIELD_EMAIL',
      result: {}
    })
  } else if (!password) {
    res.status(400).json({
      code: 'MISSING_FIELD_PASSWORD',
      result: {}
    })
  } else {
    bcrypt.hash(password, 10).then(hash => {
      const newUser = new User({ name, email, password: hash })
      User.findOne({ email }).then(result => {
        if (!result) {
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
