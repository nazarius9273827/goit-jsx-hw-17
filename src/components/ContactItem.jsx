import { useContacts } from '../context/ContactsContext';
import styled from 'styled-components';

const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px;
  border-bottom: 1px solid #eee;
`;

const Text = styled.span`
  font-size: 16px;
`;

const DeleteButton = styled.button`
  background: #e53935;
  color: white;
  border: none;
  padding: 6px 10px;
  border-radius: 4px;
  cursor: pointer;
  font-size: 14px;

  &:hover {
    background: #c62828;
  }
`;

export default function ContactItem({ id, name, number }) {
  const { deleteContact } = useContacts();

  return (
    <Item>
      <Text>{name}: {number}</Text>
      <DeleteButton onClick={() => deleteContact(id)}>Delete</DeleteButton>
    </Item>
  );
}
