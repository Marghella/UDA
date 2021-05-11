import React from 'react';
import Head from 'next/head';
import Arte from '../../components/Arte';
import Home from '../../components/Home';

export default function artepage() {
  return (<>
    <Head>
      <meta name='viewport'
        content='width=device-width, initial-scale=1.0, maximum-scale=1.0,
     user-scalable=0' />
    </Head>
    <Home>
      <Arte />
    </Home>
  </>
  );
}
