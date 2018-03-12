import Link from 'next/link'
import Page from '../layouts/main'
import Head from '../components/head'

export default () =>
  <Page>
    <Head title="Fourth Echelon | Config" />
    <section className="content-header">
      <h1>
        CONFIG <small>Control panel</small>
      </h1>
      <ol className="breadcrumb">
        <li>
          <a href="#">
            <i className="fa fa-dashboard" /> Home
          </a>
        </li>
        <li className="active">Dashboard</li>
      </ol>
    </section>
    <section className="content">About</section>
  </Page>
