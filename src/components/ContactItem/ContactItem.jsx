import React from 'react';
import PropTypes from 'prop-types';
import { Btn, Item } from './ContactItem.styled';

export function ContactItem ({ id, name, number, del }) {
  return <Item>
    <span>{name}: {number}</span>
    <Btn onClick={() => del(id)}>Delete</Btn>
  </Item>;
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  del: PropTypes.func.isRequired,
};