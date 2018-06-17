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
  roles: [String],
  password: {
    type: String,
    required: true,
    select: false
  },
  joined: { type: Date, default: Date.now }
})

export default mongoose.model('User', userSchema)
