import {
  CenteredModal,
  Container,
  CreateTask,
  Heading,
  TodoList,
} from './components';
import './App.css';
import { useState } from 'react';
const App = () => {
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
      <TodoList />
    </Container>
  );
};
export default App;
