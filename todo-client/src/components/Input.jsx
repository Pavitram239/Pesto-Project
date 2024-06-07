import { MDBCard, MDBCardBody, MDBBtn } from 'mdb-react-ui-kit';

const Input = () => {
  return (
    <div className="pb-2">
      <MDBCard>
        <MDBCardBody>
          <div className="d-flex flex-row align-items-center">
            <input
              type="text"
              className="form-control form-control-lg"
              id="exampleFormControlInput1"
              placeholder="Add new..."
            />
            <div>
              <MDBBtn>Add</MDBBtn>
            </div>
          </div>
        </MDBCardBody>
      </MDBCard>
    </div>
  );
};
export default Input;
