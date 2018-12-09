import './App.css';

import deepOrange from '@material-ui/core/colors/deepOrange';
import Grid from '@material-ui/core/Grid';
import { createMuiTheme, MuiThemeProvider } from '@material-ui/core/styles';
import React, { Component } from 'react';

import CustomLightbox from './components/CustomLightbox';
import Header from './components/Header';
import { HOPE, PEACE } from './constants/images';

const theme = createMuiTheme({
  palette: {
    primary: deepOrange,
  },
});

class App extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        <header>
          <Header />
        </header>
        <main className="app-container" style={{ padding: 12 }}>
          <Grid container spacing={24} alignItems="center" justify="center">
            <Grid item xs={12} md={6} lg={4}>
              {/* <Grid item xs={12} container justify="center"> */}
              <CustomLightbox images={HOPE} />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <CustomLightbox images={PEACE} />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <CustomLightbox images={HOPE} />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <CustomLightbox images={PEACE} />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <CustomLightbox images={HOPE} />
            </Grid>
            <Grid item xs={12} md={6} lg={4}>
              <CustomLightbox images={PEACE} />
            </Grid>
          </Grid>
        </main>
      </MuiThemeProvider>
    );
  }
}

export default App;
