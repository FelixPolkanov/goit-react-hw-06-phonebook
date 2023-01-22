import React from 'react';
import PropTypes from 'prop-types';
import { Title, Input } from './Filter.styled';


export function Filter ({ value, onFilter }) {
  return (
    <>
      <Title>Find contacts by name</Title>
      <Input type='text' name='filter' value={value} onChange={onFilter} />
    </>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onFilter: PropTypes.func.isRequired,
};