import mongoose from 'mongoose'
const Schema = mongoose.Schema

const reportsSchema = new Schema({
  maquina: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  status: {
    type: Number,
    default: 0
  },
  nome: {
    type: String,
    default: 'Anônimo'
  },
  lab: {
    type: Number,
    required: true
  },
  resolvidoPor: {
    type: String
  },
  data: { type: Date, default: Date.now },
  dataResolvido: { type: Date }
})

export default mongoose.model('Reports', reportsSchema)
