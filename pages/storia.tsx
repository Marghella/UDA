import React from 'react';
import Head from 'next/head';
import Home from '../components/Home';
import Storia from '../components/Storia_Filosofia';

export default function storia() {
  return (<>
    <Head><title>Storia e Filosofia</title></Head>
    <Home>
      <Storia />
    </Home>
  </>
  );
}
