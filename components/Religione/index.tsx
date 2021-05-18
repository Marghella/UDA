import React, { useEffect, useState } from 'react';
import { Spring, a, config } from 'react-spring';
import LogoReligione from '../../loghi/religione';
import styles from './styles/Religione.module.scss';
import useWindowSize from '../../hooks/useWindowSize';

import {
  UccelloSuperiore, UccelloInferiore, FoglieUlivo, MartelloMarrone, MartelloChiaro, Zampe, RamoUlivo,
} from '../../public/images/logoreligione/index';

export default function Religione() {
  const [animation, setAnimation] = useState(false);
  const [finishedA, setFinishedA] = useState(false);
  useEffect(() => {
    const i = setTimeout(() => {
      setAnimation(true);
    }, 4000);
    const z = setTimeout(() => {
      setFinishedA(true);
    }, 8000);
    return () => {
      clearTimeout(i);
      clearTimeout(z);
    };
  }, []);
  return (
    <div className={styles.main}>
      <div className={styles.relative}>
        <div className={styles.logo_religione}>
          <Spring>
            {() => <>

            </>}
          </Spring>
          {/* JUMP */}
          <Spring from={{
            top: 0, left: 0, transform: 'rotate(0deg) translate(0px, 0px)', opacity: 0,
          }} to={{
            top: animation ? -15 : 0, left: animation ? -15 : 0, transform: animation ? 'rotate(-5deg) translate(-500px, -500px)' : 'rotate(0deg) translate(0px, 0px)', opacity: animation ? 0 : 1,
          }} delay={500}>
            {(styless) => <>
              <a.div style={styless}>
                <UccelloSuperiore className={styles.sup}/>
                <UccelloInferiore className={styles.inf}/>
                <Zampe className={styles.zampe} />
              </a.div>
            </>
            }
          </Spring>
          {/* Ulivo */}
          <Spring from={{
            top: 0, left: 0, transform: 'rotate(0deg)', opacity: 0,
          }} to={{
            top: animation ? -35 : 0, left: animation ? -16 : 0, transform: animation ? 'rotate(30deg)' : 'rotate(0deg)', opacity: 1,
          }} delay={500} config={config.molasses}>
            {(ulivo) => <>
              <Spring from={{ opacity: 1 }} to={{ opacity: finishedA ? 0 : 1 }} config={config.molasses}>
                {(adieuulivo) => <>
                  <a.div style={{ ...ulivo, ...adieuulivo }}>
                    <FoglieUlivo className={styles.foglie}/>
                    <RamoUlivo className={styles.ramo}/>
                  </a.div>
                </>}
              </Spring>
            </>}
          </Spring>
          {/* MARTELLO DOWN */}
          <Spring from={{
            opacity: 0, top: 0, left: 0, transform: 'rotate(0deg) translate(0px, 0px)',
          }} to={{
            opacity: animation ? 0 : 1, top: animation ? -5 : 0, left: 0, transform: animation ? 'rotate(5deg) translate(0px, 500px)' : 'rotate(0deg) translate(0px, 0px)',
          }} delay={500} config={config.molasses}>
            {(martello) => <>
              <a.div style={martello}>
                <MartelloChiaro className={styles.martelloc}/>
                <MartelloMarrone className={styles.martellos}/>
              </a.div>
            </>}
          </Spring>
        </div>
      </div>
      <Spring from={{
        display: 'none', opacity: 0,
      }}
      to={{
        display: finishedA ? 'flex' : 'none', opacity: finishedA ? 1 : 0,
      }}
      delay={1000}>
        {(ulivogrande) => <>
          <Spring from={{ width: 100, height: 145 }} to={{ width: finishedA ? 1000 : 100, height: finishedA ? 1450 : 145 }} delay={5000}>
            {(zoomulivo) => <>
              <a.div className={styles.ulivoPrincipale} style={ulivogrande}>
                <a.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3.03in"
                  height="3.22in"
                  viewBox="0 0 303 322"
                  className={styles.foglie}
                  style={zoomulivo}
                >
                  <path
                    d="M136 0c9 2.87 16.13 12.29 21.14 20 13.77 21.22 16.79 41.45 18.35 66 .64 10.15-3.15 25.24-16.49 21.43-2.01-.57-3.37-1.39-4.99-2.71-7.3-5.94-12.79-17.97-16.06-26.72-8.57-22.91-14.41-55.49-1.95-78zm163 20c-.27 29.34-27.92 58.63-51 73.66-6.25 4.06-15.45 9.27-23 9.73-9 .55-14.6-3.98-13.66-13.39 1.05-10.67 9.94-22.04 16.58-30C245.38 39.08 270.6 20 299 20zM57.6 52.06c6.41-2.14 19.47 3.73 25.4 6.7 22.24 11.12 41.77 30.73 54.13 52.24 4.57 7.95 14.59 27.81 4.65 35.26-8.92 6.7-24.28-2.11-31.78-7.28-21.43-14.8-39.47-35.64-49-59.98-2.44-6.24-7.65-21.15-3.4-26.94zM6.06 120.57c5.05-.94 13.55-.63 18.94-.57 24.73.29 52.87 15.08 72 29.89 6.33 4.9 15.13 13.41 17.75 21.11 2.54 7.45.18 14.33-7.75 16.7-8.6 2.57-19.56.09-28-2.42-19.77-5.89-41.28-16.74-56-31.28-7.28-7.2-12.72-12.88-17.69-22-2.52-4.64-5.21-8.69.75-11.43zm234.94-.14c12.37-1.24 34.73 3.97 46 9.35 3.37 1.62 12.07 5.8 11.55 10.27-.48 4.23-9.02 8.48-12.55 10.17-12.98 6.19-31.63 9.94-46 9.78-10.98-.13-28.81-2.18-39-6.06-5.47-2.09-11.64-5.58-12.62-11.94-1.14-7.39 5.69-12.23 11.62-14.77 7.78-3.33 19.53-5.56 28-6.14l13-.66zM272 231c-6.23 2.6-12.32 3.07-19 3-29.19-.33-62.65-15.72-84-35.17-8.39-7.64-20.69-26.48-3-32.03 2.98-.93 6.86-.83 10-.8 10 .12 21.74 3.93 31 7.6 18.68 7.41 32.64 15 47 29.4 7.78 7.81 15.43 17.04 18 28zm-142-20.47c10.52-1.64 20.72 4.38 29 10.19 17.56 12.33 35.28 30.87 44.74 50.28 3.5 7.18 8.44 20.12 9.09 28 .46 5.62-1.17 7.33-6.83 6.82-7.42-.66-17.37-5.21-24-8.58-21.8-11.08-37.42-28.07-50.79-48.24-6.39-9.63-18.1-32.93-1.21-38.47z"
                  />
                </a.svg>
                <a.svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="3.03in"
                  height="3.22in"
                  viewBox="0 0 303 322"
                  className={styles.ramo}
                  style={zoomulivo}
                >
                  <path
                    d="M210 89c4.05 8.77-.66 6.45 9 15-11.76 8.9-25.35 23.35-36 34-37.15 37.15-69.23 79.94-92.75 127-6.29 12.58-11.8 25.66-16.25 39-1.06 3.19-4.07 14.39-6.51 15.94-2.8 1.77-11.55-1.69-14.49-2.94 3.15-15.63 17.33-49.15 24.75-64 24.17-48.34 57.91-91.28 95.42-129.91l7.83-7.13 12-11.79L210 89z"
                  />
                </a.svg>
              </a.div>
            </>}
          </Spring>
        </>}
      </Spring>

    </div>
  );
}
