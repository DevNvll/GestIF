import React from 'react'
import { Table, Button } from 'semantic-ui-react'

function addZero(i) {
  if (i < 10) {
    i = '0' + i
  }
  return i
}

const ListItem = ({
  maquina,
  descricao,
  status,
  nome,
  lab,
  id,
  resolvido,
  data,
  dataResolvido
}) => {
  return (
    <Table.Row warning={status === 0}>
      <Table.Cell>
        <a href="#">{maquina}</a>
      </Table.Cell>
      <Table.Cell>{lab}</Table.Cell>
      <Table.Cell>{descricao}</Table.Cell>
      <Table.Cell>{nome}</Table.Cell>
      <Table.Cell collapsing>
        {new Date(data).toLocaleDateString('en-GB')} às{' '}
        {new Date(data).getHours() + ':' + addZero(new Date(data).getMinutes())}
      </Table.Cell>
      <Table.Cell collapsing>
        {status === 1 ? (
          <React.Fragment>
            Resolvido em {new Date(dataResolvido).toLocaleDateString('en-GB')}{' '}
            às{' '}
            {new Date(dataResolvido).getHours() +
              ':' +
              addZero(new Date(dataResolvido).getMinutes())}
          </React.Fragment>
        ) : (
          'Pendente'
        )}
      </Table.Cell>
      {resolvido && (
        <Table.Cell collapsing>
          <Button
            color="green"
            size="tiny"
            onClick={() => resolvido(id)}
            icon="check"
            content="Marcar como resolvido"
            labelPosition="right"
          />
        </Table.Cell>
      )}
    </Table.Row>
  )
}

export default ListItem
