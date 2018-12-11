import './App.css';

import deepOrange from '@material-ui/core/colors/deepOrange';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React, { Component } from 'react';

import CustomLightbox from './components/CustomLightbox';
import Header from './components/Header';
import { ALL_IMAGES } from './constants/images';

const theme = createMuiTheme({
  palette: {
    primary: deepOrange,
  },
  typography: {
    useNextVariants: true,
  },
});

class App extends Component {
  render() {
    const imageLinks = ALL_IMAGES.map((images) => {
      return (
        <Grid item xs={12} sm={6} lg={4} key={images[0].source}>
          <CustomLightbox images={images} />
        </Grid>
      );
    })
    return (
      <MuiThemeProvider theme={theme}>
        <header>
          <Header />
        </header>
        <main className="app-container main-container">
          <Grid container spacing={16} alignItems="center">
            {/* <Grid item xs={12} container justify="center"> */}
            {imageLinks}
          </Grid>
        </main>
      </MuiThemeProvider>
    );
  }
}

export default App;
