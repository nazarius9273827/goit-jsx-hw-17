import { useEffect } from 'react';
import useLocalStorage from './useLocalStorage';

export default function useDarkMode() {
  const [enabled, setEnabled] = useLocalStorage('dark-mode', false);

  useEffect(() => {
    if (enabled) {
      document.body.classList.add('dark-mode');
    } else {
      document.body.classList.remove('dark-mode');
    }
  }, [enabled]);

  return [enabled, setEnabled];
}
