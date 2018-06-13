import mongoose from 'mongoose'
const Schema = mongoose.Schema

const logsSchema = new Schema({
  type: {
    type: String,
    required: true
  },
  descricao: {
    type: String,
    required: true
  },
  autor: {
    type: String
  },
  color: {
    type: String
  },
  data: { type: Date, default: Date.now }
})

export default mongoose.model('Logs', logsSchema)
