import React from 'react';
import styled, { ThemeProvider } from 'styled-components';
import { lightTheme, darkTheme } from './theme';
import { useDarkMode } from './useDarkMode';
import { GlobalStyles } from './global';
import { Button } from './button';

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

function App() {
  const [theme, toggleTheme, componentMounted] = useDarkMode();

  const themeMode = theme === 'light' ? lightTheme : darkTheme;

  if (!componentMounted) {
    return <div />;
  }

  return (
    <ThemeProvider theme={themeMode}>
      <>
        <GlobalStyles />
        <Container>
          <div style={{ marginRight: 20 }}>
            <Button theme={theme} onClick={toggleTheme} text="Toggle theme" />
          </div>
          <div style={{ marginRight: 20 }}>
            <Button theme={theme} onClick={toggleTheme} text="Another Toggle" />
          </div>
          <div style={{ marginRight: 20 }}>
            <Button theme={theme} onClick={toggleTheme} text="Boom Shaka" />
          </div>
          <div style={{ marginRight: 20 }}>
            <Button theme={theme} onClick={toggleTheme} text="Laka" />
          </div>
        </Container>
      </>
    </ThemeProvider>
  );
}

export default App;
