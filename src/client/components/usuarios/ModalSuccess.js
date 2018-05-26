import React from 'react'
import { Modal, Button, Icon, Header, Label } from 'semantic-ui-react'

const ModalSuccess = ({
  open,
  handleClose,
  handleConfirm,
  data: { name, email, roles, password }
}) => (
  <Modal
    open={open}
    onClose={handleClose}
    size="small"
    style={{ height: '400px' }}
  >
    <Header
      icon="exclamation"
      content="Confirmação"
      style={{ height: '80px' }}
    />
    <Modal.Content>
      <h2>
        Confirme os dados do novo usuário: <br />
      </h2>
      <h3>
        <b>Nome:</b> {name} <br />
        <b>E-mail:</b> {email} <br />
        <b>Setor(s):</b>{' '}
        {roles &&
          roles.map(s => {
            return <Label key={s}>{s}</Label>
          })}{' '}
        <br />
        <b>Senha:</b> {password} <br />
      </h3>
      <br />
      Copie estes dados e guarde-os em um lugar seguro.
    </Modal.Content>
    <Modal.Actions>
      <Button color="red" onClick={handleClose} inverted>
        <Icon name="x" /> Cancelar
      </Button>
      <Button color="green" onClick={handleConfirm} inverted>
        <Icon name="checkmark" /> Cadastrar
      </Button>
    </Modal.Actions>
  </Modal>
)

export default ModalSuccess
