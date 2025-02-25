import { useState, createContext } from 'react';

// Dark mode y light mode
const themes = {
  light: {
    background: 'white',
    text: '#273365',
  },
  dark: {
    background: '#222222',
    text: 'white',
  },
};

// Create context
const ThemeContext = createContext({
  theme: themes.light,
  toggleTheme: () => {},
});

// Provider
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState(themes.light);

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
