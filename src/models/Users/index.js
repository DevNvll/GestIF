import mongoose from 'mongoose'
const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true,
    select: false
  },
  joined: { type: Date, default: Date.now },
  role: { type: Number, default: 1 },
})

export default mongoose.model('User', userSchema)