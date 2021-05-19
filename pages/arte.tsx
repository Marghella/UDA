import React, { useState } from 'react';
import Head from 'next/head';
import Arte from '../components/Arte';
import Home from '../components/Home';

export default function artepage() {
  const [dynamicColor, setDynamicColor] = useState('blue');
  return (<>
    <Head>
      <meta name='viewport'
        content='width=device-width, initial-scale=1.0, maximum-scale=1.0,
     user-scalable=0' />
      <title>UDA: Arte</title>
    </Head>
    <Home dynamicColor={dynamicColor}>
      <Arte />
    </Home>
  </>
  );
}
