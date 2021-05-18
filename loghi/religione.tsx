import React from 'react';
import { a, Spring } from 'react-spring';
import {
  UccelloSuperiore, UccelloInferiore, FoglieUlivo, MartelloMarrone, MartelloChiaro, Zampe, RamoUlivo,
} from '../public/images/logoreligione/index';
import styles from './loghi.module.scss';

interface LogoProps {
  otherClass?: string,
  animation: boolean,
  onClick(): void,
}

export default function LogoReligione({ otherClass, animation, ...other }:LogoProps) {
  return <>
    <div className={styles.logo_religione}>
      {/* JUMP */}
      <Spring from={{ top: 0, left: 0, transform: 'rotate(0deg)' }} to={{ top: animation ? -15 : 0, left: animation ? -15 : 0, transform: animation ? 'rotate(-5deg)' : 'rotate(0deg)' }} delay={500}>
        {(styless) => <>
          <a.div style={styless}>
            <UccelloSuperiore className={styles.sup}/>
            <UccelloInferiore className={styles.inf}/>
            <Zampe className={styles.zampe} />
          </a.div>
        </>
        }
      </Spring>
      {/* VERSO DESTRA */}
      <Spring from={{ top: 0, left: 0, transform: 'rotate(0deg)' }} to={{ top: animation ? -35 : 0, left: animation ? -16 : 0, transform: animation ? 'rotate(30deg)' : 'rotate(0deg)' }} delay={500}>
        {(ulivo) => <>
          <a.div style={ulivo}>
            <FoglieUlivo className={styles.foglie}/>
            <RamoUlivo className={styles.ramo}/>
          </a.div>
        </>}
      </Spring>
      {/* MARTELLO DOWN */}
      <Spring from={{ top: 0, left: 0, transform: 'rotate(0deg)' }} to={{ top: animation ? -5 : 0, left: 0, transform: animation ? 'rotate(5deg)' : 'rotate(0deg)' }} delay={500}>
        {(martello) => <>
          <a.div style={martello}>
            <MartelloChiaro className={styles.martelloc}/>
            <MartelloMarrone className={styles.martellos}/>
          </a.div>
        </>}
      </Spring>
    </div>
  </>;
}
