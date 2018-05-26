import Page from '~layouts/main'
import Head from '~components/head'

export default () => (
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
        <h1>Direção</h1>
      </section>
    </div>
  </Page>
)
