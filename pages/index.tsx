import React, { useEffect, useState } from 'react';
import Head from 'next/head';
// import video from '../public/videos/landing.mp4';
import { useSpring, animated } from 'react-spring';
import {
  ForbiceDestraSVG, ForbiceSinistraSVG, LineaTraggiataSVG, NuvolaSVG, ScrittaSVG,
} from '../public/images/logo/logo';
import styles from '../styles/logotry.module.scss';

export default function Home() {
  const [toggle, settoggle] = useState(false);
  const styless = useSpring({ color: toggle ? 'red' : 'blue', fontSize: toggle ? '10px' : '72px' });
  useEffect(() => {
    const int = setInterval(() => {
      settoggle(!toggle);
    }, 1000);
    return () => clearInterval(int);
  });
  return (
    <>
      <Head>
        <title>Il mondo che vorrei</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {/* <video src={video} style={{ width: '100vw', height: '100vh' }} autoPlay loop muted /> */}
      <animated.div style={styless}>Vonazzo scema</animated.div>
      <ForbiceDestraSVG className={styles.forbiceDestra} />
      <ForbiceSinistraSVG className={styles.forbiceSinistra} />
      <LineaTraggiataSVG className={styles.lineatratteggiata} />
      <NuvolaSVG className={styles.nuvola}/>
      <ScrittaSVG className={styles.scritta}/>
    </>
  );
}
