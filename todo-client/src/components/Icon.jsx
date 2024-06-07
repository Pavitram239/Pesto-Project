import { MDBTooltip, MDBIcon } from 'mdb-react-ui-kit';

const Icon = ({ icon, color }) => {
  return (
    <MDBTooltip tag="a" wrapperProps={{ href: '#!' }} title="Edit todo">
      <MDBIcon fas icon={icon} className="me-3" color={color} />
    </MDBTooltip>
  );
};
export default Icon;
