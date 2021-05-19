import React from 'react';
import Head from 'next/head';
import Home from '../../components/Home';
import Giochi from '../../components/Giochi';

export default function gioco() {
  return (<>
    <Head>
      <title>Video Giochi</title>
    </Head>
    <Home dynamicColor={'blue'}>
      <Giochi />
    </Home>
  </>
  );
}
