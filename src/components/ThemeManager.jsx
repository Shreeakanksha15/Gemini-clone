import React, { useState, useEffect } from 'react';

const ThemeManager = () => {
  const [theme, setTheme] = useState('default');
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.setAttribute('data-theme', 'dark');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
  }, [theme, darkMode]);

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: '10px 20px',
        backgroundColor: 'var(--background-color)',
        borderBottom: '1px solid var(--primary-color)',
      }}
    >
      <button
        style={{
          backgroundColor: darkMode ? 'var(--secondary-color)' : 'var(--primary-color)',
          color: 'var(--text-color)',
          border: 'none',
          padding: '10px 20px',
          borderRadius: '20px',
          fontSize: '14px',
          fontWeight: 'bold',
          cursor: 'pointer',
          transition: 'transform 0.2s ease, background-color 0.3s ease',
        }}
        onClick={() => setDarkMode(!darkMode)}
        onMouseOver={(e) => (e.target.style.transform = 'scale(1.05)')}
        onMouseOut={(e) => (e.target.style.transform = 'scale(1)')}
      >
        {darkMode ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>

      <select
        value={theme}
        onChange={(e) => {
          setTheme(e.target.value);
          setDarkMode(false);
        }}
        style={{
          padding: '10px',
          borderRadius: '20px',
          border: '1px solid var(--primary-color)',
          backgroundColor: 'var(--background-color)',
          color: 'var(--text-color)',
          fontSize: '14px',
          fontWeight: 'bold',
          cursor: 'pointer',
        }}
      >
        <option value="default">Default</option>
        <option value="solarized">Solarized</option>
        <option value="oceanic">Oceanic</option>
        <option value="forest">Forest</option>
        <option value="sunset">Sunset</option>
      </select>
    </div>
  );
};

export default ThemeManager;
