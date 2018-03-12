const routes = module.exports = require('next-routes')()

routes
.add('home', '/*', 'home')
.add('reports', '/reports', 'reports')
.add('login', '/login', 'login')
