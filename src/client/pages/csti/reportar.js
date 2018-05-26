import React, { Component } from 'react'
import Head from '~components/head'
import { Segment, Form, Message } from 'semantic-ui-react'

import auth from '~utils/AuthService'

export default class Login extends Component {
  constructor() {
    super()
    this.state = {
      enviado: false
    }
  }
  onSubmit(e) {
    e.preventDefault()
    window.Pace.start()
    const { nome, descricao, maquina, lab } = e.target
    auth
      .fetch('/api/reports/create', {
        method: 'POST',
        body: JSON.stringify({
          nome: nome.value,
          descricao: descricao.value,
          maquina: maquina.value,
          lab: lab.value
        })
      })
      .then(res => {
        this.setState({ enviado: true })
      })
    // auth
    //   .login(e.target.email.value, e.target.password.value)
    //   .then(() => {
    //     window.Pace.stop()
    //     Router.push('/')
    //   })
    //   .catch(err => {
    //     window.Pace.stop()
    //     if (err === 'LOGIN_FAIL') {
    //       this.setState({ error: err })
    //     }
    //   })
  }
  render() {
    return (
      <div className="hold-transition login-page">
        <Head title="Enviar Report | GestIF" />
        <div className="login-box">
          <div className="login-logo">
            <a href="#">
              <b>Formulário de Report</b>
            </a>
          </div>
          {this.state.enviado && (
            <center>
              <Message positive>Enviado com sucesso!</Message>
            </center>
          )}
          <Segment stacked>
            Preencha algumas informações sobre o problema no formulário abaixo.{' '}
            <br />
            <br />
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
                  type="text"
                  name="maquina"
                  icon="computer"
                  fluid
                  placeholder="ID da máquina"
                  required
                />
              </Form.Field>
              <Form.Field>
                <Form.TextArea
                  name="descricao"
                  icon="warning"
                  placeholder="Descrição do problema"
                  required
                />
              </Form.Field>
              <Form.Field>
                <Form.Input
                  type="number"
                  name="lab"
                  fluid
                  icon="key"
                  placeholder="Número da sala"
                  required
                />
              </Form.Field>
              <Form.Button
                icon="check"
                labelPosition="right"
                type="submit"
                secondary
                content="Enviar"
                fluid
              />
            </Form>
          </Segment>
        </div>
      </div>
    )
  }
}
