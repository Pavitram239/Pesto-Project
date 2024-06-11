import { useContext } from 'react';
import ListItem from './ListItem';
import TaskContext from '../utils/taskContext';

// const tasks = [
//   { title: 'task', description: 'description', status: 'pending' },
// ];

const List = () => {
  const tasks = useContext(TaskContext);
  return (
    <ul className="list-group">
      {tasks.map((task, index) => {
        return (
          <ListItem
            key={index}
            title={task.title}
            description={task.description}
            status={task.status}
          />
        );
      })}
    </ul>
  );
};
export default List;
