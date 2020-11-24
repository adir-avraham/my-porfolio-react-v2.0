import React from 'react';
import './App.css';
import Home from './components/home';

import { create } from 'jss';
import rtl from 'jss-rtl';
import { StylesProvider, jssPreset, ThemeProvider } from '@material-ui/core/styles';

import CustomTheme from './assets/CustomTheme';
import FieldPage from './components/fields-page';
import About from './components/about-page';
import PersistentDrawerRight from './components/navbar';
import OurProcess from './components/our-process';
import Navbar from './components/navbar';

// Configure JSS
const jss = create({ plugins: [...jssPreset().plugins, rtl()] });


function App() {
  return (
    <ThemeProvider theme={CustomTheme}>
    <StylesProvider jss={jss}>
    <PersistentDrawerRight/>
      <Navbar/>
      <Home/>
      <FieldPage/>
      <OurProcess/>
      <About/>
    </StylesProvider>
    </ThemeProvider>
  );
}

export default App;
