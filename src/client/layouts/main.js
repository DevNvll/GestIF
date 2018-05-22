import React, { Component } from 'react'
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

//Menu do módulo da CSTI
//TODO: Adicionar menu do módulo da direção
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
        text: 'Sobre',
        href: '/sobre',
        icon: 'fa fa-info'
      }
    ]
  }
]

class Main extends Component {
  componentDidMount() {
    //Se não estiver autenticado, redireciona para a tela de login
    if (!Auth.loggedIn()) {
      Router.push('/login')
    }
    //Se um módulo não foi escolhido, redireciona para tela de seleção de módulo. Ocorre a cada login.
    if (!ModuleService.isModuleChosen() && Auth.loggedIn()) {
      Router.push('/modulos')
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
        {/* Cabeçalho branco */}
        <Head />
        {/* Cabeçalho */}
        <Header auth={Auth} />
        {/* Barra lateral */}
        <Sidebar menu={Menu} auth={Auth} module={ModuleService.getModule()} />
        {/* Página de /pages/ */}
        {this.props.children}
        {/* Rodapé */}
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
