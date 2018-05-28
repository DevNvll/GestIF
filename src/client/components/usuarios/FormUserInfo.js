import React from 'react'

import { Form } from 'semantic-ui-react'

class FormuserInfo extends React.Component {
  constructor() {
    super()
    this.state = {
      senha: '',
      form: {}
    }
    this.handleChange = this.handleChange.bind(this)
  }
  handleChange(e) {
    this.setState({
      form: { ...this.state.form, [e.target.name]: e.target.value }
    })
  }
  render() {
    const { name, email, loading } = this.props
    return (
      <Form
        loading={loading}
        onSubmit={() => this.props.onSubmit(this.state.form)}
      >
        <Form.Field>
          <label>Nome</label>
          <input
            placeholder="Nome completo..."
            name="name"
            value={this.state.form.name || name || ''}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Email</label>
          <input
            placeholder="Email..."
            name="email"
            value={this.state.form.email || email || ''}
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Senha (deixe em branco se não quiser mudar)</label>
          <input
            placeholder="Senha..."
            name="password"
            type="password"
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Field>
          <label>Repita a senha</label>
          <input
            placeholder="Repita a sua senha..."
            name="password2"
            type="password"
            onChange={this.handleChange}
          />
        </Form.Field>
        <Form.Button type="submit" secondary fluid>
          Atualizar dados
        </Form.Button>
      </Form>
    )
  }
}

export default FormuserInfo
