import React from 'react';
import Head from 'next/head';
import Home from '../components/Home';
import Religione from '../components/Religione';

export default function religione() {
  return (<>
    <Head>
      <meta name='viewport'
        content='width=device-width, initial-scale=1.0, maximum-scale=1.0,
     user-scalable=0' />
    </Head>
    <Home>
      <Religione />
    </Home>
  </>
  );
}
