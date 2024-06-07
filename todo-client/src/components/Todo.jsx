import { MDBListGroup } from 'mdb-react-ui-kit';
import Checkbox from './Checkbox';
import TodoItem from './TodoItem';
import TodoAction from './TodoAction';

const Todo = () => {
  return (
    <MDBListGroup horizontal className="rounded-0 bg-transparent">
      <Checkbox name="flexcheck" id="flexcheckid" />
      <TodoItem text="Buy groceries for next week" />
      <TodoAction />
    </MDBListGroup>
  );
};
export default Todo;
