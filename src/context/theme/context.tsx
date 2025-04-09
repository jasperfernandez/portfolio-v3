import { createContext, useContext } from 'react';

interface ThemeContextType {
  theme: string;
  toggleTheme: () => void;
}

export const ThemeContext = createContext<ThemeContextType | null>(null);

export const useAppTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context)
    throw new Error('useAppTheme must be used inside ThemeContextProvider');
  return context;
};
