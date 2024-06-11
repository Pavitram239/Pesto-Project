import { toast } from 'react-toastify';
import { Button, ButtonGroup, Form } from 'react-bootstrap';
import FormInput from './FormInput';
import FormSelect from './FormSelect';
import { useState } from 'react';
import customFetch from '../../utils/customFetch.js';
import { useNavigate } from 'react-router-dom';
const NewForm = ({ onHide }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    title: '',
    description: '',
    status: '',
  });
  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      await customFetch.post('/tasks', formData);
      toast.success('task created', {
        autoClose: 3000,
      });
      onHide();
      navigate(0);
    } catch (error) {
      toast.error('please try again', {
        autoClose: 3000,
      });
    }
  };
  return (
    <Form method="POST" onSubmit={handleSubmit}>
      <FormInput type="text" label="title" onChange={handleChange} />
      <FormInput textarea label="description" onChange={handleChange} />
      <FormSelect onChange={handleChange} label="status" />
      <ButtonGroup className="" aria-label="Basic example">
        <Button className="btn-light" onClick={onHide}>
          close
        </Button>
        <Button type="submit">Add Task</Button>
      </ButtonGroup>
    </Form>
  );
};
export default NewForm;
