import ListItem from './ListItem';

const tasks = [
  { title: 'task', description: 'description', status: 'pending' },
];

const List = () => {
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
