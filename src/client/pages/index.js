import React, { Component } from 'react'
import Link from 'next/link'
import Page from '../layouts/main'
import Head from '../components/head'
import Auth from '../utils/AuthService'

class Home extends Component {
  constructor() {
    super()
    this.state = {
      stats: {}
    }
  }
  componentDidMount() {
    Auth.fetch('/api/reports/stats').then(data => {
      this.setState({ stats: data })
      console.log(data)
    })
  }
  render() {
    return (
      <Page>
        <Head title="GestIF" />
        <div className="content-wrapper">
          <section className="content-header">
            <h1>
              Início <small>Início do painel de controle</small>
            </h1>
            <ol className="breadcrumb">
              <li>
                <a href="#">
                  <i className="fa fa-dashboard" /> Início
                </a>
              </li>
            </ol>
          </section>
          <section className="content">
            <div className="col-lg-3 col-xs-6">
              <div className="small-box bg-yellow">
                <div className="inner">
                  <h3>{this.state.stats.numPendentes}</h3>
                  <p>Reports Pendentes</p>
                </div>
                <div className="icon">
                  <i
                    className="fa fa-clipboard"
                    style={{ paddingTop: '20px', fontSize: '80px' }}
                  />
                </div>
                <Link href="/reports">
                  <a className="small-box-footer">
                    Ir para reports <i className="fa fa-arrow-circle-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-xs-6">
              <div className="small-box bg-red">
                <div className="inner">
                  <h3>{this.state.stats.maisDeUmaSemana}</h3>
                  <p>Reports pendentes por + de uma semana</p>
                </div>
                <div className="icon">
                  <i
                    className="fa fa-times"
                    style={{ paddingTop: '20px', fontSize: '80px' }}
                  />
                </div>
                <Link href="/reports">
                  <a className="small-box-footer">
                    Ir para reports <i className="fa fa-arrow-circle-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-xs-6">
              <div className="small-box bg-aqua">
                <div className="inner">
                  <h3>{this.state.stats.numResolvidoPor}</h3>
                  <p>Reports resolvidos por você</p>
                </div>
                <div className="icon">
                  <i
                    className="fa fa-check"
                    style={{ paddingTop: '20px', fontSize: '80px' }}
                  />
                </div>
                <Link href="/reports">
                  <a className="small-box-footer">
                    Ir para reports <i className="fa fa-arrow-circle-right" />
                  </a>
                </Link>
              </div>
            </div>
            <div className="col-lg-3 col-xs-6">
              <div className="small-box bg-green">
                <div className="inner">
                  <h3>{this.state.stats.numTotal}</h3>
                  <p>Reports no total</p>
                </div>
                <div className="icon">
                  <i
                    className="fa fa-chart-bar"
                    style={{ paddingTop: '20px', fontSize: '80px' }}
                  />
                </div>
                <Link href="/reports">
                  <a className="small-box-footer">
                    Ir para reports <i className="fa fa-arrow-circle-right" />
                  </a>
                </Link>
              </div>
            </div>
          </section>
        </div>
      </Page>
    )
  }
}

// export default withAuth(Home)
export default Home
