import React, { Component } from 'react'
import Page from '../layouts/main'
import Head from '../components/head'

  const InfoList = () => {
    return (
      <div className="box box-info">
        <div className="box-header with-border">
          <h3 className="box-title">Últimos reports</h3>
  
          <div className="box-tools pull-right">
            
          </div>
        </div>
        <div className="box-body">
          <div className="table-responsive">
            <table className="table no-margin">
              <thead>
                <tr>
                  <th>ID da máquina</th>
                  <th>Descrição do problema</th>
                  <th>Status</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>
                    <a href="pages/examples/invoice.html">OR9842</a>
                  </td>
                  <td>Call of Duty IV</td>
                  <td>
                    <span className="label label-success">Shipped</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="pages/examples/invoice.html">OR1848</a>
                  </td>
                  <td>Samsung Smart TV</td>
                  <td>
                    <span className="label label-warning">Pending</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="pages/examples/invoice.html">OR7429</a>
                  </td>
                  <td>iPhone 6 Plus</td>
                  <td>
                    <span className="label label-danger">Delivered</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="pages/examples/invoice.html">OR7429</a>
                  </td>
                  <td>Samsung Smart TV</td>
                  <td>
                    <span className="label label-info">Processing</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="pages/examples/invoice.html">OR1848</a>
                  </td>
                  <td>Samsung Smart TV</td>
                  <td>
                    <span className="label label-warning">Pending</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="pages/examples/invoice.html">OR7429</a>
                  </td>
                  <td>iPhone 6 Plus</td>
                  <td>
                    <span className="label label-danger">Delivered</span>
                  </td>
                </tr>
                <tr>
                  <td>
                    <a href="pages/examples/invoice.html">OR9842</a>
                  </td>
                  <td>Call of Duty IV</td>
                  <td>
                    <span className="label label-success">Shipped</span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
  
        <div className="box-footer clearfix">
          <a
            href="javascript:void(0)"
            className="btn btn-sm btn-info btn-flat pull-left"
          >
            Place New Order
          </a>
          <a
            href="javascript:void(0)"
            className="btn btn-sm btn-default btn-flat pull-right"
          >
            View All Orders
          </a>
        </div>
      </div>
    )
  }
  
  export default class Reports extends Component {
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
          <InfoList />
          </div>
        </div>
        </section>
        </div>
        </Page>
      )
    }
  }
  