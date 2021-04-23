import React, { useEffect, useState } from 'react';
import Head from 'next/head';
// import video from '../public/videos/landing.mp4';
import { useSpring, animated } from 'react-spring';

export default function Home() {
  const [toggle, settoggle] = useState(false);
  const styles = useSpring({ color: toggle ? 'red' : 'blue', fontSize: toggle ? '10px' : '72px' });
  useEffect(() => {
    setInterval(() => {
      settoggle(!toggle);
    }, 1000);
  });
  return (
    <>
      <Head>
        <title>Il mondo che vorrei</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <video src={video} style={{ width: '100vw', height: '100vh' }} autoPlay loop muted /> */}
      <animated.div style={styles}>Vonazzo scema</animated.div>
    </>
  );
}
