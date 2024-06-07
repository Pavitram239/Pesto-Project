import { MDBListGroupItem } from 'mdb-react-ui-kit';

const TodoItem = ({ text }) => {
  return (
    <MDBListGroupItem className="px-3 py-1 d-flex align-items-center flex-grow-1 border-0 bg-transparent">
      {' '}
      <p className="lead fw-normal mb-0">{text}</p>
    </MDBListGroupItem>
  );
};
export default TodoItem;
