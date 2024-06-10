const ListItem = ({ title, description, status }) => {
  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span>{title}</span>
      <span>{description}</span>
      <span>{status}</span>
      <div className="d-flex align-items-center gap-3">
        <i className="fa-solid fa-pencil text-primary"></i>
        <i className="fa-solid fa-trash text-danger"></i>
      </div>
    </li>
  );
};
export default ListItem;
