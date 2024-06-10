const CreateTask = ({ openModal }) => {
  return (
    <div className="row my-3 d-flex flex-column gap-2">
      <div className="col p-2" style={{ textAlign: 'center' }}>
        <button className="btn btn-primary" type="button" onClick={openModal}>
          Add Task
        </button>
      </div>
    </div>
  );
};
export default CreateTask;
