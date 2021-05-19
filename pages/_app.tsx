import React from 'react';
import { AppProps } from 'next/app';
import '../styles/globals.scss';
import Head from 'next/head';

function MyApp({ Component, pageProps }:AppProps) {
  <Head>
    <title>Il mondo che vorrei</title>
    <link rel="icon" href="/favicon.ico" />
  </Head>;
  return <Component {...pageProps} />;
}

export default MyApp;
