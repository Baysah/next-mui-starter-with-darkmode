import { useEffect, useState } from 'react';
import { ThemeProvider } from '@mui/material';
import { useTheme } from 'next-themes';
import { lightTheme, darkTheme } from './theme';

function PageProvider({ children }) {
  const { resolvedTheme } = useTheme();
  const [currentTheme, setCurrentTheme] = useState(lightTheme);

  useEffect(() => {
    resolvedTheme === 'light'
      ? setCurrentTheme(lightTheme)
      : setCurrentTheme(darkTheme);
  }, [resolvedTheme]);

  return <ThemeProvider theme={currentTheme}>{children}</ThemeProvider>;
}

export default PageProvider;
