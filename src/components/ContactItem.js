import PropTypes from 'prop-types';
const ContactItem = ({ name, deleteContact, id, number }) => (
  <>
    <div>{name}: </div>
    <div>{number}: </div>
    <button type="button" onClick={() => deleteContact(id)}>
      &#215;
    </button>
  </>
);
ContactItem.propTypes = {
  name: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
  deleteContact: PropTypes.func.isRequired,
};

export default ContactItem;
