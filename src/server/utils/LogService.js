import Logs from '../models/Logs'

const Log = async (type, descricao, autor, color) => {
  if (!type || !descricao) throw new Error('Faltam parâmetros')
  const newLog = new Logs({ type, descricao, autor, color })
  const log = newLog.save()
  return log
}

export default Log
