import List from './List';

const TodoList = () => {
  return (
    <div className="row my-3 d-flex flex-column gap-2">
      <div className="col p-2" style={{ textAlign: 'center' }}>
        <select style={{ borderRadius: '5px' }}>
          <optgroup label="This is a group">
            <option value="12" defaultValue="this is item1">
              This is item 1
            </option>
            <option value="13">This is item 2</option>
            <option value="14">This is item 3</option>
          </optgroup>
        </select>
      </div>
      <div className="col p-2" style={{ textAlign: 'center' }}>
        <List />
      </div>
    </div>
  );
};
export default TodoList;
