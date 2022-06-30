import PropTypes from 'prop-types';
const Filter = ({ value, onChange }) => (
  <div>
    <label htmlFor="filter">Find contacts by name</label>
    <input id="filter" value={value} onChange={onChange} />
  </div>
);
Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
