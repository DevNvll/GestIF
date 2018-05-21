import React, { Component } from 'react'
import Link from 'next/link'
import Head from '../components/head'
import Header from '../components/header'
import Sidebar from '../components/sidebar'
import Footer from '../components/footer'
import Router from 'next/router'

import Auth from '../utils/AuthService'
import * as ModuleService from '../utils/ModulesService'

Router.onRouteChangeStart = () => window.Pace.start()
Router.onRouteChangeComplete = () => window.Pace.stop()
Router.onRouteChangeError = () => window.Pace.stop()

const Menu = [
  {
    text: 'Início',
    href: '/',
    icon: 'fa fa-home'
  },
  {
    text: 'Reports',
    href: '/reports',
    icon: 'fa fa-clipboard'
  },
  {
    text: 'Administração',
    icon: 'fa fa-cog',
    submenu: [
      {
        text: 'Usuários',
        href: '/usuarios',
        icon: 'fa fa-id-card'
      },
      {
        text: 'Sistema',
        href: '/config2',
        icon: 'fa fa-wrench'
      }
    ]
  }
]

class Main extends Component {
  componentDidMount() {
    if (!Auth.loggedIn()) {
      Router.push('/login')
    }
  }
  render() {
    if (!Auth.loggedIn()) {
      return (
        <span
          className="fa-3x"
          style={{
            textAlign: 'center',
            width: '100%',
            transform: 'translate(0, -50%)',
            top: '50%',
            position: 'absolute'
          }}
        >
          <i className="fa fa-cog fa-spin" />
        </span>
      )
    }
    return (
      <div className="skin-black sidebar-mini wrapper">
        <Head />
        <Header auth={Auth} />
        <Sidebar menu={Menu} auth={Auth} module={ModuleService.getModule()} />
        {this.props.children}
        <Footer />
        <style jsx global>
          {`
            body {
              font-family: 'Source Sans Pro', 'Helvetica Neue', Helvetica, Arial,
                sans-serif;
            }
          `}
        </style>
      </div>
    )
  }
}

export default Main
