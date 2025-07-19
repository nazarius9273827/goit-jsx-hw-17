import styles from './ContactList.module.css';
import ContactItem from './ContactItem';

function ContactList({ contacts, onDelete }) {
  return (
    <ul className={styles.list}>
      {contacts.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          id={id}
          name={name}
          number={number}
          onDelete={onDelete}
        />
      ))}
    </ul>
  );
}

export default ContactList;
