import React, {
  useState, useCallback, useRef,
} from 'react';
import { useRouter } from 'next/router';
import {
  Transition, animated, config, Spring, a,
} from 'react-spring';
import { Parallax, ParallaxLayer, IParallax } from '@react-spring/parallax';
import {
  Sole, Bolle, Onde, Pannello, Wave, Eoliche, Recycle, EarthLine, OtherRecycle,
} from '../../public/images/scienzeparallax';
import {
  Uno, Due, Tre, Quattro, Cinque, Sei, Sette, Otto, Nove, Dieci, Undici, Dodici, Tredici, Quattordici, Quindici, Sedici, Diciassette,
} from '../../public/images/agenda2030/index';
import styles from './styles/Scienze.module.scss';
import useEventListener from '../../hooks/useEventListener';

const url = (name: string, wrap = false) => `${wrap ? 'url(' : ''}https://awv3node-homepage.surge.sh/build/assets/${name}.svg${wrap ? ')' : ''}`;

export default function Scienze() {
  const router = useRouter();
  const parallax = useRef(null);
  const setteref = useRef<HTMLDivElement>(null);
  const [hover, setHover] = useState(false);
  const imgs = [{ img: <Uno fill='black'/>, class: 'uno' }, { img: <Due />, class: 'due' }, { img: <Tre />, class: 'tre' }, { img: <Quattro />, class: 'quattro' }, { img: <Cinque />, class: 'cinque' }, { img: <Sei />, class: 'sei' }, {
    img: <Sette onClick={() => parallax.current.scrollTo(3)}/>,
    class: 'sette',
  }, { img: <Otto />, class: 'otto' }, { img: <Nove />, class: 'nove' }, { img: <Dieci />, class: 'dieci' }, { img: <Undici />, class: 'undici' }, {
    img: <Dodici
      onClick={() => parallax.current.scrollTo(2)}/>,
    class: 'dodici',
  }, { img: <Tredici />, class: 'tredici' }, {
    img: <Quattordici
      onClick={() => parallax.current.scrollTo(3)} />,
    class: 'quattordici',
  }, { img: <Quindici />, class: 'quindici' }, { img: <Sedici />, class: 'sedici' }, { img: <Diciassette />, class: 'diciasette' }, { img: <div />, class: 'diciotto' }];
  const [agenda, setAgenda] = useState(imgs.map((im, i) => ({
    img: im.img, key: i, width: 104, height: 104, margin: 2, class: im.class,
  })));
  const [grid, setGrid] = useState(false);
  const AClick = useCallback(
    (ev) => {
      if (ev.key === 'Escape' && agenda.length > 3) {
        console.log('Mario');
        setAgenda(agenda.filter((el, i) => i === 6 || i === 11 || i === 13));
      }
    },
    [agenda],
  );
  if (process.browser) useEventListener('keydown', AClick, window);
  return <>
    <Spring from={{ backgroundColor: 'white' }} to={{ backgroundColor: '#253237' }}>
      {(bpropsmain) => <>
        <a.div style={{ width: '100%', height: '100%', ...bpropsmain }} >
          <Parallax ref={parallax} pages={4} className={styles.main} enabled={true}>
            <ParallaxLayer offset={1} speed={1} factor={2} style={{ backgroundColor: '#191970' }}/>
            <ParallaxLayer offset={3} speed={1} factor={2} style={{ backgroundColor: '#2a1bff' }}>

            </ParallaxLayer>
            <ParallaxLayer offset={2} speed={1} factor={2} style={{ backgroundColor: '#87BCDE' }}>
              <Wave style={{
                position: 'absolute', display: 'block', width: '100%', height: '10%', bottom: '-1px', right: '0',
              }}/>
              <Wave style={{
                position: 'absolute', display: 'block', width: '100%', height: '10%', bottom: '-1px', left: '0',
              }}/>
            </ParallaxLayer>
            <ParallaxLayer offset={4} speed={1} factor={1} />
            <ParallaxLayer
              offset={0}
              speed={0}
              factor={2.5}
              style={{
                backgroundImage: url('stars', true),
                backgroundSize: 'cover',
              }}
            />

            <ParallaxLayer offset={1} speed={0.4}>
              <Sole style={{ display: 'block', width: '30%', marginLeft: '60%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0.8} style={{ opacity: 0.1 }} >
              <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '55%' }} />
              <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '15%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1.75} speed={0.5} style={{ opacity: 0.1 }}>
              <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '70%' }} />
              <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '40%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1} speed={0.2} style={{ opacity: 0.2 }}>
              <img src={url('cloud')} style={{ display: 'block', width: '10%', marginLeft: '10%' }} />
              <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '75%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1.6} speed={-0.1} style={{ opacity: 0.4 }}>
              <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '60%' }} />
              <img src={url('cloud')} style={{ display: 'block', width: '25%', marginLeft: '30%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={2.6} speed={0.4} style={{ opacity: 0.6 }}>
              <img src={url('cloud')} style={{ display: 'block', width: '20%', marginLeft: '5%' }} />
              <img src={url('cloud')} style={{ display: 'block', width: '15%', marginLeft: '75%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={1.6} speed={0.3} style={{ fill: 'white', opacity: 0.7 }}>
              <Eoliche style={{ display: 'block', width: '10%', marginLeft: '75%' }}/>
            </ParallaxLayer>

            <ParallaxLayer offset={1.8} speed={0.5} style={{ fill: 'white', opacity: 0.7 }}>
              <Pannello style={{ display: 'block', width: '10%', marginLeft: '25%' }}/>
            </ParallaxLayer>

            <ParallaxLayer
              offset={2}
              speed={0.5}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                pointerEvents: 'none',
              }}>
              <img src={url('earth')} style={{ width: '40%' }} />
            </ParallaxLayer>

            <ParallaxLayer offset={2} speed={0.5}>
              <OtherRecycle style={{ width: '10%', marginLeft: '10%' }} />
            </ParallaxLayer>

            <ParallaxLayer
              offset={0}
              speed={0.1}

              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <div style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexWrap: 'wrap',
                width: '624px',
              }}>
                <Transition
                  items={agenda}
                  keys={(item: any) => item.key}
                  from={{
                    opacity: 0, height: 0, width: 0, margin: 0, zIndex: 200,
                  }}
                  leave={() => async (next) => {
                    await next({
                      opacity: 0, height: 0, width: 0, margin: 0,
                    });
                  }}
                  enter={({ width, height, margin }) => ({
                    opacity: 1, width, height, margin,
                  })}
                  config={config.gentle}
                  onRest={() => {
                    if (agenda.length === 3) setGrid(true);
                  }}
                >
                  {({
                    opacity, height, width, margin, zIndex,
                  }, item) => (
                    <animated.div style={{
                      width, height, opacity, zIndex,
                    }} className={styles[item.class]}>
                      <animated.div style={{ margin }} className={styles.margin} >
                        {item.img}
                      </animated.div>
                    </animated.div>
                  )}
                </Transition>
              </div>

            </ParallaxLayer>

            <ParallaxLayer
              offset={1}
              speed={2}
              onClick={() => parallax.current.scrollTo(2)}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <div style={{
                width: '80%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div style={{
                  width: '40%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Sette className={styles.setteparuno} />
                </div>
                <div className={styles.text} ref={setteref}>
              Goal 7:
              Assicurare a tutti l'accesso a sistemi di energia economici, affidabili, sostenibili, e moderni
                </div>
              </div>

            </ParallaxLayer>

            <ParallaxLayer
              offset={2}
              speed={2}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onClick={() => parallax.current.scrollTo(0)}>
              <div style={{
                width: '80%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div style={{
                  width: '40%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Dodici className={styles.setteparuno} />
                </div>
                <div className={styles.text}>
            Goal 12:
            Garantire modelli sostenibili di produzione e di consumo
                </div>
              </div>

            </ParallaxLayer>

            <ParallaxLayer offset={2.5} speed={0.4} style={{ opacity: 0.6 }}>
              <Recycle style={{ display: 'block', width: '10%', marginLeft: '75%' }} />
            </ParallaxLayer>

            {/* 4th pages */}

            <ParallaxLayer offset={3.5} speed={-0.3} style={{ fill: 'white', opacity: 0.5 }}>
              <Bolle style={{ display: 'block', width: '10%', marginLeft: '65%' }}/>
              <Bolle style={{ display: 'block', width: '20%', marginLeft: '5%' }}/>
            </ParallaxLayer>

            <ParallaxLayer offset={3.9} speed={3} style={{ fill: 'white', opacity: 0.3 }}>
              <Bolle style={{ display: 'block', width: '10%', marginLeft: '45%' }}/>
            </ParallaxLayer>

            <ParallaxLayer offset={3} speed={0} style={{ opacity: 1 }}>

            </ParallaxLayer>

            <ParallaxLayer
              offset={3}
              speed={2}
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}
              onClick={() => parallax.current.scrollTo(0)}>
              <div style={{
                width: '80%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}>
                <div style={{
                  width: '40%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}>
                  <Quattordici className={styles.setteparuno} />
                </div>
                <div className={styles.text}>
            Goal 14:
            Conservare e utilizzare in modo durevole gli oceani, i mari e le risorse marine per uno sviluppo sostenibile
                </div>
              </div>
              <Spring
                from={{ width: 100, color: 'blue' }}
                to={{ width: hover ? 500 : 100, color: hover ? 'white' : 'blue' }}>
                {(buttonStyle) => <>
                  <a.button onClick={() => router.push('/scienze/gioco')} className={styles.absoluteButton} style={buttonStyle} onMouseEnter={() => setHover(true)} onMouseLeave={() => setHover(false)}><span>Video Progetto Pl@sticando</span></a.button>
                </>}
              </Spring>
            </ParallaxLayer>

          </Parallax>
        </a.div>
      </>}
    </Spring>
  </>;
}
