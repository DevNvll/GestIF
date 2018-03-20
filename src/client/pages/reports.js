import React, { Component } from 'react'
import Page from '../layouts/main'
import Head from '../components/head'
import Auth from '../utils/AuthService'
import filter from 'lodash/filter'

function addZero(i) {
  if (i < 10) {
    i = '0' + i
  }
  return i
}

const ListItem = ({
  maquina,
  descricao,
  status,
  nome,
  lab,
  id,
  resolvido,
  data
}) => {
  return (
    <tr>
      <td>
        <a href="#">{maquina}</a>
      </td>
      <td>{lab}</td>
      <td>{descricao}</td>
      <td>{nome}</td>
      <td>
        {new Date(data).toLocaleDateString('en-GB')} às{' '}
        {new Date(data).getHours() + ':' + addZero(new Date(data).getMinutes())}
      </td>
      <td>
        {status === 1 ? (
          <span className="label label-success">Resolvido</span>
        ) : (
          <span className="label label-danger">Pendente</span>
        )}
      </td>
      <td>
        <button
          onClick={() => resolvido(id)}
          className="btn btn-success btn-xs"
        >
          <i className="fa fa-check" /> Resolvido
        </button>
      </td>
    </tr>
  )
}

const InfoList = ({ reports, resolvido }) => {
  return (
    <div className="box box-info">
      <div className="box-header with-border">
        <h3 className="box-title">Últimos reports</h3>

        <div className="box-tools pull-right" />
      </div>
      <div className="box-body">
        <div className="table-responsive">
          <table className="table no-margin table-striped">
            <thead>
              <tr>
                <th>ID da máquina</th>
                <th>Sala</th>
                <th>Descrição do problema</th>
                <th>Autor do report</th>
                <th>Data</th>
                <th>Status</th>
                <th>Ações</th>
              </tr>
            </thead>
            <tbody>
              {reports.map(report => {
                const {
                  maquina,
                  descricao,
                  lab,
                  nome,
                  status,
                  _id,
                  data
                } = report
                return (
                  <ListItem
                    key={_id}
                    maquina={maquina}
                    descricao={descricao}
                    nome={nome}
                    status={status}
                    lab={lab}
                    id={_id}
                    data={data}
                    resolvido={resolvido}
                  />
                )
              })}
            </tbody>
          </table>
        </div>
      </div>

      <div className="box-footer clearfix" />
    </div>
  )
}

export default class Reports extends Component {
  constructor(props) {
    super(props)
    this.state = {
      reports: []
    }
  }
  componentDidMount() {
    Auth.fetch('/api/reports').then(reports => {
      this.setState({ reports })
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
                <InfoList
                  reports={this.state.reports}
                  resolvido={this.resolvido.bind(this)}
                />
              </div>
            </div>
          </section>
        </div>
      </Page>
    )
  }
}
