import jwt from 'jsonwebtoken'

export default function withToken(req, res, next) {
  let token = req.body.token || req.query.token || req.headers['authorization']
  if (token) {
    jwt.verify(token, req.app.get('secret'), (err, decoded) => {
      if (err) {
        return res.json({
          success: false,
          message: 'Failed to authenticate token.'
        })
      } else {
        req.decoded = decoded
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
