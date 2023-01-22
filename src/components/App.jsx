import { ContactForm } from './ContactForm';
import { ContactList } from './ContactList/ContactList';
import { Filter } from './Filter/Filter';
import { nanoid } from 'nanoid';
import { Title, TitleContacts, Wrapper } from './App.styled';
import { useState, useEffect } from 'react';


export function App() {
  const [contacts, setContacts] = useState(
    JSON.parse(localStorage.getItem('lsContacts')) ?? []
  );
  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('lsContacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const newContact = {
      id: nanoid(),
      name,
      number,
    };
    const currentName = name;
    const matchName = contacts.find(({ name }) => name === currentName);

    matchName
      ? alert(`${name} is already in your contacts!`)
      : setContacts([newContact, ...contacts]);
  };

  function getVisibleContacts() {
    const normalized = filter.toLowerCase();
    return contacts.filter(contact =>
      contact.name.toLowerCase().includes(normalized)
    );
  }

  const deleteContact = id => {
    setContacts(contacts.filter(el => el.id !== id));
  };

  function changeFilter(e) {
    setFilter(e.currentTarget.value);
  }

  const visibleContacts = getVisibleContacts();

  return (
    <Wrapper>
      <Title>Phonebook</Title>
      <ContactForm onSubmit={addContact} />
      <TitleContacts>Contacts:</TitleContacts>
      <Filter value={filter} onFilter={changeFilter} />
      <ContactList contacts={visibleContacts} deleteContact={deleteContact} />
    </Wrapper>
  );
}
