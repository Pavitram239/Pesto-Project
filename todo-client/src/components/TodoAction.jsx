import { MDBListGroupItem, MDBTooltip, MDBIcon } from 'mdb-react-ui-kit';
import Icon from './Icon';

const TodoAction = () => {
  return (
    <MDBListGroupItem className="ps-3 pe-0 py-1 rounded-0 border-0 bg-transparent">
      <div className="d-flex flex-row justify-content-end mb-1">
        <Icon icon="pencil-alt" color="info" />
        <Icon icon="trash-alt" color="danger" />
      </div>
    </MDBListGroupItem>
  );
};
export default TodoAction;
