import React, { Component } from 'react'
import Head from '~components/head'

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
          <div className="login-box-body">
            {this.state.error ? (
              <center>
                <p className="text-red">Credenciais Inválidas</p>
              </center>
            ) : (
              <div />
            )}
            {this.state.enviado ? (
              <center>
                <p className="text-green">Enviado com sucesso!</p>
              </center>
            ) : (
              <div />
            )}
            Preencha algumas informações sobre o problema no formulário abaixo.{' '}
            <br />
            <br />
            <form onSubmit={this.onSubmit.bind(this)}>
              <div className="form-group has-feedback">
                <input
                  type="text"
                  name="nome"
                  className="form-control"
                  placeholder="Seu nome"
                  required
                />
                <span className="fa fa-user form-control-feedback" />
              </div>
              <div className="form-group has-feedback">
                <input
                  type="text"
                  name="maquina"
                  className="form-control"
                  placeholder="ID da máquina"
                  required
                />
                <span className="fa fa-desktop form-control-feedback" />
              </div>
              <div className="form-group has-feedback">
                <textarea
                  type="text"
                  name="descricao"
                  className="form-control"
                  placeholder="Descrição do problema"
                  required
                />
                <span className="fa fa-envelope form-control-feedback" />
              </div>
              <div className="form-group has-feedback">
                <input
                  type="number"
                  name="lab"
                  className="form-control"
                  placeholder="Número da sala"
                  required
                />
                <span className="fa fa-home form-control-feedback" />
              </div>
              <div className="row">
                <div className="col-xs-8" />
                <div className="col-xs-4">
                  <button
                    type="submit"
                    className="btn btn-primary btn-block btn-flat"
                  >
                    Enviar
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
