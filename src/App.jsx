import { ContactsProvider } from './context/ContactsContext';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import Filter from './components/Filter';
import { Container, Title, SubTitle } from './components/AppContainer.jsx';

export default function App() {
  return (
    <ContactsProvider>
      <Container>
        <Title>Phonebook</Title>
        <ContactForm />

        <SubTitle>Contacts</SubTitle>
        <Filter />
        <ContactList />
      </Container>
    </ContactsProvider>
  );
}
