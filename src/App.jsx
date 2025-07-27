import { ContactsProvider } from './context/ContactsContext';
import ContactForm from './components/ContactForm';
import ContactList from './components/ContactList';
import useDarkMode from './hooks/useDarkMode';
import Filter from './components/Filter';
import { Container, Title, SubTitle } from './components/AppContainer.jsx';

export default function App() {
  const [darkMode, setDarkMode] = useDarkMode();

  return (
    <ContactsProvider>
      <Container>
        <button onClick={() => setDarkMode(!darkMode)}>
          {darkMode ? '🌙 Dark Mode On' : '☀️ Light Mode On'}
        </button>

        <Title>Phonebook</Title>
        <ContactForm />
        <SubTitle>Contacts</SubTitle>
        <Filter />
        <ContactList />
      </Container>
    </ContactsProvider>
  );
}