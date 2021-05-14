import React from 'react';
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

export default function LogoStoria(props) {
  return <>
    <div className={styles.logo_storia}>
      <BracciaDestra fill='black' />
      <BracciaSinistra fill='black' />
      <CoccardaBianca fill='white' />
      <CoccardaCentro />
      <CoccardaVerde fill='green'/>
      <CoccardaRosso fill='red'/>
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
      <ScrittaDestra fill='#a17048'/>
      <ScrittaDestra1 fill='#5a2811'/>
      <ScrittaSinistra fill='#a17048'/>
      <ScrittaSinistra1 fill='#5a2811'/>
      <ManoDestra fill='#c6c67c' />
      <SostenitoreDestro2 fill='#1f1009' />
      <SostenitoreDestro3 fill='#1f1009' />
      <ManoSinistra fill='#c6c67c' />
      <SostenitoreSinistro2 fill='#1f1009' />
      <SostenitoreSinistro3 fill='#1f1009' />
    </div>
  </>;
}
