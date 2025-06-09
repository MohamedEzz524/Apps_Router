import { createContext } from 'react';
import { ThemeContextType } from '../types/global/Theme';

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export default ThemeContext;
