import React from 'react'
import Link from 'next/link'
import { Table, Button, Label, Icon } from 'semantic-ui-react'

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
        <Table.HeaderCell>ID</Table.HeaderCell>
        <Table.HeaderCell>Nome</Table.HeaderCell>
        <Table.HeaderCell>E-mail</Table.HeaderCell>
        <Table.HeaderCell>Setores</Table.HeaderCell>
        <Table.HeaderCell>Data criação</Table.HeaderCell>
        <Table.HeaderCell>Deletar?</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
      {users.map(user => {
        return (
          <Table.Row key={user._id}>
            <Table.Cell collapsing>{user._id}</Table.Cell>
            <Table.Cell>{user.name}</Table.Cell>
            <Table.Cell>{user.email}</Table.Cell>
            <Table.Cell>
              {user.roles.map(s => {
                return <Label key={s}>{s}</Label>
              })}
            </Table.Cell>
            <Table.Cell collapsing>
              {new Date(user.joined).toLocaleDateString('en-GB')} às{' '}
              {new Date(user.joined).getHours() +
                ':' +
                addZero(new Date(user.joined).getMinutes())}
            </Table.Cell>
            <Table.Cell collapsing>
              <Button.Group size="tiny">
                <Link href={'?user=' + user._id}>
                  <Button color="grey" size="tiny" compact content="Editar" />
                </Link>
                <Button.Or text="ou" />
                <Button
                  compact
                  onClick={() => deleteUser(user._id, user.name)}
                  content="Deletar"
                  color="red"
                />
              </Button.Group>
            </Table.Cell>
          </Table.Row>
        )
      })}
    </Table.Body>
  </Table>
)

export default TableListaUsuarios
