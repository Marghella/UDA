import React from 'react';
import { Spring, a } from 'react-spring';
import styles from './styles/Crediti.module.scss';
import {
  Gimp, Github, Html, Javascript, Typescript, NodeJS, Reactt, Sass, VSCode, Next,
} from '../../public/images/loghicrediti';

export default function index({ setDynamicColor }) {
  setDynamicColor('#0F6F8C');
  const libraries = ['react-spring (animazioni)',
    'clsx (classi dinamiche)',
    'next-images (gif)',
    'react-globe.gl (globo interattivo)'];
  return (
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {(op) => <>
        <a.div className={styles.main} style={op}>
          <div className={styles.section}>
            <div className={styles.riconoscimenti}>
              <div className={styles.subtitle}>Il sito è stato sviluppato da:</div>
              <div className={styles.ioete}>Sandro Marghella e Alessia Vonazzo</div>
            </div>
            <div className={styles.strumentiUtilizzati}>
              <div className={styles.subtitle}>
            Per sviluppare il nostro sito sono stati utilizzati
              </div>

              <div className={styles.grid_container}>
                <div className={styles.linguaggi}>
                  <div className={styles.subtitle}>Linguaggi</div>
                  <div style={{ display: 'flex' }}>
                    <div className={styles.sect_logo}>
                      <Html />
                      <em>HTML5</em>
                    </div>
                    <div className={styles.sect_logo}>
                      <Javascript />
                      <span>Javascript</span>
                    </div>
                    <div className={styles.sect_logo}>
                      <Typescript />
                      <span>Typescript</span>
                    </div>
                    <div className={styles.sect_logo}>
                      <Sass />
                      <span>Sass</span>
                    </div>
                  </div>

                </div>
                <div className={styles.engine}>
                  <div className={styles.subtitle}>
            Engines
                  </div>
                  <div style={{ display: 'flex' }}>
                    <div className={styles.sect_logo}>
                      <Next />
                      <span>Next.js</span>
                    </div>
                    <div className={styles.sect_logo}>
                      <NodeJS />
                      <span>Node.js</span>
                    </div>
                    <div className={styles.sect_logo}>
                      <Reactt />
                      <span>React</span>
                    </div>
                  </div>

                </div>
                <div className={styles.strumenti}>
                  <div className={styles.subtitle}>
            Strumenti
                  </div>
                  <div style={{ display: 'flex' }}>
                    <div className={styles.sect_logo}>
                      <Github />
                      <span>Github</span>
                    </div> <div className={styles.sect_logo}>
                      <VSCode />
                      <span>VSCode</span>
                    </div> <div className={styles.sect_logo}>
                      <Gimp />
                      <span>Gimp</span>
                    </div>
                  </div>
                </div>
                <div className={styles.librerie}>
                  <div className={styles.subtitle}>
            Lista librerie
                  </div>
                  <div className={styles.list}>
                    <ul>
                      {libraries.map((x, i) => <>
                        <li key={i}>{x}</li>
                      </>)}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
            <div className={styles.github}>
              <div className={styles.subtitle}>Link Github</div>
              <a className={styles.ag} href='https://github.com/Marghella/UDA'>https://github.com/Marghella/UDA</a>
            </div>
          </div>
        </a.div>
      </>}
    </Spring>
  );
}
