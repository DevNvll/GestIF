import React, { Component } from 'react'
import Auth from '~utils/AuthService'
import filter from 'lodash/filter'
import { Tab, Message } from 'semantic-ui-react'

import Page from '~layouts/main'
import Head from '~components/head'

import TablePendentes from '~components/reports/TablePendentes'
import TableHistorico from '~components/reports/TableHistorico'

export default class Reports extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reports: [],
      todos: []
    }
  }
  componentDidMount() {
    Auth.fetch('/api/reports').then(reports => {
      this.setState({
        reports: reports.filter(r => r.status === 0),
        todos: reports
      })
    })
  }
  resolvido(id) {
    Auth.fetch('/api/reports/resolve', {
      method: 'POST',
      body: JSON.stringify({
        id: id
      })
    }).then(reports => {
      const newState = filter(this.state.reports, item => item._id !== id)
      this.setState({ reports: newState })
    })
  }
  render() {
    const tabs = [
      {
        menuItem: 'Ativos',
        render: () => {
          if (this.state.reports.length === 0)
            return (
              <center>
                <Message success style={{ marginTop: '10px' }}>
                  Nenhum report pendente!
                </Message>
              </center>
            )
          return (
            <TablePendentes
              reports={this.state.reports}
              resolvido={this.resolvido.bind(this)}
            />
          )
        }
      },
      {
        menuItem: 'Histórico',
        render: () => (
          <TableHistorico
            reports={this.state.todos}
            resolvido={this.resolvido.bind(this)}
          />
        )
      }
    ]
    return (
      <Page>
        <Head title="Reports | GestIF" />
        <div className="content-wrapper">
          <section className="content-header">
            <h1>
              Reports
              <small>Relatórios de problemas de máquinas</small>
            </h1>
            <ol className="breadcrumb">
              <li>
                <a href="/">
                  <i className="fa fa-dashboard" /> Iní­cio
                </a>
              </li>
              <li>
                <a href="/reports">Reports</a>
              </li>
            </ol>
          </section>
          <section className="content">
            <div className="row">
              <div className="col-md-12">
                <div className="box box-info">
                  <div className="box-body">
                    <Tab panes={tabs} />
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
