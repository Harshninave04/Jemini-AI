'use client';
import run from '@/lib/jemini';
import React, { createContext, useState, useEffect } from 'react';

export const Context = createContext();

const ContextProvider = ({ children }) => {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light'); // Check localStorage on initial render
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [results, setResults] = useState([]);
  const [recentPrompt, setRecentPrompt] = useState('');
  const [displayResults, setDisplayResults] = useState(false);
  const [prevPrompt, setPrevPrompt] = useState([]);

  // Paragraph delay

  const paragraphDelay = (index, newWord) => {
    setTimeout(() => {
      setResults((prev) => prev + newWord);
    }, 70 * index);
  }

  // On submit
  const submit = async (prompt) => {
    setLoading(true);
    setResults('');
    setDisplayResults(true);
    setRecentPrompt(input);

    if (input && prompt) {
      setPrevPrompt((prev) => [...prev, input]);
    }

    const response = input ? await run(input) : await run(prompt);
    const boldResponse = response.split("**");
    let newArray = "";
    for (let i = 0; i < boldResponse.length; i++){
      if (i === 0 || i % 2 !== 1) {
        newArray += boldResponse[i];
      } else {
        newArray += `<b>${boldResponse[i]}</b>`;
      }
    }

    let newRes = newArray.split("*").join("</br>")
    let newRes2 = newRes.split(" ");

    const paragraphs = response.split('\n');
    for (let i = 0; i < newRes2.length; i++){
      const newWord = newRes2[i];
      paragraphDelay(i, newWord + " ");
    }
    setLoading(false)
    setInput("")
  };


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
    submit, 
    setInput, 
    input, 
    results,
    loading,
    displayResults,
    recentPrompt,
    prevPrompt,
    setPrevPrompt, 
    setRecentPrompt,
    setDisplayResults

  };
  return (
    <Context.Provider value={contextValue}>
      <div className={theme}>{children}</div>
    </Context.Provider>
  );
};

export default ContextProvider;
