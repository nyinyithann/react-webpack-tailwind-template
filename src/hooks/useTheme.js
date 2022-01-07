/* eslint-disable no-empty */
import { useState } from 'react';

const THEME_KEY = 'ReactTailwindTemplateThemeKey';

const useTheme = (defaultTheme) => {
  const [storedTheme, setStoredTheme] = useState(() => {
    try {
      return localStorage.getItem(THEME_KEY) ?? defaultTheme;
    } catch {
      return defaultTheme;
    }
  });

  const setTheme = (value) => {
    try {
      localStorage.setItem(THEME_KEY, value);
      setStoredTheme(value);
    } catch {}
  };

  return [storedTheme, setTheme];
};

export default useTheme;
