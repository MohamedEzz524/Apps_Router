import { useEffect, useState, ReactNode } from 'react';
import ThemeContext from '../context/ThemeContext';
import { ThemeType } from '../types/global/Theme';

interface ThemeProviderProps {
  children: ReactNode;
}

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  const [theme, setTheme] = useState<ThemeType>(() => {
    const savedTheme = localStorage.getItem('theme');
    const preferredTheme = window.matchMedia(
      '(prefers-color-scheme: light)',
    ).matches;
    return savedTheme
      ? (savedTheme as ThemeType)
      : preferredTheme
        ? 'light'
        : 'dark';
  });

  useEffect(() => {
    localStorage.setItem('theme', theme);

    const root = document.documentElement;
    root.classList.remove('dark', 'light');
    root.classList.add(theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
