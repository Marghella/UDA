import React from 'react';
import { animated, Spring, config } from 'react-spring';
import clsx from 'clsx';
import {
  BracciaDestra, BracciaSinistra, CoccardaBianca, CoccardaCentro, CoccardaVerde, CoccardaRosso, CorniceOcchi, Iride, Occhi, Pergamenta1, Pergamenta2, Pergamenta3, Pergamenta4,
  Pergamenta5, Pergamenta6, Piede, ScrittaDestra, ScrittaDestra1, ScrittaSinistra, ScrittaSinistra1, ManoDestra,
  SostenitoreDestro2, SostenitoreDestro3, ManoSinistra, SostenitoreSinistro2, SostenitoreSinistro3,
} from '../public/images/logostoria/index';
import styles from './loghi.module.scss';

interface LogoProps {
  otherClass?: string,
  animation: boolean,
  other: any,
}

export default function LogoStoria({
  otherClass, animation, contrast, ...other
}:LogoProps) {
  // TODO (se ne ho voglia) ingrandire mani
  return <>
    <div className={clsx(styles.logo_storia, contrast && styles.contrast)}>
      <div className={styles.relative}>

        <div className={styles.coccarda}>
          <CoccardaBianca fill='white' />
          <CoccardaCentro fill='white'/>
          <CoccardaVerde fill='green'/>
          <CoccardaRosso fill='red'/>
        </div>

        <div className={styles.immobile}>
          <CorniceOcchi/>
          <Iride fill='black' />
          <Occhi fill='white'/>
          <Pergamenta1 fill='#b6ba79'/>
          <Pergamenta2 fill='#a6a56d'/>
          <Pergamenta3 fill='#5f5e3f'/>
          <Pergamenta4 fill='#bebc67'/>
          <Pergamenta5 fill='#bebc67' />
          <Pergamenta6 fill='#dddb8e' />
          <Piede fill='black'/>
        </div>
        <Spring to={{ transform: animation ? 'translate(0px,10px)' : 'translate(0px,0px)' }} config={config.default}>
          {(bracciodx) => <>
            <animated.div className={styles.bracciadestro} style={bracciodx}>
              <BracciaDestra fill='black' />
              <animated.div className={styles.manodx}>
                <ManoDestra fill='#c6c67c' />
                <SostenitoreDestro2 fill='#1f1009' />
                <SostenitoreDestro3 fill='#1f1009' />
                <ScrittaDestra fill='#a17048'/>
                <ScrittaDestra1 fill='#5a2811'/>
              </animated.div>
            </animated.div>
          </>}</Spring>
        <Spring to={{ transform: animation ? 'translate(0px,-10px)' : 'translate(0px,0px)' }}>
          {(bracciosx) => <>
            <animated.div className={styles.bracciasinistro} style={bracciosx}>
              <BracciaSinistra fill='black' />
              <animated.div className={styles.manosx}>
                <ScrittaSinistra fill='#a17048'/>
                <ScrittaSinistra1 fill='#5a2811'/>
                <ManoSinistra fill='#c6c67c' />
                <SostenitoreSinistro2 fill='#1f1009' />
                <SostenitoreSinistro3 fill='#1f1009' />
              </animated.div>
            </animated.div>
          </>}
        </Spring>
      </div>
    </div>
  </>;
}
