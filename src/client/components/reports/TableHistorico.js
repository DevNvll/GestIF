import React from 'react'
import { Table } from 'semantic-ui-react'
import TableItem from './TableItem'

const Historico = ({ reports, resolvido }) => {
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
        </Table.Row>
      </Table.Header>
      <Table.Body>
        {reports.map(report => {
          const {
            maquina,
            descricao,
            lab,
            nome,
            status,
            _id,
            data,
            dataResolvido
          } = report
          return (
            <TableItem
              key={_id}
              maquina={maquina}
              descricao={descricao}
              nome={nome}
              status={status}
              lab={lab}
              id={_id}
              dataResolvido={dataResolvido}
              data={data}
            />
          )
        })}
      </Table.Body>
    </Table>
  )
}

export default Historico
