import { Form } from 'react-bootstrap';

const FormInput = ({ type, label, textarea, onChange }) => {
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
      <Form.Label>{label}</Form.Label>
      {textarea ? (
        <Form.Control
          as="textarea"
          rows={3}
          placeholder={`enter ${label}`}
          name={label}
          onChange={onChange}
        />
      ) : (
        <Form.Control
          type={type}
          placeholder={`enter ${label}`}
          onChange={onChange}
          name={label}
        />
      )}
    </Form.Group>
  );
};
export default FormInput;
