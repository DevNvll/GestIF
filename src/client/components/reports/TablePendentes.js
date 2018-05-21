import React from 'react'
import TableItem from './TableItem'
import { Table } from 'semantic-ui-react'

const Pendentes = ({ reports, resolvido }) => {
  return (
    <Table celled selectable attached style={{ marginLeft: '0px' }}>
      <Table.Header>
        <Table.Row>
          <Table.HeaderCell>ID da máquina</Table.HeaderCell>
          <Table.HeaderCell>Sala</Table.HeaderCell>
          <Table.HeaderCell>Descrição do problema</Table.HeaderCell>
          <Table.HeaderCell>Autor do report</Table.HeaderCell>
          <Table.HeaderCell>Data</Table.HeaderCell>
          <Table.HeaderCell>Status</Table.HeaderCell>
          <Table.HeaderCell>Ações</Table.HeaderCell>
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {reports.map(report => {
          const { maquina, descricao, lab, nome, status, _id, data } = report
          return (
            <TableItem
              key={_id}
              maquina={maquina}
              descricao={descricao}
              nome={nome}
              lab={lab}
              id={_id}
              data={data}
              resolvido={resolvido}
            />
          )
        })}
      </Table.Body>
    </Table>
  )
}

export default Pendentes
