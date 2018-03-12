import React, { Component } from 'react'
import Head from '../components/head'
import Router from 'next/router'

import AuthService from '../utils/AuthService'
const auth = new AuthService()

export default class Login extends Component {
  state = {}
  componentDidMount() {
    // if (auth.loggedIn()) {
    //   Router.push('/')
    // }
  }
  onSubmit(e) {
    e.preventDefault()
    auth
      .login(e.target.username.value, e.target.password.value)
      .then(() => {
        Router.push('/')
      })
      .catch(err => {
        if (err.message === 'LOGIN_FAIL') {
          this.setState({ error: err.message })
        }
      })
  }
  render() {
    return (
      <div className="hold-transition login-page">
        <Head title="Login | GestIF" />
        <div className="login-box">
          <div className="login-logo">
            <a href="#">
              <b>Gest</b>IF
            </a>
          </div>
          <div className="login-box-body">
            {this.state.error
              ? <center>
                  <p className="text-red">Invalid credentials</p>
                </center>
              : <div />}
            <form onSubmit={this.onSubmit.bind(this)}>
              <div className="form-group has-feedback">
                <input
                  type="text"
                  name="username"
                  className="form-control"
                  placeholder="E-mail"
                />
                <span className="fa fa-envelope form-control-feedback" />
              </div>
              <div className="form-group has-feedback">
                <input
                  type="password"
                  name="password"
                  className="form-control"
                  placeholder="Senha"
                />
                <span className="fa fa-lock form-control-feedback" />
              </div>
              <div className="row">
                <div className="col-xs-8" />
                <div className="col-xs-4">
                  <button
                    type="submit"
                    className="btn btn-success btn-block btn-flat"
                  >
                    Logar
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}
