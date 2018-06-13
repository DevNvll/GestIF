import moment from 'moment'

const LogsTable = ({ logs }) => {
  return (
    <table className="table no-margin">
      <thead>
        <tr>
          <th>Tipo</th>
          <th>Data</th>
          <th>Descrição</th>
        </tr>
      </thead>
      <tbody>
        {logs.map(l => {
          return (
            <tr key={l._id}>
              <td>
                <span
                  className="label"
                  style={{ backgroundColor: l.color || '#1bff80' }}
                >
                  {l.type}
                </span>
              </td>
              <td>{moment(l.data).format('DD/MM/YY [às] HH:mm')}</td>
              <td>{l.descricao}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}

export default LogsTable
