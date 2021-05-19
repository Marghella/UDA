import React, { useState } from 'react';
import Head from 'next/head';
import Home from '../components/Home';
import Crediti from '../components/Crediti';

export default function crediti() {
  const [dynamicColor, setDynamicColor] = useState('red');
  return (<>
    <Head>
      <title>Crediti</title>
      <link rel="icon" href="/favicon.ico" />
    </Head>
    <Home dynamicColor={dynamicColor}>
      <Crediti setDynamicColor={setDynamicColor}/>
    </Home>
  </>
  );
}
