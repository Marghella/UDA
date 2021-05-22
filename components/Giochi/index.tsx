/* eslint-disable global-require */
import React from 'react';
import { Spring, a, config } from 'react-spring';
import styles from './styles/Giochi.module.scss';

export default function index() {
  return (
    <Spring from={{ backgroundColor: '#2a1bff' }} to={{ backgroundColor: '#134C77' }}>
      {(bgprops) => <>
        <a.div className={styles.main} style={bgprops}>
          <div className={styles.padding}>
            <div className={styles.content}>
              <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={500} config={config.molasses}>
                {(tprops) => <a.div className={styles.titolo} style={tprops}>Pl@sticando</a.div>}
              </Spring>
              <Spring from={{ opacity: 0 }} to={{ opacity: 1 }} delay={600} config={config.molasses}>
                {(sectionprops) => <><a.div className={styles.carte} style={sectionprops}>
                  <div className={styles.title}>Carte (C# in ambiente Unity)</div>
                  <div className={styles.videosection}>
                    <img src={require('public/videos/gif/Carte.gif')} />
                  </div>
                  <div className={styles.description}>
              Il gioco consiste nel saper associare in maniera corretta il simbolo del tipo di plastica
              all&apos;immagine corrispondente.
                  </div>
                </a.div>
                <a.div className={styles.labirinto} style={sectionprops}>
                  <div className={styles.title}>Labirinto (Visual Basic)</div>
                  <div className={styles.videosection}>
                    <img src={require('public/videos/gif/Labirinto.gif')} />
                  </div>
                  <div className={styles.description}>
            Il labirinto funziona attraverso una corrispondenza tra oggetto e simbolo, ma mantenendo costantemente
            il cursore del mouse all&apos;interno del percorso
                  </div>
                </a.div></>}
              </Spring>
            </div>
          </div>
        </a.div>
      </>}
    </Spring>
  );
}
