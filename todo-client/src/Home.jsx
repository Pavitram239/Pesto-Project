import {
  CenteredModal,
  Container,
  CreateTask,
  Heading,
  TodoList,
} from './components';
import './App.css';
import { useState } from 'react';
import customFetch from './utils/customFetch';
import { toast } from 'react-toastify';
import { useLoaderData } from 'react-router-dom';
import TaskContext from './utils/taskContext';

export const loader = async ({ request }) => {
  try {
    const { data } = await customFetch('/tasks');
    return data;
  } catch (error) {
    toast.error(error);
  }
};

export const action = async ({ request }) => {
  const formData = await request.formData();
};

const Home = () => {
  const tasks = useLoaderData();
  const [show, setShow] = useState(false);
  const openModal = () => {
    setShow(true);
  };

  const closeModal = () => {
    setShow(false);
  };
  return (
    <Container>
      <CenteredModal show={show} onHide={closeModal} />
      <Heading />
      <hr />
      <CreateTask openModal={openModal} />
      <hr />
      <TaskContext.Provider value={tasks}>
        <TodoList />
      </TaskContext.Provider>
    </Container>
  );
};
export default Home;
