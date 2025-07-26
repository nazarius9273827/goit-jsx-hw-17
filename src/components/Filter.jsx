import { useContacts } from '../context/ContactsContext';
import styled from 'styled-components';

const Label = styled.label`
  display: block;
  margin-bottom: 16px;
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 8px;
  border-radius: 6px;
  border: 1px solid #ccc;
`;

export default function Filter() {
  const { filter, setFilter } = useContacts();

  return (
    <Label>
      Find contacts by name:
      <Input
        type="text"
        value={filter}
        onChange={e => setFilter(e.target.value)}
      />
    </Label>
  );
}
