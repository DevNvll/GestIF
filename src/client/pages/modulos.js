import React from 'react'
import Head from '../components/head'
import Router from 'next/router'

import { setModule } from '~utils/ModulesService'
import Auth from '~utils/AuthService'
import modulos from '../modulos'

const ModuleCube = ({ name, color, id }) => (
  <div
    className="cube"
    style={{ backgroundColor: color || '#222', marginTop: '0px' }}
    onClick={() => {
      setModule(id, name)
      Router.push('/')
    }}
  >
    {name}
  </div>
)

class Modulos extends React.Component {
  constructor() {
    super()
    this.state = { roles: [] }
  }

  componentDidMount() {
    Auth.fetch('/api/users/me').then(data => {
      this.setState({ roles: data.roles })
    })
  }
  render() {
    return (
      <React.Fragment>
        <Head title="Seleção de Módulos | GestIF" />
        <div className="cube-container">
          <h1 style={{ margin: '50px' }}>Seleção de módulos</h1>
          <br />
          <div className="cubes">
            {this.state.roles &&
              modulos.map(m => {
                if (this.state.roles.includes(m.id))
                  return (
                    <ModuleCube
                      key={m.id + m.name}
                      name={m.name}
                      id={m.id}
                      color={m.color}
                    />
                  )
              })}
          </div>
        </div>
        <style jsx global>{`
          .cube-container {
            height: 100vh !important;
            width: 100%;
            flex-direction: column;
            display: flex;
            align-items: center;
            justify-content: center;
          }
          .cube {
            height: 150px;
            width: 150px;
            display: flex;
            font-weight: bold;
            font-size: 1.8em;
            align-items: center;
            justify-content: center;
            color: #fff;
            text-transform: uppercase;
            cursor: pointer;
            border-radius: 2px;
            border: 2px 2px 0px 0px rgb(0, 0, 0, 0.2);
            transition: ease all 0.3s;
            -webkit-touch-callout: none;
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -ms-user-select: none;
            user-select: none;
          }
          .cubes {
            display: flex;
            flex-direction: row;
          }
          .cube + .cube {
            margin-left: 30px;
          }
          .cube:hover {
            margin-top: -10px;
            box-shadow: 0px 3px 0px 0px rgb(0, 0, 0, 0.2);
          }
        `}</style>
      </React.Fragment>
    )
  }
}

export default Modulos
