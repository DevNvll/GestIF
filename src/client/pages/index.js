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
            <div className="row">
              <div className="col-md-12">
                <div className="row">
                  <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="info-box">
                      <span className="info-box-icon bg-black">
                        <i className="fab fa-steam" />
                      </span>

                      <div className="info-box-content">
                        <span className="info-box-text">Games</span>
                        <span className="info-box-number">330</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="info-box">
                      <span className="info-box-icon bg-red">
                        <i className="fab fa-lastfm" />
                      </span>

                      <div className="info-box-content">
                        <span className="info-box-text">Scrobbles</span>
                        <span className="info-box-number">41,410</span>
                      </div>
                    </div>
                  </div>

                  <div className="clearfix visible-sm-block" />

                  <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="info-box">
                      <span className="info-box-icon bg-green">
                        <i className="fa fa-shopping-cart" />
                      </span>

                      <div className="info-box-content">
                        <span className="info-box-text">Sales</span>
                        <span className="info-box-number">760</span>
                      </div>
                    </div>
                  </div>
                  <div className="col-md-3 col-sm-6 col-xs-12">
                    <div className="info-box">
                      <span className="info-box-icon bg-yellow">
                        <i className="fa fa-id-card" />
                      </span>

                      <div className="info-box-content">
                        <span className="info-box-text">New Members</span>
                        <span className="info-box-number">2,000</span>
                      </div>
                    </div>
                  </div>
                </div>
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