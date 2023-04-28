import { useState } from 'react';
import Container from './components/Container';
import GlobalStyle from './global/styles/global';
import { darkTheme, lightTheme } from './global/styles/theme';

import { ThemeProvider } from 'styled-components';

function App() {
  const [theme, setTheme] = useState(darkTheme);

  const handleChangeTheme = function (){
    setTheme(theme === darkTheme ? lightTheme : darkTheme);
  }

  return (
    <ThemeProvider theme={theme}>
      <Container changeTheme={handleChangeTheme}/>
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
