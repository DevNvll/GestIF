import React, { Component } from 'react'
import Link from 'next/link'
import Page from '../layouts/main'
import Head from '../components/head'
import withAuth from '../utils/withAuth'

class Home extends Component {
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
            Bem vindos ao sistema de controle de estoque!
          </section>
        </div>
      </Page>
    )
  }
}

// export default withAuth(Home)
export default Home