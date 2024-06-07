import { FormSelect } from 'react-bootstrap';

const Filter = ({ data }) => {
  return (
    <div className="d-flex justify-content-end align-items-center mb-4 pt-2 pb-3">
      <p className="small mb-0 me-2 text-muted">Filter</p>
      <FormSelect>
        {data.map((item, index) => {
          return (
            <option key={index} value={item.value}>
              {item.text}
            </option>
          );
        })}
      </FormSelect>
    </div>
  );
};
export default Filter;
