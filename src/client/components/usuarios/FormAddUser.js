import React from 'react'
import { Form, Button, Dropdown } from 'semantic-ui-react'

function generatePassword() {
  var length = 8,
    charset = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789',
    retVal = ''
  for (var i = 0, n = charset.length; i < length; ++i) {
    retVal += charset.charAt(Math.floor(Math.random() * n))
  }
  return retVal
}

class FormAddUser extends React.Component {
  constructor() {
    super()
    this.state = {
      form: {}
    }
    this.handleChange = this.handleChange.bind(this)
    this.handleSetorChange = this.handleSetorChange.bind(this)
  }
  geraSenha() {
    const password = generatePassword()
    this.setState({ form: { ...this.state.form, password } })
  }
  handleSetorChange(e, data) {
    this.setState({
      form: {
        ...this.state.form,
        setor: data.value
      }
    })
  }
  handleChange(e) {
    this.setState({
      form: {
        ...this.state.form,
        [e.target.name]: e.target.value || data.value
      }
    })
  }
  render() {
    return (
      <Form onSubmit={() => this.props.onSubmit(this.state.form)}>
        <Form.Field>
          <label>Nome</label>
          <input
            placeholder="Nome completo..."
            name="name"
            required
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Email..."
            name="email"
            required
            type="email"
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Setor</label>
          <Dropdown
            placeholder="Setor..."
            onChange={this.handleSetorChange}
            name="setor"
            selection
            fluid
            required
            options={[
              { key: 'csti', value: 'CSTI', text: 'CSTI' },
              { key: 'dir', value: 'Dir', text: 'Direção' }
            ]}
          />
        </Form.Field>
        <Form.Field>
          <label>Senha</label>
          <Form.Group inline>
            <input
              placeholder="Senha..."
              name="password"
              required
              value={this.state.form.password || ''}
              onChange={this.handleChange}
            />
            <Form.Button
              color="blue"
              size="small"
              fluid
              type="button"
              onClick={this.geraSenha.bind(this)}
              style={{ marginLeft: '10px' }}
            >
              {' '}
              Gerar senha
            </Form.Button>
          </Form.Group>
        </Form.Field>

        <Button type="submit" secondary fluid>
          Cadastrar usuário
        </Button>
      </Form>
    )
  }
}

export default FormAddUser
