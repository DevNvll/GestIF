import Page from '../layouts/main'
import Head from '../components/head'
import { Image } from 'semantic-ui-react'

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
            <div className="box box-success">
              <div className="box-body">
                <h3>GestIF</h3>
                <p>
                  GestIF é um sistema de gestão desenvolvido como TCC da turma
                  INF 171 2018.1 do curso de informática do IFRJ Campus Arraial
                  do Cabo. O sistema consiste em um painel de controle modular,
                  onde cada módulo é independente e é referente a um setor
                  administrativo ou técnico.
                </p>
                <p>
                  Observando as atividades cotidianas do Campus Arraial do Cabo,
                  percebemos em muitos momentos a falta de ligação entre os
                  setores administrativos com o restante do instituto,
                  resultando em problemas de comunicação e impedindo que
                  diversas atividades sejam realizadas de forma dinâmica e
                  eficiente, prejudicando ainda a produtividade dos servidores
                  em suas tarefas, atingindo assim a todos que precisam utilizar
                  dos recursos que o campus disponibiliza.
                </p>
                <p>
                  Além disso, percebemos que a utilização de sistemas não
                  automatizados são, em muitos momentos, ineficazes e pouco
                  econômicos. Percebemos, ainda, que o uso de sistemas
                  automatizados, em detrimento aos manuais (planilhas a mão,
                  notas, cadernos) aumentam a produtividade e consequentemente a
                  rapidez dos processos administrativos. Visto isso, é de suma
                  importância o desenvolvimento de um software capaz de realizar
                  o gerenciamento administrativo do instituto.
                </p>
                <p>
                  O projeto pretende, então, solucionar os problemas existentes
                  de gestão do Campus, por meio da criação de um software de
                  gestão, onde funcionará como um agregador, que possuirá vários
                  módulos independentes, cada um para uma resolução de problemas
                  específica. Com isso, facilitaremos o trabalho das partes
                  competentes do campus, além de aumentar a integração entre
                  servidores e discentes, peças fundamentais para o
                  funcionamento da instituição.
                </p>
                <hr />
                <center>
                  <Image src="./static/img/logo_ifrj.jpg" size="big" />
                </center>
                Este sistema foi criado como trabalho de conclusão de curso
                pelos alunos <b>Brenno Luis</b>, <b>David Sales</b>,{' '}
                <b>Julio Volpatto</b>, <b>Henrick Mello</b> e{' '}
                <b>Thalya Medeiros</b> no Instituto Federal de Educação Ciência
                e Tecnologia do Rio de Janeiro - <i>Campus</i> Arraial do Cabo
                no curso de técnico de informática.
                <hr />
                <h4>Manuais</h4>
                <a href="https://gestif.gitbook.io/expansao/" target="_blank">
                  Manual de utilização
                </a>.<br />
                <a href="https://gestif.gitbook.io/expansao/" target="_blank">
                  Manual de expansão
                </a>.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </Page>
)

export default Sobre
