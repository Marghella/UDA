import React, { useEffect, useRef, useState } from 'react';
import {
  Spring, animated, Transition, a,
} from 'react-spring';
import clsx from 'clsx';
import {
  ForbiceDestraSVG, ForbiceSinistraSVG, LineaTraggiataSVG, NuvolaSVG, ScrittaSVG,
} from '../../public/images/logoarte';
import styles from './styles/Arte.module.scss';

function getRandom(arr, n) {
  const result = new Array(n);
  let len = arr.length;
  const taken = new Array(len);
  if (n > len) { throw new RangeError('getRandom: more elements taken than available'); }
  // eslint-disable-next-line no-plusplus
  while (n--) {
    const x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    // eslint-disable-next-line no-plusplus
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
}

export default function Arte() {
  const scissors = useRef(null);
  const [toggle, settoggle] = useState(false);
  const [clickLogo, setClickLogo] = useState(0);
  const urlImagesnosorted = [
    {
      url: '/images/esempi/bella.jpeg', width: 655, height: 131,
    },
    {
      url: '/images/esempi/down.jpeg', width: 624, height: 163,
    },
    { url: '/images/esempi/gallina.jpeg', width: 484, height: 160 },
    {
      url: '/images/esempi/grassotta.jpeg', width: 532, height: 158,
    },
    {
      url: '/images/esempi/handicappatona.jpeg', width: 530, height: 107,
    },
    {
      url: '/images/esempi/latopositivo.jpeg', width: 664, height: 172,
    },
    { url: '/images/esempi/trucco.jpeg', width: 527, height: 177 },
    { url: '/images/esempi/zbrutta.jpeg', width: 662, height: 197 },
    { url: '/images/esempi/zcagareeee.jpeg', width: 667, height: 216 },
    { url: '/images/esempi/zcesso.jpeg', width: 682, height: 201 },
    { url: '/images/esempi/zclownpopi.jpeg', width: 716, height: 228 },
    { url: '/images/esempi/zesistenza.jpeg', width: 787, height: 236 },
    { url: '/images/esempi/zlocapisci.jpeg', width: 744, height: 202 },
    { url: '/images/esempi/zstupida.jpeg', width: 518, height: 142 },
    { url: '/images/esempi/ztavola.jpeg', width: 618, height: 157 },
    { url: '/images/esempi/zthisistheautist.jpeg', width: 696, height: 239 },
    { url: '/images/esempi/zveste.jpeg', width: 788, height: 234 },
    { url: '/images/esempi/zvita.jpeg', width: 471, height: 120 },
  ];

  const urlImagesUN = urlImagesnosorted.slice(0, 6).map((x, i) => ({
    url: x.url, width: x.width, height: x.height, key: i,
  }));

  const urlImagesDU = urlImagesnosorted.slice(6, 12).map((x, i) => ({
    url: x.url, width: x.width, height: x.height, key: i,
  }));

  const urlImagesTR = urlImagesnosorted.slice(12, 18).map((x, i) => ({
    url: x.url, width: x.width, height: x.height, key: i,
  }));
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
        <div className={clsx(styles.contenuto, clickLogo > 0 && styles.C, (clickLogo >= 3 && clickLogo < 6) && styles.wrap)} onClick={(e) => handleClick(e)}>
          {clickLogo === 0 && <>
            <ForbiceDestraSVG className={styles.forbiceDestra} ref={scissors} />
            <ForbiceSinistraSVG className={clsx(styles.forbiceSinistra, toggle && styles.cut)} />
            <LineaTraggiataSVG className={styles.lineatratteggiata} />
            <NuvolaSVG className={styles.nuvola}/>
            <ScrittaSVG className={clsx(styles.scritta, toggle && styles.compari)}/>
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
              items={urlImagesUN}
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
          {clickLogo === 4 && <>
            <Transition
              items={urlImagesDU}
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
          {clickLogo === 5 && <>
            <Transition
              items={urlImagesTR}
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
          {clickLogo === 6 && <>
            <h2>Il Manifesto della comunicazione non ostile è un impegno
              di responsabilità condivisa.
              Vuole favorire comportamenti rispettosi e civili.
              Vuole che la rete sia un luogo accogliente e sicuro per
              tutti.
            </h2>
          </>}
        </div>
      </div>
      <div className={styles.sub}>
        <button disabled={clickLogo === 0} onClick={() => clickLogo !== 0 && setClickLogo((prev) => prev - 1)
        }>{'<'}</button>
        <button disabled={clickLogo === 6} onClick={() => setClickLogo((prev) => prev + 1)}>{'>'}</button>
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
