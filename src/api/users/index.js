import { Router } from 'express'
import bcrypt from 'bcrypt'
import User from '../../models/Users'

const router = Router()

//lista todos os usuários da rota 'api/users/'
router.get('/', (req, res) => {
  User.find({}).then(users => {
    res.send(users)
  })
})

//Atualiza os dados de um usuário na rota 'api/users/'
router.patch('/', (req, res) => {
  User.update(
    { _id: req.decoded.id },
    {
      $set: req.body
    }
  ).then(user => {
    res.send(user)
  })
})

//Lista os dados do usuário relativo ao token. Rota 'api/users/me'
router.get('/me', (req, res) => {
  User.findOne({ _id: req.decoded.id }).then(user => {
    res.send(user)
  })
})

//Atualiza os dados do usuário relativo ao token. Rota 'api/users/me'
router.patch('/me', (req, res) => {
  console.log(req.body, req.decoded)
  if (req.body.password) {
    bcrypt.hash(req.body.password, 10).then(hash => {
      const { password, ...objSemSenha } = req.body
      User.update(
        { _id: req.decoded.id },
        {
          $set: { ...objSemSenha, password: hash }
        }
      ).then(user => {
        res.send(user)
      })
    })
  } else {
    User.update(
      { _id: req.decoded.id },
      {
        $set: req.body
      }
    ).then(user => {
      res.send(user)
    })
  }
})

//Cria um usuário.  Rota 'api/users/'
router.post('/', (req, res) => {
  const { name, email, password, roles } = req.body
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
      const newUser = new User({ name, email, roles, password: hash })
      User.findOne({ email }).then(result => {
        if (!result) {
          newUser.save().then(user => {
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

router.delete('/', (req, res) => {
  const { id, name } = req.body
  User.deleteOne({ _id: id })
    .then(result => {
      res.send(result)
    })
    .catch(err => {
      res.send(err)
    })
})

export default router
