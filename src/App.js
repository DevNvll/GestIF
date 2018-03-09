import React, { Component } from 'react'
import Header from './components/Header'
import SideBar from './components/SideBar'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Content from './components/Content'
import Reports from './pages/reports'
import Config from './pages/config'

import './App.css'

const Menu = [
  {
    text: 'Home',
    href: '/',
    icon: 'fa fa-bars'
  },
  {
    text: 'Reports',
    href: '/reports',
    icon: 'fa fa-steam'
  },
  {
    text: 'Configurações',
    icon: 'fa fa-gears',
    submenu: [
      {
        text: 'Config 1',
        href: '/config',
        icon: 'fa fa-circle-o'
      },
      {
        text: 'Config 2',
        href: '/config2',
        icon: 'fa fa-circle-o'
      }
    ]
  }
]

const Routes = [
  {
    text: 'Home',
    path: '/',
    exact: true,
    icon: 'fa fa-bars',
    component: Content
  },
  {
    text: 'Reports',
    path: '/reports',
    icon: 'fa fa-steam',
    component: Reports
  },
  {
    text: 'Configurações',
    icon: 'fa fa-gears',
    path: '/config',
    component: Config,
    routes: [
      {
        text: 'Config 1',
        path: '/config',
        icon: 'fa fa-circle-o',
        component: Config,
      },
      {
        text: 'Config 2',
        path: '/config2',
        icon: 'fa fa-circle-o'
      }
    ]
  }
]

const RouteWithSubRoutes = route => (
  <Route
    path={route.path}
    exact={route.exact}
    render={props => (
      // pass the sub-routes down to keep nesting
      <route.component {...props} routes={route.routes} />
    )}
  />
);

class App extends Component {
  render() {
    return (
      <Router>
        <div>
            <Header />
            <SideBar menu={Routes} />
            <div>
            {Routes.map((route, i) => <RouteWithSubRoutes key={i} {...route} />)}
            </div>
        </div>
      </Router>
    )
  }
}

export default App
