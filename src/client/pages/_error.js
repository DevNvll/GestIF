import React, { Fragment } from 'react'

export default class Error extends React.Component {
  static getInitialProps({ res, err }) {
    const statusCode = res ? res.statusCode : err ? err.statusCode : null
    return { statusCode }
  }

  render() {
    return (
      <p>
        {this.props.statusCode ? (
          <Fragment>
            <span
              className="fa-3x"
              style={{
                textAlign: 'center',
                width: '100%',
                transform: 'translate(0, -50%)',
                top: '50%',
                position: 'absolute'
              }}
            >
              <i className="fa fa-exclamation-triangle" />
              <br />
              {`Erro ${this.props.statusCode}`}
              <br />
              <a href="/" style={{ fontSize: '18px' }}>
                Voltar ao início
              </a>
            </span>
          </Fragment>
        ) : (
          <span
            className="fa-3x"
            style={{
              textAlign: 'center',
              width: '100%',
              transform: 'translate(0, -50%)',
              top: '50%',
              position: 'absolute'
            }}
          >
            {`Ocorreu um erro`}
          </span>
        )}
      </p>
    )
  }
}
