import { Router } from 'express'
import Logs from '../models/Logs'
import hasRole from './middlewares/hasRole'
const router = Router()

/* 
Validação do módulo de Logs:
Só retorna algum resultado das rotas se tiver a role csti no perfil do usuário.
*/
router.use(hasRole('csti'))

router.get('/', (req, res) => {
  if (req.query.limit) {
    Logs.find({})
      .sort({ data: -1 })
      .limit(parseInt(req.query.limit))
      .then(logs => {
        res.send(logs)
      })
      .catch(err => {
        console.log(err)
        res.send(err)
      })
  } else {
    Logs.find({})
      .sort({ data: -1 })
      .then(logs => {
        res.send(logs)
      })
      .catch(err => {
        console.log(err)
        res.send(err)
      })
  }
})

export default router
