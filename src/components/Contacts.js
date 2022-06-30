import PropTypes from 'prop-types';
import ContactItem from './ContactItem';
const Contacts = ({ contacts, deleteContact }) => (
  <ul>
    {contacts.map(({ name, id, number }) => (
      <li key={id}>
        <ContactItem
          name={name}
          deleteContact={deleteContact}
          id={id}
          number={number}
        />
      </li>
    ))}
  </ul>
);

Contacts.propTypes = {
  contacts: PropTypes.arrayOf(PropTypes.object).isRequired,
  deleteContact: PropTypes.func.isRequired,
};
export default Contacts;
