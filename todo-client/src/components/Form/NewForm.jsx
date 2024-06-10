import { Form } from 'react-bootstrap';
import FormInput from './FormInput';
import FormSelect from './FormSelect';

const NewForm = () => {
  return (
    <Form>
      <FormInput type="text" label="title" />
      <FormInput textarea label="description" />
      <FormSelect />
    </Form>
  );
};
export default NewForm;
