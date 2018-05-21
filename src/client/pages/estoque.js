import React, { Component } from 'react'
import { Button, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import Page from '../layouts/main'
import Head from '../components/head'

const InfoList = props => {
  return (
    <div className="box box-primary">
      <div className="box-header">
        <Button color="info" data-toggle="modal" data-target="#addModal">
          Cadastrar Produto
        </Button>
      </div>

      <div className="box-body no-padding">
        <table className="table table-striped">
          <thead>
            <tr>
              <th style={{ width: '10px' }}>#</th>
              <th>Nome da Produto</th>
              <th>Preço</th>
              <th>Largura</th>
              <th>Altura</th>
              <th>Comprimento</th>
              <th>Peso</th>
              <th style={{ width: '140px' }}>&nbsp;</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>2</td>
              <td>Smartphone Moto Z Play</td>
              <td>1887.78</td>
              <td>14.10</td>
              <td>0.90</td>
              <td>1.16</td>
              <td>0.13</td>
              <td>
                <a href="/admin/products/2" className="btn btn-primary btn-xs">
                  <i className="fa fa-edit" /> Editar
                </a>
                <a
                  href="/admin/products/2/delete"
                  className="btn btn-danger btn-xs"
                >
                  <i className="fa fa-trash" /> Excluir
                </a>
              </td>
            </tr>

            <tr>
              <td>1</td>
              <td>Smartphone Motorola Moto G5 Plus</td>
              <td>1135.23</td>
              <td>15.20</td>
              <td>7.40</td>
              <td>0.70</td>
              <td>0.16</td>
              <td>
                <a href="/admin/products/1" className="btn btn-primary btn-xs">
                  <i className="fa fa-edit" /> Editar
                </a>
                <a
                  href="/admin/products/1/delete"
                  className="btn btn-danger btn-xs"
                >
                  <i className="fa fa-trash" /> Excluir
                </a>
              </td>
            </tr>

            <tr>
              <td>5</td>
              <td>Smartphone Samsung Galaxy J3 Dual</td>
              <td>679.90</td>
              <td>14.20</td>
              <td>7.10</td>
              <td>0.70</td>
              <td>0.14</td>
              <td>
                <a href="/admin/products/5" className="btn btn-primary btn-xs">
                  <i className="fa fa-edit" /> Editar
                </a>
                <a
                  href="/admin/products/5/delete"
                  className="btn btn-danger btn-xs"
                >
                  <i className="fa fa-trash" /> Excluir
                </a>
              </td>
            </tr>

            <tr>
              <td>3</td>
              <td>Smartphone Samsung Galaxy J5 Pro</td>
              <td>1299.00</td>
              <td>14.60</td>
              <td>7.10</td>
              <td>0.80</td>
              <td>0.16</td>
              <td>
                <a href="/admin/products/3" className="btn btn-primary btn-xs">
                  <i className="fa fa-edit" /> Editar
                </a>
                <a
                  href="/admin/products/3/delete"
                  className="btn btn-danger btn-xs"
                >
                  <i className="fa fa-trash" /> Excluir
                </a>
              </td>
            </tr>

            <tr>
              <td>4</td>
              <td>Smartphone Samsung Galaxy J7 Prime</td>
              <td>1149.00</td>
              <td>15.10</td>
              <td>7.50</td>
              <td>0.80</td>
              <td>0.16</td>
              <td>
                <a href="/admin/products/4" className="btn btn-primary btn-xs">
                  <i className="fa fa-edit" /> Editar
                </a>
                <a
                  href="/admin/products/4/delete"
                  className="btn btn-danger btn-xs"
                >
                  <i className="fa fa-trash" /> Excluir
                </a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

const Tabs = props => (
  <div class="col-md-12">
    <div className="nav-tabs-custom">
      <ul className="nav nav-tabs">
        <li className="active">
          <a href="#tab_1" data-toggle="tab" aria-expanded="true">
            Tab 1
          </a>
        </li>
        <li className="">
          <a href="#tab_2" data-toggle="tab" aria-expanded="false">
            Tab 2
          </a>
        </li>
        <li className="">
          <a href="#tab_3" data-toggle="tab" aria-expanded="false">
            Tab 3
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div className="tab-pane active" id="tab_1">
          <b>How to use:</b>
          <p>
            Exactly like the original bootstrap tabs except you should use the
            custom wrapper <code>.nav-tabs-custom</code> to achieve this style.
          </p>
          A wonderful serenity has taken possession of my entire soul, like
          these sweet mornings of spring which I enjoy with my whole heart. I am
          alone, and feel the charm of existence in this spot, which was created
          for the bliss of souls like mine. I am so happy, my dear friend, so
          absorbed in the exquisite sense of mere tranquil existence, that I
          neglect my talents. I should be incapable of drawing a single stroke
          at the present moment; and yet I feel that I never was a greater
          artist than now.
        </div>
        <div className="tab-pane" id="tab_2">
          The European languages are members of the same family. Their separate
          existence is a myth. For science, music, sport, etc, Europe uses the
          same vocabulary. The languages only differ in their grammar, their
          pronunciation and their most common words. Everyone realizes why a new
          common language would be desirable: one could refuse to pay expensive
          translators. To achieve this, it would be necessary to have uniform
          grammar, pronunciation and more common words. If several languages
          coalesce, the grammar of the resulting language is more simple and
          regular than that of the individual languages.
        </div>
        <div className="tab-pane" id="tab_3">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
    </div>
  </div>
)
const Modal = () => (
  <div className="modal fade" id="addModal" tabindex="-1" role="dialog">
    <div className="modal-dialog" role="document">
      <div className="modal-content">
        <div className="modal-header">
          <button
            type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close"
          >
            <span aria-hidden="true">&times;</span>
          </button>
          <h4 className="modal-title">Modal title</h4>
        </div>
        <div className="modal-body">
          <p>One fine body&hellip;</p>
        </div>
        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-default"
            data-dismiss="modal"
          >
            Close
          </button>
          <button type="button" className="btn btn-primary">
            Save changes
          </button>
        </div>
      </div>
    </div>
  </div>
)

export default class Reports extends Component {
  constructor(props) {
    super(props)
    this.state = {
      modalAdicionar: false
    }

    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({
      modalAdicionar: !this.state.modalAdicionar
    })
  }
  render() {
    return (
      <Page>
        <Head title="Estoque | GestIF" />

        <div className="content-wrapper">
          <section className="content-header">
            <h1>
              Estoque
              <small>Controle de inventário</small>
            </h1>
            <ol className="breadcrumb">
              <li>
                <a href="/">
                  <i className="fa fa-dashboard" /> Iní­cio
                </a>
              </li>
              <li>
                <a href="/estoque">Estoque</a>
              </li>
            </ol>
          </section>
          <section className="content">
            <div className="row">
              <div className="col-md-12">
                <InfoList toggleModal={this.toggle} />
                <Tabs toggle={this.toggle} open={this.state.modalAdicionar} />
              </div>
              <div className="col-md-6">
                <button
                  type="button"
                  className="btn btn-default"
                  data-toggle="modal"
                  data-target="#addModal"
                >
                  Launch Default Modal
                </button>
                <Modal />
              </div>
            </div>
          </section>
        </div>
      </Page>
    )
  }
}
