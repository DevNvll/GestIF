import Link from 'next/link'
import Page from '../layouts/main'
import Head from '../components/head'
import Auth from '../utils/AuthService'
import { Form, Button, Message } from 'semantic-ui-react'

import FormUserInfo from '~components/usuarios/FormUserInfo'

class Me extends React.Component {
  constructor() {
    super()
    this.state = {
      user: {},
      loading: true
    }
  }
  componentDidMount() {
    Auth.fetch('/api/users/me').then(data => {
      this.setState({ user: data, loading: false })
    })
  }
  onSubmit({ name, email, password, password2 }) {
    if (password !== password2 && password !== '') {
      this.setState({ error: 'Senhas não são iguais' })
      return
    } else if (password === '') {
      password = undefined
    }
    Auth.fetch('/api/users/me', {
      method: 'PATCH',
      body: JSON.stringify({
        name,
        email,
        password
      })
    })
      .then(({ data }) => {
        //TODO: Lidar com erros vindos do backend (email em uso, etc)
        this.setState({ success: true })
      })
      .catch(() => {
        this.setState({ error: true })
      })
  }
  render() {
    return (
      <Page>
        <Head title="Detalhes da conta | GestIF" />
        <div className="content-wrapper">
          <section className="content-header">
            <h1>
              Dados da sua conta
              <small>Configurações referentes à sua conta</small>
            </h1>
            <ol className="breadcrumb">
              <li>
                <a href="/">
                  <i className="fa fa-dashboard" /> Iní­cio
                </a>
              </li>
              <li>
                <a href="/usuarios">Usuários</a>
              </li>
              <li>
                <a href="/me">Eu</a>
              </li>
            </ol>
          </section>
          <section className="content">
            <div className="row">
              <div className="col-md-12">
                <div className="box box-info">
                  <div className="box-body">
                    <Message
                      hidden={!this.state.success}
                      onDismiss={() => this.setState({ success: null })}
                    >
                      <Message.Header>Sucesso!</Message.Header>
                      <p>Seus dados foram atualizados!</p>
                    </Message>
                    <Message
                      negative
                      hidden={!this.state.error}
                      onDismiss={() => this.setState({ error: null })}
                    >
                      <Message.Header>Ocorreu um erro</Message.Header>
                      <p>{this.state.error}</p>
                    </Message>
                    <FormUserInfo
                      onSubmit={this.onSubmit.bind(this)}
                      loading={this.state.loading}
                      name={this.state.user.name}
                      email={this.state.user.email}
                    />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>
      </Page>
    )
  }
}

export default Me
