import { useState, useRef, useEffect } from 'react';
import { useContacts } from '../context/ContactsContext';
import styled from 'styled-components';

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

const Label = styled.label`
  font-weight: 500;
`;

const Input = styled.input`
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

const Button = styled.button`
  width: 120px;
  padding: 8px;
  border: none;
  border-radius: 6px;
  background: #1976d2;
  color: white;
  cursor: pointer;
  transition: background 0.3s;

  &:hover {
    background: #125ea9;
  }
`;

export default function ContactForm() {
  const { addContact } = useContacts();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const nameInputRef = useRef(null);

  useEffect(() => {
    nameInputRef.current.focus();
  }, []);

  const handleChange = e => {
    const { name, value } = e.target;
    name === 'name' ? setName(value) : setNumber(value);
  };

  const handleSubmit = e => {
    e.preventDefault();
    addContact(name, number);
    setName('');
    setNumber('');
    nameInputRef.current.focus();
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Label>
        Name:
        <Input
          ref={nameInputRef}
          type="text"
          name="name"
          value={name}
          onChange={handleChange}
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Name may contain only letters, apostrophe, dash and spaces."
          required
        />
      </Label>

      <Label>
        Number:
        <Input
          type="tel"
          name="number"
          value={number}
          onChange={handleChange}
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
          required
        />
      </Label>

      <Button type="submit">Add contact</Button>
    </Form>
  );
}
