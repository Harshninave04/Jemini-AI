'use client';
import React, { createContext, useState } from 'react';

const Context = createContext();
const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');
  const toggle = () => setTheme(theme === 'dark' ? 'light' : 'dark');
  const contextValue = {
    theme,
    toggle,
  };
  return (
    <Context.Provider value={contextValue}>
      <div className={theme}>{children}</div>
    </Context.Provider>
  );
};

export default ContextProvider;
