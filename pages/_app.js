import * as React from 'react';
import PropTypes from 'prop-types';
import Head from 'next/head';
import CssBaseline from '@mui/material/CssBaseline';
import { CacheProvider, css } from '@emotion/react';
import createEmotionCache from '../src/createEmotionCache';
import Layout from '../components/siteParts/Layout';
import '../src/styles/globals.css';
import { GlobalStyles } from '@mui/material';
import { ThemeProvider } from 'next-themes';
import PageProvider from '../src/PageProvider';

// Client-side cache, shared for the whole session of the user in the browser.
const clientSideEmotionCache = createEmotionCache();

export default function MyApp(props) {
  const { Component, emotionCache = clientSideEmotionCache, pageProps } = props;

  return (
    <ThemeProvider>
      <CacheProvider value={emotionCache}>
        <Head>
          <meta name="viewport" content="initial-scale=1, width=device-width" />
        </Head>
        <PageProvider>
          {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
          <CssBaseline />
          <GlobalStyles
            styles={css`
              :root {
                body {
                  background-color: #fff;
                  color: #121212;
                }
              }
              [data-theme='dark'] {
                body {
                  background-color: #121212;
                  color: #fff;
                }
              }
            `}
          />
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </PageProvider>
      </CacheProvider>
    </ThemeProvider>
  );
}

MyApp.propTypes = {
  Component: PropTypes.elementType.isRequired,
  emotionCache: PropTypes.object,
  pageProps: PropTypes.object.isRequired,
};
