// components/ToggleModeButton.tsx

import { useState, useEffect } from 'react';

const ToggleModeButton: React.FC = () => {
  const [darkMode, setDarkMode] = useState(() => {
    if (typeof window !== 'undefined') {
      const storedDarkMode = localStorage.getItem('darkMode');
      return storedDarkMode ? JSON.parse(storedDarkMode) : false;
    }
    return false;
  });

  useEffect(() => {
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  return (
    <button onClick={() => setDarkMode(!darkMode)}>
      Toggle Theme
    </button>
  );
};

export default ToggleModeButton;
