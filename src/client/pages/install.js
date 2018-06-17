import React, { Component } from 'react'
import Head from '~components/head'
import { Segment, Form, Message } from 'semantic-ui-react'

import auth from '~utils/AuthService'

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      enviado: false,
      errors: {
        senha: false
      },
      installed: false
    }
  }
  componentDidMount() {
    auth.fetch('/api/install').then(res => {
      if (res.code === 'ALREADY_INSTALLED') {
        this.setState({ installed: true })
      }
    })
  }
  onSubmit(e) {
    e.preventDefault()
    window.Pace.start()
    const { nome, email, senha, senha2 } = e.target
    const data = {
      name: nome.value,
      email: email.value,
      password: senha.value
    }
    if (senha.value !== senha2.value) {
      this.setState({ errors: { senha: true } })
      return
    }
    this.setState({ errors: {} })
    auth
      .fetch('/api/install', {
        method: 'POST',
        body: JSON.stringify(data)
      })
      .then(res => {
        this.setState({ errors: {} })
        this.setState({ enviado: true })
        console.log(res)
      })
      .catch(err => {
        this.setState({ errors: { instalado: true } })
      })
  }
  render() {
    if (this.state.installed) {
      return (
        <center>
          <Head title="Instalação | GestIF" />
          <div className="login-box">
            <h1>Sistema já instalado.</h1>
          </div>
        </center>
      )
    }
    return (
      <div className="hold-transition login-page">
        <Head title="Instalação | GestIF" />
        <div className="login-box">
          <div className="login-logo">
            <a href="#">
              <b>Instalação GestIF</b>
            </a>
          </div>
          {this.state.enviado && (
            <center>
              <Message positive>Instalado com sucesso!</Message>
            </center>
          )}
          {this.state.errors.senha && (
            <center>
              <Message negative>As senhas não são iguais!</Message>
            </center>
          )}
          <Segment stacked>
            Esta é a página de instalação do GestIF.
            <p>Aqui você irá criar o usuário inicial do sistema</p>
            <Form onSubmit={this.onSubmit.bind(this)}>
              <Form.Field>
                <Form.Input
                  type="text"
                  name="nome"
                  icon="user"
                  fluid
                  placeholder="Seu nome"
                  required
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  type="email"
                  name="email"
                  icon="mail"
                  fluid
                  placeholder="E-mail"
                  required
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  type="password"
                  name="senha"
                  icon="lock"
                  fluid
                  placeholder="Senha"
                  required
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  type="password"
                  name="senha2"
                  icon="lock"
                  fluid
                  placeholder="Repita a senha"
                  required
                />
              </Form.Field>
              <Form.Button
                icon="angle right"
                labelPosition="right"
                type="submit"
                secondary
                content="Instalar"
                fluid
              />
            </Form>
          </Segment>
        </div>
      </div>
    )
  }
}
