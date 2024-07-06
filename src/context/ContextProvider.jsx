'use client';
import React, { createContext, useState, useEffect } from 'react';

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light'); // Check localStorage on initial render

  const toggle = () => {
    const newTheme = theme === 'dark' ? 'light' : 'dark';
    setTheme(newTheme);
    localStorage.setItem('theme', newTheme); // Update localStorage
  };

  useEffect(() => {
    const handleSystemThemeChange = () => {
      if (prefersDarkMode()) {
        // Optional: Check system preference
        setTheme('dark');
      }
    };

    window.addEventListener('storage', handleSystemThemeChange); // Listen for localStorage changes (optional)

    return () => window.removeEventListener('storage', handleSystemThemeChange); // Cleanup on unmount
  }, []);
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
