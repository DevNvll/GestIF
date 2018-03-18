const routes = module.exports = require('next-routes')()

routes
.add('home', '/*', 'home')
.add('reports', '/reports', 'reports')
.add('estoque', '/estoque', 'estoque')
.add('login', '/login', 'login')
