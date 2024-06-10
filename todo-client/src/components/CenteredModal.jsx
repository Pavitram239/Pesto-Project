import Button from 'react-bootstrap/Button';
import { Modal } from 'react-bootstrap';
import NewForm from './Form/NewForm';

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
        <NewForm />
      </Modal.Body>
      <Modal.Footer>
        <Button className="btn-light" onClick={props.onHide}>
          Close
        </Button>
        <Button>create</Button>
      </Modal.Footer>
    </Modal>
  );
};
export default CenteredModal;
