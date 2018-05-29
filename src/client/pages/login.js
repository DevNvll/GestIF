import React, { Component } from 'react'
import Head from '../components/head'
import Router from 'next/router'
import Link from 'next/link'

import { Segment, Form, Button, Message, Input } from 'semantic-ui-react'

import auth from '../utils/AuthService'

export default class Login extends Component {
  constructor() {
    super()
    this.state = {}
  }
  componentDidMount() {
    if (auth.loggedIn()) {
      Router.push('/')
    }
  }
  onSubmit(e) {
    e.preventDefault()
    window.Pace.start()
    auth
      .login(e.target.email.value, e.target.password.value)
      .then(() => {
        window.Pace.stop()
        Router.push('/')
      })
      .catch(err => {
        window.Pace.stop()
        if (err === 'LOGIN_FAIL') {
          this.setState({ error: err })
        }
      })
  }
  render() {
    return (
      <div className="hold-transition login-page">
        <Head title="Login | GestIF" />
        <div className="login-box">
          <div className="login-logo" style={{ fontFamily: 'Open Sans' }}>
            <a href="#">
              <b>Gest</b>IF
            </a>
          </div>
          <Segment stacked>
            <Form onSubmit={this.onSubmit.bind(this)}>
              {this.state.error ? (
                <center style={{ paddingBottom: '10px' }}>
                  <Message negative>Credenciais Inválidas</Message>
                </center>
              ) : (
                <div />
              )}
              <Form.Field>
                <Input placeholder="Email" name="email" required />
              </Form.Field>
              <Form.Field>
                <Input
                  type="password"
                  placeholder="Senha"
                  name="password"
                  required
                />
              </Form.Field>
              <Button secondary fluid type="submit">
                Logar
              </Button>
            </Form>
          </Segment>
          <Link href="/csti/reportar">
            <a>
              <Button
                icon="clipboard"
                color="violet"
                labelPosition="left"
                content="Fazer um Report à CSTI"
                fluid
              />
            </a>
          </Link>
        </div>
      </div>
    )
  }
}
