import Todo from './Todo';

const Todos = ({ todoItems }) => {
  return todoItems.map((todo, index) => {
    return <Todo key={index} todo={todo} />;
  });
};
export default Todos;
