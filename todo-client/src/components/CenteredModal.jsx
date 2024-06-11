import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
import NewForm from './Form/NewForm';
import { addTaskHandler } from '../utils/hooks';

const CenteredModal = (props) => {
  return (
    <Modal
      {...props}
      size="lg"
      aria-labelledby="contained-modal-title-vcenter"
      centered
    >
      <Modal.Header closeButton>
        <Modal.Title id="contained-modal-title-vcenter">
          {props.modalTitle}
        </Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <NewForm onHide={props.onHide} />
      </Modal.Body>
    </Modal>
  );
};
export default CenteredModal;
