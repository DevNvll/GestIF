export default function(role) {
  return (req, res, next) => {
    if (req.user.roles.includes(role)) {
      next()
    } else {
      res.status(401).json({
        error: true,
        code: 'NO_ROLE',
        result: {}
      })
    }
  }
}
