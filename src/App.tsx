import React from 'react';
import './App.css';
import Home from './components/home';

import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset, ThemeProvider } from '@material-ui/core/styles';

import CustomTheme from './assets/CustomTheme';
import FieldPage from './components/fields-page';
import About from './components/about-page';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });


function App() {
  return (
    <ThemeProvider theme={CustomTheme}>
    <StylesProvider jss={jss}>
    
      <Home/>
      <FieldPage/>
      <About/>
    </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
