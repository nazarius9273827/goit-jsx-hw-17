import styles from './ContactItem.module.css';

function ContactItem({ id, name, number, onDelete }) {
  return (
    <li className={styles.item}>
      <span className={styles.name}>
        {name}: {number}
      </span>
      <button className={styles.button} onClick={() => onDelete(id)}>
        Delete
      </button>
    </li>
  );
}


export default ContactItem;
