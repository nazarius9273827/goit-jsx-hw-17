import styles from './Filter.module.css';

function Filter({ value, onChange }) {
  return (
    <label className={styles.filterLabel}>
      Find contacts by name:
      <input
        className={styles.input}
        type="text"
        value={value}
        onChange={e => onChange(e.target.value)}
      />
    </label>
  );
}


export default Filter;
