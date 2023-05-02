import React, { useState } from 'react';
import Header from './componentes/Header';

import GlobalStyle from './global/styles/Global'
import { ThemeProvider } from 'styled-components';

import { darkTheme } from './global/styles/Theme';
import { lightTheme } from './global/styles/Theme';
import ProductPage from './componentes/ProductPage';


export default function App() {
  const [theme, setTheme] =useState(darkTheme);

  const handleTheme = function (){
    setTheme(theme === darkTheme ? lightTheme : darkTheme);
  }

  return (
    <ThemeProvider theme={theme}>
      <Header actualTheme={theme} changeTheme={handleTheme} />
      <ProductPage />
      <GlobalStyle />
    </ThemeProvider>
  );
}

