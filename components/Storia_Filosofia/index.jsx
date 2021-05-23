/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import {
  useSprings, animated, to as interpolate, Spring, config,
} from 'react-spring';
import { useDrag } from 'react-use-gesture';
import clsx from 'clsx';
import styles from './styles/Storia_Filosofia.module.scss';
import {
  BracciaDestra, BracciaSinistra, CoccardaBianca, CoccardaCentro, CoccardaVerde, CoccardaRosso, CorniceOcchi, Iride, Occhi, Pergamenta1, Pergamenta2, Pergamenta3, Pergamenta4,
  Pergamenta5, Pergamenta6, Piede, ScrittaDestra, ScrittaDestra1, ScrittaSinistra, ScrittaSinistra1, ManoDestra,
  SostenitoreDestro2, SostenitoreDestro3, ManoSinistra, SostenitoreSinistro2, SostenitoreSinistro3,
} from '../../public/images/logostoria/index';

let an = false;

const cards = [
  <section key={0} className={clsx(styles.mainUno, styles.absoluto)}>
    <section className={styles.coccarda}>
      <CoccardaBianca fill='white' />
      <CoccardaCentro fill='white'/>
      <CoccardaVerde fill='green'/>
      <CoccardaRosso fill='red'/>
    </section>

    <section className={styles.immobile}>
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
    </section>
    <Spring from={{ transform: 'translate(0px,0px)' }} to={{ transform: true ? 'translate(0px,10px)' : 'translate(0px,0px)' }} config={config.default} delay={2000}>
      {(bracciodx) => <>
        <animated.section className={styles.bracciadestro} style={bracciodx}>
          <BracciaDestra fill='black' />
          <animated.section className={styles.manodx}>
            <ManoDestra fill='#c6c67c' />
            <SostenitoreDestro2 fill='#1f1009' />
            <SostenitoreDestro3 fill='#1f1009' />
            <ScrittaDestra fill='#a17048'/>
            <ScrittaDestra1 fill='#5a2811'/>
          </animated.section>
        </animated.section>
      </>}</Spring>
    <Spring from={{ transform: 'translate(0px,0px)' }} to={{ transform: true ? 'translate(0px,-10px)' : 'translate(0px,0px)' }} delay={2000}>
      {(bracciosx) => <>
        <animated.section className={styles.bracciasinistro} style={bracciosx}>
          <BracciaSinistra fill='black' />
          <animated.section className={styles.manosx}>
            <ScrittaSinistra fill='#a17048'/>
            <ScrittaSinistra1 fill='#5a2811'/>
            <ManoSinistra fill='#c6c67c' />
            <SostenitoreSinistro2 fill='#1f1009' />
            <SostenitoreSinistro3 fill='#1f1009' />
          </animated.section>
        </animated.section>
      </>}
    </Spring>
  </section>,
  <div key={1} className={styles.mainUno}>
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {(vprops) => <>
        <animated.em style={vprops} className={styles.emquad}><i>L&apos;uomo è per natura un animale politico</i></animated.em>
      </>}
    </Spring>
  </div>,
  <div key={2} className={styles.mainUno}>
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {(vprops) => <>
        <animated.em style={vprops}><i>È evidente che, per tutto
il tempo in cui gli uomini vivono senza un potere comune che li tenga soggiogati, si
trovano in quella condizione chiamata guerra e questa guerra è tale che ogni uomo
è contro ogni uomo</i></animated.em>
      </>}
    </Spring>
  </div>,
  <div key={3} className={styles.mainUno}>
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {(vprops) => <>
        <animated.em style={vprops}>La costituzione Italiana e il fondamento sul lavoro</animated.em>
      </>}
    </Spring>
  </div>,
  <div key={4} className={styles.article}>

    <section>
      <section className={styles.title}>Articolo 35</section>
    </section>
    <section className={styles.flexCard}>
      <section className={styles.line}>
      </section>
      <section className={styles.text}>
      La Repubblica tutela il lavoro in tutte le sue forme ed applicazioni.
Cura la formazione e l'elevazione professionale dei lavoratori.
Promuove e favorisce gli accordi e le organizzazioni internazionali intesi ad affermare e regolare i diritti del lavoro.
Riconosce la libertà di emigrazione, salvo gli obblighi stabiliti dalla legge nell'interesse generale, e tutela il lavoro italiano all'estero.
      </section>
    </section>
  </div>,
  <div key={5} className={styles.article}><section>
    <section className={styles.title}>Articolo 37</section>
  </section>
  <section className={styles.flexCard}>
    <section className={styles.linered}>
    </section>
    <section className={styles.text}>
    La donna lavoratrice ha gli stessi diritti e, a parità di lavoro, le stesse retribuzioni che spettano al lavoratore.
Le condizioni di lavoro devono consentire l'adempimento della sua essenziale funzione familiare e assicurare alla madre e al bambino una speciale adeguata protezione.
La legge stabilisce il limite minimo di età per il lavoro salariato.
La Repubblica tutela il lavoro dei minori con speciali norme e garantisce ad essi, a parità di lavoro, il diritto alla parità di retribuzione.
    </section>
  </section></div>,
];

cards.reverse();

const to = (i) => ({
  x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100,
});
const from = (i) => ({
  x: 0, rot: 0, scale: 1.5, y: -1000,
});
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

setTimeout(() => {
  an = true;
}, 1000);

export default function Deck() {
  const [gone] = useState(() => new Set());
  const [props, set] = useSprings(cards.length, (i) => ({ ...to(i), from: from(i) }));
  const bind = useDrag(({
    args: [index], down, movement: [mx], direction: [xDir], velocity,
  }) => {
    const trigger = velocity > 0.2;
    const dir = xDir < 0 ? -1 : 1;
    if (!down && trigger) gone.add(index);
    set((i) => {
      if (index !== i) return;
      const isGone = gone.has(index);
      const x = isGone ? (200 + window.innerWidth) * dir : down ? mx : 0;
      const rot = mx / 100 + (isGone ? dir * 10 * velocity : 0);
      const scale = down ? 1.1 : 1;
      return {
        x, rot, scale, delay: undefined, config: { friction: 50, tension: down ? 800 : isGone ? 200 : 500 },
      };
    });
    if (!down && gone.size === cards.length) setTimeout(() => gone.clear() || set((i) => to(i)), 600);
  });
  return <>
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} config={config.molasses}>
      {(sprops) => <>
        <animated.div className={styles.main} style={sprops}>
          {props.map(({
            x, y, rot, scale,
          }, i) => (<>
            <animated.div key={i} style={{ x, y }}>
              {/* This is the card itself, we're binding our gesture to it (and inject its index so we know which is which) */}
              <animated.div {...bind(i)} style={{ transform: interpolate([rot, scale], trans) }}>
                {cards[i]}
              </animated.div>
            </animated.div>
          </>
          ))}
        </animated.div>
      </>}
    </Spring>
  </>;
}
