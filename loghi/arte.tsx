import React from 'react';
import clsx from 'clsx';
import { a, Spring } from 'react-spring';
import {
  ForbiceSinistraSVG, NuvolaSVG, ForbiceDestraSVG, ScrittaSVG, LineaTraggiataSVG,
} from '../public/images/logoarte/index';
import styles from './loghi.module.scss';

interface LogoProps {
  otherClass?: string,
  animation: boolean,
  contrast?: boolean,
  other?: any,
}

export default function LogoArte({ otherClass, animation }:LogoProps) {
  return <>
    <div className={styles.logo}>
      <ForbiceDestraSVG className={clsx(styles.green)}/>
      <Spring from={{ transform: 'rotateZ(0deg)' }} to={{ transform: animation ? 'rotateZ(-15deg)' : 'rotateZ(0deg)' }} delay={500}>
        {(styless) => <a.div style={styless} className={styles.l}><ForbiceSinistraSVG className={clsx(styles.green, styles.cut)} /></a.div>}
      </Spring>
      <LineaTraggiataSVG className={clsx(styles.green)}/>
      <NuvolaSVG className={clsx(styles.green)}/>
      <ScrittaSVG className={clsx(styles.blu)} />
    </div>
  </>;
}
