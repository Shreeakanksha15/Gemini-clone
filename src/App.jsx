import React from 'react';
import Sidebar from './components/Sidebar/Sidebar';
import Main from './components/Main/Main';
import ThemeManager from './components/ThemeManager';

const App = () => {
  return (
    <div style={{ minHeight: '100vh', backgroundColor: 'var(--background-color)' }}>
      <header>
        <ThemeManager />
      </header>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <Main />
      </div>
    </div>
  );
};

export default App;
