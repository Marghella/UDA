import React from 'react';
import Head from 'next/head';
import video from '../public/videos/landing.mp4';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <video src={video} style={{ width: '100vw', height: '100vh' }} autoPlay loop muted /> */}
      <div>Vonazzo scema</div>
    </>
  );
}
