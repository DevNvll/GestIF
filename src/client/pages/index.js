import React, { Component } from 'react'
import Router from 'next/router'
import Head from '~components/head'
import Auth from '~utils/AuthService'
import { getModule, isModuleChosen } from '~utils/ModulesService'
import { Dimmer, Loader } from 'semantic-ui-react'

class Home extends Component {
  componentDidMount() {
    if (isModuleChosen() && Auth.loggedIn()) {
      Router.push('/' + getModule().id)
    } else if (!isModuleChosen() && Auth.loggedIn()) {
      Router.push('/modulos')
    }
    if (!Auth.loggedIn()) {
      Router.push('/login')
    }
  }
  render() {
    return (
      <React.Fragment>
        <Head title="GestIF" />
        <Dimmer active>
          <Loader inverted size="big">
            Carregando
          </Loader>
        </Dimmer>
      </React.Fragment>
    )
  }
}

// export default withAuth(Home)
export default Home
