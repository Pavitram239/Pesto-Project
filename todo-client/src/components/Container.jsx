import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTooltip,
} from 'mdb-react-ui-kit';

const Container = ({ children }) => {
  return (
    <MDBContainer className="py-5">
      <MDBRow className="d-flex justify-content-center align-items-center h-100">
        <MDBCol>
          <MDBCard
            id="list1"
            style={{ borderRadius: '.75rem', backgroundColor: '#eff1f2' }}
          >
            <MDBCardBody className="py-4 px-4 px-md-5">{children}</MDBCardBody>
          </MDBCard>
        </MDBCol>
      </MDBRow>
    </MDBContainer>
  );
};
export default Container;
