import React, { useEffect, useState, useRef } from 'react';
import Head from 'next/head';
// import video from '../public/videos/landing.mp4';
import { useSpring, animated } from 'react-spring';
import clsx from 'clsx';
import {
  ForbiceDestraSVG, ForbiceSinistraSVG, LineaTraggiataSVG, NuvolaSVG, ScrittaSVG,
} from '../public/images/logo/logo';
import styles from '../styles/logotry.module.scss';

export default function Home() {
  const scissors = useRef(null);
  const [toggle, settoggle] = useState(false);
  const styless = useSpring({ color: toggle ? 'red' : 'blue', fontSize: toggle ? '10px' : '72px' });
  useEffect(() => {
    const int = setTimeout(() => {
      settoggle(true);
    }, 700);
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
      <ForbiceDestraSVG className={styles.forbiceDestra} ref={scissors}/>
      <ForbiceSinistraSVG className={clsx(styles.forbiceSinistra, toggle && styles.cut)} />
      <LineaTraggiataSVG className={styles.lineatratteggiata} />
      <div className={styles.buildnuvola}/>
      <NuvolaSVG className={styles.nuvola}/>
      <ScrittaSVG className={styles.scritta}/>
    </>
  );
}
