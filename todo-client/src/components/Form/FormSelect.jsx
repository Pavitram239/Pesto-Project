import { Form } from 'react-bootstrap';

const FormSelect = () => {
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
      <Form.Label>Status</Form.Label>
      <Form.Select aria-label="Default select example">
        <option>Open this select menu</option>
        <option value="pending">pending</option>
        <option value="">Two</option>
        <option value="3">Three</option>
      </Form.Select>
    </Form.Group>
  );
};
export default FormSelect;
