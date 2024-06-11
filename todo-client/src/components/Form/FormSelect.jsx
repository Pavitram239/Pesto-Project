import { Form } from 'react-bootstrap';
import { STATUS } from '../../../../utils/constants.js';
const FormSelect = ({ onChange, label }) => {
  return (
    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea3">
      <Form.Label>{label}</Form.Label>
      <Form.Select
        aria-label="Default select example"
        name={label}
        onChange={onChange}
        disabled
      >
        {Object.values(STATUS).map((item, index) => {
          return (
            <option key="index" value={item}>
              {item}
            </option>
          );
        })}
      </Form.Select>
    </Form.Group>
  );
};
export default FormSelect;
