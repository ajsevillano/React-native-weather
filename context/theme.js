import { useState, createContext } from 'react';

// Dark mode y light mode
const themes = {
  light: {
    background: { primary: 'white', secondary: '#f5f5f5' },
    text: '#273365',
    loadingIndicator: '#273365',
  },
  dark: {
    background: { primary: '#1B1B1B', secondary: '#222222' },
    text: 'white',
    loadingIndicator: '#9e9e9e',
  },
};

// Create context
const ThemeContext = createContext({
  theme: themes.light,
  toggleTheme: () => {},
});

// Provider
export const ThemeProvider = ({ children, initialTheme }) => {
  const [theme, setTheme] = useState(themes[initialTheme] || themes.light);

  const toggleTheme = () => {
    setTheme(prevTheme => (prevTheme === themes.light ? themes.dark : themes.light));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeContext;
