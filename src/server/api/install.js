import { Router } from 'express'
import User from '../models/Users'
import bcrypt from 'bcrypt'
const router = Router()

router.use((req, res, next) => {
  User.count({}).then(count => {
    if (count !== 0) {
      res.send({
        code: 'ALREADY_INSTALLED',
        result: {}
      })
    } else {
      next()
    }
  })
})

router.post('/', (req, res) => {
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
      const newUser = new User({ name, email, roles: ['csti'], password: hash })
      User.findOne({ email }).then(result => {
        if (!result) {
          newUser.save().then(user => {
            Log(
              'USUARIO',
              user.name + ' registrado.',
              req.user.name,
              'rgb(0, 192, 239)'
            )
            res.send({
              id: user._id,
              name: user.name,
              email: user.email,
              roles: user.roles,
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
