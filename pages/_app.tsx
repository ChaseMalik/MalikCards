import {
  createTheme,
  CssBaseline,
  ThemeProvider,
  useMediaQuery,
} from '@material-ui/core';
import { deepOrange, lightBlue } from '@material-ui/core/colors';
import { AppProps } from 'next/app';
import Head from 'next/head';
import { useEffect, useMemo } from 'react';
import '../styles/index.css';

export default function App({ Component, pageProps }: AppProps) {
  useEffect(() => {
    // Remove the server-side injected CSS.
    const jssStyles = document.querySelector('#jss-server-side');
    if (jssStyles) {
      jssStyles.parentElement?.removeChild(jssStyles);
    }
  }, []);

  const darkMode = useMediaQuery('(prefers-color-scheme: dark)');

  const type = useMemo(() => {
    return darkMode ? 'dark' : 'light';
  }, [darkMode]);

  const muiTheme = useMemo(() => {
    return createTheme({
      palette: {
        primary: deepOrange,
        secondary: lightBlue,
        type,
      },
    });
  }, [type]);

  return (
    <>
      <Head>
        <title>Malik Cards</title>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width"
        />
      </Head>
      <ThemeProvider theme={muiTheme}>
        <CssBaseline />
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}
