import { createContext, useContext, useEffect, useState } from 'react';
import { nanoid } from 'nanoid';

const ContactsContext = createContext();

const initialContacts = [
  { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
  { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
  { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
  { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
];

export const ContactsProvider = ({ children }) => {
  const [contacts, setContacts] = useState(() => {
    const saved = localStorage.getItem('contacts');
    return saved ? JSON.parse(saved) : initialContacts;
  });

  const [filter, setFilter] = useState('');

  useEffect(() => {
    localStorage.setItem('contacts', JSON.stringify(contacts));
  }, [contacts]);

  const addContact = (name, number) => {
    const isDuplicate = contacts.some(
      contact => contact.name.toLowerCase() === name.toLowerCase()
    );

    if (isDuplicate) {
      alert(`${name} is already in contacts`);
      return;
    }

    const newContact = { id: nanoid(), name, number };
    setContacts(prev => [newContact, ...prev]);
  };

  const deleteContact = id => {
    setContacts(prev => prev.filter(contact => contact.id !== id));
  };

  return (
    <ContactsContext.Provider
      value={{
        contacts,
        filter,
        addContact,
        deleteContact,
        setFilter,
      }}
    >
      {children}
    </ContactsContext.Provider>
  );
};

export const useContacts = () => useContext(ContactsContext);
