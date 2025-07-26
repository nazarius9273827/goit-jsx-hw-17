import { useContacts } from '../context/ContactsContext';
import ContactItem from './ContactItem';
import styled from 'styled-components';

const List = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

export default function ContactList() {
  const { contacts, filter } = useContacts();

  const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <List>
      {filteredContacts.map(({ id, name, number }) => (
        <ContactItem key={id} id={id} name={name} number={number} />
      ))}
    </List>
  );
}
