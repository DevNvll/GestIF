import Page from '../layouts/main'
import Head from '../components/head'

const Sobre = () => (
  <Page>
    <Head title="Sobre | GestIF" />
    <div className="content-wrapper">
      <section className="content-header">
        <h1>
          Sobre
          <small>Sobre o GestIF</small>
        </h1>
        <ol className="breadcrumb">
          <li>
            <a href="/">
              <i className="fa fa-dashboard" /> Iní­cio
            </a>
          </li>
          <li>
            <a href="/usuarios">Sobre</a>
          </li>
        </ol>
      </section>
      <section className="content">
        <div className="row">
          <div className="col-md-12">
            <div className="box box-gray">
              <div className="box-body">
                <h3>TODO</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Page>
)

export default Sobre
