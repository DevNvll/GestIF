import { Router } from 'express'
import bcrypt from 'bcrypt'
import Report from '../../models/Reports'

const router = Router()

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
    const numResolvidoPor = reports.filter(
      r => r.resolvidoPor === req.decoded.id
    ).length
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
          resolvidoPor: req.decoded.id
        }
      }
    )
      .then(report => {
        res.send({ status: 'SUCCESS' })
      })
      .catch(err => {
        res.send({ status: 'ERROR' })
      })
  }
})

export default router
