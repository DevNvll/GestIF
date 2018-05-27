import React from 'react'
import { Table, Button, Label } from 'semantic-ui-react'

function addZero(i) {
  if (i < 10) {
    i = '0' + i
  }
  return i
}

const TableListaUsuarios = ({ users, deleteUser }) => (
  <Table celled selectable striped singleLine attached striped basic="very">
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>Nome</Table.HeaderCell>
        <Table.HeaderCell>E-mail</Table.HeaderCell>
        <Table.HeaderCell>Setor</Table.HeaderCell>
        <Table.HeaderCell>Data criação</Table.HeaderCell>
        <Table.HeaderCell>Deletar?</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {users.map(user => {
        return (
          <Table.Row key={user._id}>
            <Table.Cell>{user.name}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
            <Table.Cell>
              {user.roles.map(s => {
                return <Label key={s}>{s}</Label>
              })}
            </Table.Cell>
            <Table.Cell>
              {new Date(user.joined).toLocaleDateString('en-GB')} às{' '}
              {new Date(user.joined).getHours() +
                ':' +
                addZero(new Date(user.joined).getMinutes())}
            </Table.Cell>
            <Table.Cell>
              <Button
                color="red"
                size="tiny"
                compact
                onClick={() => deleteUser(user._id, user.name)}
                icon="x"
                content="Deletar"
                fluid
                labelPosition="left"
              />
            </Table.Cell>
          </Table.Row>
        )
      })}
    </Table.Body>
  </Table>
)

export default TableListaUsuarios
