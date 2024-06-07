import { MDBListGroupItem, MDBCheckbox } from 'mdb-react-ui-kit';

const Checkbox = ({ value, id }) => {
  return (
    <MDBListGroupItem className="d-flex align-items-center ps-0 pe-3 py-1 rounded-0 border-0 bg-transparent">
      <MDBCheckbox name={id} value={value} id={id} defaultChecked />
    </MDBListGroupItem>
  );
};
export default Checkbox;
