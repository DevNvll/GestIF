import jwt from 'jsonwebtoken'
import Users from '../../models/Users'

export default async function withToken(req, res, next) {
  let token = req.body.token || req.query.token || req.headers['authorization']
  if (token) {
    jwt.verify(token, req.app.get('secret'), async (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Failed to authenticate token.'
        })
      } else {
        const user = await Users.findOne({ _id: decoded.id })
        req.user = { id: decoded.id, roles: user.roles }
        next()
      }
    })
  } else {
    return res.status(403).send({
      success: false,
      message: 'No token provided.'
    })
  }
}
