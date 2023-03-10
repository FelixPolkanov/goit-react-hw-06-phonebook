import React from 'react';
import PropTypes from 'prop-types';
import { Contact, Button } from './ContactList.styled';
import { remove } from '../../redux/ToolkitSlice';
import { useDispatch, useSelector } from 'react-redux';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(state => state.contacts);
  const filter = useSelector(state => state.filter);

  const normalizedFilter = filter.toLowerCase();
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(normalizedFilter)
  );

  return (
    <ul>
      {visibleContacts.map(({ id, name, number }) => (
        <Contact key={id}>
          {name}: {number}
          <Button type="button" onClick={() => dispatch(remove(id))}>
            Delete
          </Button>
        </Contact>
      ))}
    </ul>
  );
};

export default ContactList;

ContactList.propTypes = {
  contacts: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      number: PropTypes.string.isRequired,
    }).isRequired
  ),
};