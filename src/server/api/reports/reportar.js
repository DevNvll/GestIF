import { Router } from 'express'
import Report from '../../models/Reports'
import Log from '../../utils/LogService'

const router = Router()

router.post('/', (req, res) => {
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
        Log('REPORT', 'Report feito.', null, '#ffb641')
        res.send(report)
      })
      .catch(err => {
        res.send({ status: 'ERROR' })
      })
  }
})

export default router
