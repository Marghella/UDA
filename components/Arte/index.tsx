import React, { useEffect, useRef, useState } from 'react';
import {
  Spring, animated, Transition, a,
} from 'react-spring';
import clsx from 'clsx';
import Image from 'next/image';
import {
  ForbiceDestraSVG, ForbiceSinistraSVG, LineaTraggiataSVG, NuvolaSVG, ScrittaSVG,
} from '../../public/images/logo/logo';
import styles from './styles/Arte.module.scss';

export default function Arte() {
  const scissors = useRef(null);
  const [toggle, settoggle] = useState(false);
  const [clickLogo, setClickLogo] = useState(0);
  const urlImages = [
    {
      url: '/images/esempi/bella.jpeg', width: 655, height: 131, key: 0,
    },
    {
      url: '/images/esempi/down.jpeg', width: 624, height: 163, key: 1,
    },
    {
      url: '/images/esempi/gallina.jpeg', width: 484, height: 160, key: 2,
    },
    {
      url: '/images/esempi/grassotta.jpeg', width: 532, height: 158, key: 3,
    },
    {
      url: '/images/esempi/handicappatona.jpeg', width: 530, height: 107, key: 4,
    },
    {
      url: '/images/esempi/latopositivo.jpeg', width: 664, height: 172, key: 5,
    },
    // { url: '/images/esempi/liberata.jpeg', width: 602, height: 244 },
    // { url: '/images/esempi/trucco.jpeg', width: 527, height: 177 },
    // { url: '/images/esempi/venezia.jpeg', width: 609, height: 154 },
  ];
  useEffect(() => {
    const int = setTimeout(() => {
      settoggle(true);
    }, 1500);
    return () => clearInterval(int);
  });
  function handleClick(e) {
    if (e.nativeEvent.which === 1) {
      console.log('Left click');
    } else if (e.nativeEvent.which === 3) {
      console.log('Right click');
    }
  }
  return (<>
    <div className={styles.main}>
      <div className={styles.title}></div>
      <div className={styles.contenuto}>
        <div className={clsx(styles.contenuto, clickLogo > 0 && styles.C, clickLogo === 3 && styles.wrap)} onClick={(e) => handleClick(e)}>
          {clickLogo === 0 && <>
            <ForbiceDestraSVG className={styles.forbiceDestra} ref={scissors} />
            <ForbiceSinistraSVG className={clsx(styles.forbiceSinistra, toggle && styles.cut)} />
            <LineaTraggiataSVG className={styles.lineatratteggiata} />
            <NuvolaSVG className={styles.nuvola}/>
            <ScrittaSVG className={styles.scritta}/>
          </>}
          {clickLogo === 1 && <><h1>1. Virtuale è reale</h1>
            <h2>Dico e scrivo in rete solo cose che ho il coraggio di dire di persona.</h2>
            <br />
            <h4>La rete rappresenta ormai un mondo parallelo al nostro, un mondo
              interconnesso dove le notizie viaggiano da un capo all’altro, dove le parole
              arrivano fin dentro la vita, fin dentro le case delle persone.
              La comunicazione virtuale può essere molto pericolosa, molte persone
              potrebbero non accorgersi dei danni provocati da un commento non richiesto o
              da una critica che si pone più come un insulto mascherato dall’ironia.
              Bisognerebbe educare alla comunicazione in rete, tutti hanno il diritto di
              esprimere se stessi liberamente senza paura.
              Ciò che non ho il coraggio di dire di persona, non devo neppure scriverlo in
              rete.
            </h4></>}
          {clickLogo === 2 && <><h1>6. Le parole hanno conseguenze</h1>
            <h2>So che ogni mia parola può avere conseguenze, piccole o grandi.</h2>
            <br />
            <h4>‘’Le parole sono la nostra massima e inesauribile fonte, in grado
sia di infliggere dolore che di alleviarlo. ‘’ <br />
Sta a noi decidere in che maniera utilizzarle, se come ponte, per creare
armonia, connessione, dialogo, oppure come arma, per ferire ed
allontanare le persone, per farle sentire inadeguate o sbagliate.
Il cyberbullismo è un problema vero come lo è una violenza fisica,
molto più insidioso e molesto, perché lede la persona fin dentro la sua
casa, che dovrebbe rappresentare per lui un luogo sicuro.
            </h4></>}
          {clickLogo === 3 && <>
            <Transition
              items={urlImages}
              keys={(item: any) => item.key}
              from={{ opacity: 0, height: 0, width: 0 }}
              leave={{ opacity: 0 }}
              enter={({ width, height }) => ({ opacity: 1, width, height })}
            >
              {(styless, item) => (
                <div className={styles.fixed}>
                  <animated.div >
                    <a.img src={item.url} style={styless}/>
                  </animated.div>
                </div>
              )}
            </Transition>
          </>}
        </div>
      </div>
      <div className={styles.sub}>
        <button onClick={() => clickLogo !== 0 && setClickLogo((prev) => prev - 1)
        }>{'<'}</button>
        <button onClick={() => setClickLogo((prev) => prev + 1)}>{'>'}</button>
      </div>
    </div>
    <Spring from={{ bottom: -200 }} to={{ bottom: clickLogo !== 0 ? 0 : -200 }}>
      {(styless) => <>
        <animated.div className={styles.bannerdown} style={styless}>
          <ForbiceDestraSVG />
          <ForbiceSinistraSVG />
          <LineaTraggiataSVG />
          <NuvolaSVG />
          <ScrittaSVG />
        </animated.div>
      </>
      }
    </Spring>
  </>
  );
}
