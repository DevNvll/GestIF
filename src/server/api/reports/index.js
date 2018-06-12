import { Router } from 'express'
import bcrypt from 'bcrypt'
import moment from 'moment'
import Report from '../../models/Reports'
import hasRole from '../middlewares/hasRole'
const router = Router()

/* 
Validação do módulo de Reports:
Só retorna algum resultado das rotas se tiver a role csti no perfil do usuário.
*/
router.use(hasRole('csti'))

router.get('/', (req, res) => {
  Report.find({}).then(reports => {
    res.send(reports)
  })
})

router.get('/stats', (req, res) => {
  Report.find({}).then(reports => {
    const UmaSemana = new Date().getTime() - 7 * 24 * 60 * 60 * 1000
    const numPendentes = reports.filter(r => r.status === 0).length
    const numTotal = reports.length
    const numResolvidoPor = reports.filter(r => r.resolvidoPor === req.user.id)
      .length
    const maisDeUmaSemana = reports.filter(
      r => r.status === 0 && new Date(r.data).getTime() < UmaSemana
    ).length
    res.send({
      numPendentes,
      numTotal,
      numResolvidoPor,
      maisDeUmaSemana
    })
  })
})

router.get('/count', (req, res) => {
  Report.aggregate([
    {
      $match: {
        data: {
          $gte: moment()
            .subtract(5, 'months')
            .toDate(),
          $lt: moment().toDate()
        }
      }
    },
    {
      $group: {
        _id: {
          month: { $month: '$data' }
        },
        count: {
          $sum: 1
        }
      }
    }
  ]).then(reports => {
    const months = new Array(
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    )
    const result = []
    const thisMonth = new Date().getMonth() + 1
    for (let x = thisMonth - 5; x <= thisMonth; x++) {
      let month = reports.find(r => r._id.month === x)
      if (month)
        result.push({
          month: months[x],
          count: month.count
        })
      else
        result.push({
          month: months[x],
          count: 0
        })
    }
    res.send(result)
  })
})

router.get('/count/me', (req, res) => {
  Report.aggregate([
    {
      $match: {
        resolvidoPor: req.user.id,
        data: {
          $gte: moment()
            .subtract(5, 'months')
            .toDate(),
          $lt: moment().toDate()
        }
      }
    },
    {
      $group: {
        _id: {
          month: { $month: '$data' }
        },
        count: {
          $sum: 1
        }
      }
    }
  ]).then(reports => {
    const months = new Array(
      'Janeiro',
      'Fevereiro',
      'Março',
      'Abril',
      'Maio',
      'Junho',
      'Julho',
      'Agosto',
      'Setembro',
      'Outubro',
      'Novembro',
      'Dezembro'
    )
    const result = []
    const thisMonth = new Date().getMonth() + 1
    for (let x = thisMonth - 5; x <= thisMonth; x++) {
      let month = reports.find(r => r._id.month === x)
      if (month)
        result.push({
          month: months[x],
          count: month.count
        })
      else
        result.push({
          month: months[x],
          count: 0
        })
    }
    res.send(result)
  })
})

router.post('/create', (req, res) => {
  const { maquina, descricao, nome, lab } = req.body
  if (!maquina) {
    res.status(400).json({
      code: 'MISSING_FIELD_MAQUINA',
      result: {}
    })
  } else if (!descricao) {
    res.status(400).json({
      code: 'MISSING_FIELD_EMAIL',
      result: {}
    })
  } else if (!nome) {
    res.status(400).json({
      code: 'MISSING_FIELD_PASSWORD',
      result: {}
    })
  } else if (!lab) {
    res.status(400).json({
      code: 'MISSING_FIELD_LAB',
      result: {}
    })
  } else {
    const newReport = new Report({
      maquina,
      descricao,
      nome,
      lab
    })
    newReport
      .save()
      .then(report => {
        res.send(report)
      })
      .catch(err => {
        res.send({ status: 'ERROR' })
      })
  }
})

router.post('/resolve', (req, res) => {
  const { id } = req.body
  if (!id) {
    res.status(400).json({
      code: 'MISSING_FIELD_ID',
      result: {}
    })
  } else {
    Report.update(
      { _id: id },
      {
        $set: {
          status: 1,
          dataResolvido: Date.now(),
          resolvidoPor: req.user.id
        }
      }
    )
      .then(report => {
        res.json({ status: 'SUCCESS', result: report })
      })
      .catch(err => {
        res.send({ status: 'ERROR' })
      })
  }
})

export default router
