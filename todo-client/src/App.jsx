import React from 'react';
import './App.css';
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTooltip,
} from 'mdb-react-ui-kit';
import Filter from './components/Filter';
import Todo from './components/Todo';
import Container from './components/Container';
import Input from './components/Input';
import Title from './components/Title';

export default function App() {
  return (
    <Container>
      <Title />
      <Input />
      <hr className="my-4" />
      <Filter
        data={[
          { text: 'All', value: 1 },
          { text: 'Completed', value: 2 },
          { text: 'Active', value: 3 },
          { text: 'Has due date', value: 4 },
        ]}
      />

      <Todo />
    </Container>
  );
}
