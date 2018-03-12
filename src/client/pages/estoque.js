import React, { Component } from 'react'
import Page from '../layouts/main'
import Head from '../components/head'

  const InfoList = () => {
    return (
      <div className="box box-primary">
            
            <div className="box-header">
              <a href="/admin/products/create" class="btn btn-success">Cadastrar Produto</a>
            </div>

            <div className="box-body no-padding">
              <table className="table table-striped">
                <thead>
                  <tr>
                    <th style={{width: "10px"}}>#</th>
                    <th>Nome da Produto</th>
                    <th>Preço</th>
                    <th>Largura</th>
                    <th>Altura</th>
                    <th>Comprimento</th>
                    <th>Peso</th>
                    <th style={{width: "140px"}}>&nbsp;</th>
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
                      <a href="/admin/products/2" className="btn btn-primary btn-xs"><i className="fa fa-edit"></i> Editar</a>
                      <a href="/admin/products/2/delete" onclick="return confirm('Deseja realmente excluir este registro?')" class="btn btn-danger btn-xs"><i class="fa fa-trash"></i> Excluir</a>
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
                      <a href="/admin/products/1" className="btn btn-primary btn-xs"><i className="fa fa-edit"></i> Editar</a>
                      <a href="/admin/products/1/delete" onclick="return confirm('Deseja realmente excluir este registro?')" class="btn btn-danger btn-xs"><i class="fa fa-trash"></i> Excluir</a>
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
                      <a href="/admin/products/5" className="btn btn-primary btn-xs"><i className="fa fa-edit"></i> Editar</a>
                      <a href="/admin/products/5/delete" onclick="return confirm('Deseja realmente excluir este registro?')" class="btn btn-danger btn-xs"><i class="fa fa-trash"></i> Excluir</a>
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
                      <a href="/admin/products/3" className="btn btn-primary btn-xs"><i className="fa fa-edit"></i> Editar</a>
                      <a href="/admin/products/3/delete" onclick="return confirm('Deseja realmente excluir este registro?')" class="btn btn-danger btn-xs"><i class="fa fa-trash"></i> Excluir</a>
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
                      <a href="/admin/products/4" className="btn btn-primary btn-xs"><i className="fa fa-edit"></i> Editar</a>
                      <a href="/admin/products/4/delete" onclick="return confirm('Deseja realmente excluir este registro?')" class="btn btn-danger btn-xs"><i class="fa fa-trash"></i> Excluir</a>
                    </td>
                  </tr>
                  
                </tbody>
              </table>
            </div>
          </div>
  	
    )
  }
  
  export default class Reports extends Component {
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
          <InfoList />
          </div>
        </div>
        </section>
        </div>
        </Page>
      )
    }
  }
  