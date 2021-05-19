/* eslint-disable jsx-a11y/no-static-element-interactions */
import React, {
  useEffect, useState, useRef, useCallback,
} from 'react';
import {
  Spring, animated, config, Transition, a,
} from 'react-spring';
import { useRouter } from 'next/router';
import Link from 'next/link';
import clsx from 'clsx';
import useWindowSize from '../../hooks/useWindowSize';
import useEventListener from '../../hooks/useEventListener';
import styles from './styles/Home.module.scss';
import {
  ScienzeLogo, StoriaLogo, ArteLogo, ReligioneLogo,
} from '../../loghi/index';
import Menu from '../../public/images/leftmenu/menu';
import Close from '../../public/images/leftmenu/close';
import Arrow from '../../public/images/miscellaneus/arrow';

let Globe = () => null;
// eslint-disable-next-line global-require
if (typeof window !== 'undefined') Globe = require('react-globe.gl').default;

export default function Home({ children }) {
  const router = useRouter();
  const [viewMenu, setViewMenu] = useState(false);
  const [color, setColor] = useState(false);
  const [title, setTitle] = useState(false);
  const globeEl = useRef(null);
  const size = useWindowSize();
  const [titlepositionfrom, settitlepositionfrom] = useState(false);
  const [hover, setHover] = useState(undefined);
  const [menuhover, setMenuhover] = useState(undefined);
  const [cardhover, setCardHover] = useState(undefined);
  const [colorLine, setColorLine] = useState('');
  useEffect(() => {
    switch (menuhover) {
      case undefined:
        setColorLine('black');
        break;
      case 0:
        setColorLine('#3AC36A');
        break;
      case 1:
        setColorLine('#63D14D');
        break;
      case 2:
        setColorLine('#8EDD48');
        break;
      case 3:
        setColorLine('#C6E84A');
        break;
      default:
        break;
    }
  }, [menuhover]);
  useEffect(() => {
    if (router.asPath !== '/') {
      settitlepositionfrom(true);
      setTitle(true);
      setColor(true);
    }
    if (size.width < 900 || size.height < 900) alert('VISUALIZZARE IL PROGETTO AD UNA RISOLUZIONE PIÙ ALTA, MINIMO 900x900');
    let to;
    (function check() {
      if (globeEl.current) {
        globeEl.current.controls().autoRotate = true;
        globeEl.current.controls().autoRotateSpeed = 15;
        globeEl.current.pointOfView({ lat: 0, lng: 0, altitude: 1.8 });
      } else {
        to = setTimeout(check, 1000);
      }
    }());
    return () => {
      if (to) {
        clearTimeout(to);
      }
    };
  }, []);
  const menuIcons = [{
    logo: <ScienzeLogo animation={cardhover === 0} />,
    link: '/scienze',
    class: 'scienze',
    key: 0,
    description: 'Agenda 2030 e pl@sticando',
  }, {
    logo: <StoriaLogo animation={cardhover === 1} />,
    link: '/storia',
    class: 'storia',
    key: 1,
    description: 'La costituzione',
  }, {
    logo: <ArteLogo animation={cardhover === 2} />,
    link: '/arte',
    class: 'arte',
    key: 2,
    description: 'Manifesto comunicazione non ostile',
  }, {
    logo: <ReligioneLogo animation={cardhover === 3} />,
    link: '/religione',
    class: 'religione',
    key: 3,
    description: 'Il dovere della pace',
  }];
  const menuref = useRef(null);
  const handleClickOutside = useCallback(
    (event) => {
      if (menuref.current && !menuref.current.contains(event.target)) {
        // CLICK OUTSIDE
        setViewMenu(false);
      }
      // CLICK INSIDE
    },
    [],
  );
  const handleClickSpace = useCallback(
    (ev) => {
      console.log(ev.key);

      if (ev.key === ' ') setTitle(true);
    },
    [],
  );
  if (process.browser) {
    useEventListener('mousedown', handleClickOutside);
    useEventListener('keydown', handleClickSpace);
  }

  return (
    <>
      {/* title */}
      {(router.asPath !== '/') && (
        <>
          <Spring from={{ left: -400, backgroundColor: 'trasparent' }} to={{ left: viewMenu ? 0 : -400 }}>
            {(propsMenu) => (
              <>
                <a.div className={styles.menuSlide} style={propsMenu} ref={menuref}>
                  <div style={{
                    left: 0, top: 0, display: 'flex',
                  }}
                  >
                    <Close style={{ cursor: 'pointer' }} onClick={() => setViewMenu(false)} />
                    <span
                      style={{
                        display: 'flex', alignItems: 'center', justifyContent: 'center', marginLeft: '20px', fontSize: '18px', cursor: 'pointer',
                      }}
                      onClick={() => router.push('/')}
                    >
                    Menù
                    </span>
                  </div>
                  <div className={styles.menuflex}>
                    <Spring from={{ width: '0%' }} to={{ width: viewMenu ? '100%' : '0%' }} config={config.molasses}>
                      {(lineprops) => (
                        <>
                          <Spring from={{ color: 'black' }} to={{ color: menuhover === 0 ? colorLine : 'black' }}>
                            {(hoverpropss) => (
                              <>
                                {' '}
                                <Link href="/arte">
                                  <div className={styles.section}>
                                    <a.div style={hoverpropss} className={styles.sectiontext} onMouseEnter={() => setMenuhover(0)} onMouseLeave={() => setMenuhover(undefined)}>Arte</a.div>
                                  </div>
                                </Link>
                              </>
                            )}
                          </Spring>
                          <a.hr className={clsx(styles.line, styles.arte)} style={lineprops} />

                          <Spring from={{ color: 'black' }} to={{ color: menuhover === 1 ? colorLine : 'black' }}>
                            {(hoverpropss) => (
                              <>
                                {' '}
                                <Link href="/storia">
                                  <div className={styles.section}>
                                    <a.div style={hoverpropss} className={styles.sectiontext} onMouseEnter={() => setMenuhover(1)} onMouseLeave={() => setMenuhover(undefined)}>Storia</a.div>
                                  </div>
                                </Link>
                              </>
                            )}
                          </Spring>
                          <a.hr className={clsx(styles.line, styles.storia)} style={lineprops} />

                          <Spring from={{ color: 'black' }} to={{ color: menuhover === 2 ? colorLine : 'black' }}>
                            {(hoverpropss) => (
                              <>
                                {' '}
                                <Link href="/scienze">
                                  <div className={styles.section}>
                                    <a.div style={hoverpropss} className={styles.sectiontext} onMouseEnter={() => setMenuhover(2)} onMouseLeave={() => setMenuhover(undefined)}>Scienze</a.div>
                                  </div>
                                </Link>
                              </>
                            )}
                          </Spring>
                          <a.hr className={clsx(styles.line, styles.scienze)} style={lineprops} />

                          <Spring from={{ color: 'black' }} to={{ color: menuhover === 3 ? colorLine : 'black' }}>
                            {(hoverpropss) => (
                              <>
                                {' '}
                                <Link href="/religione">
                                  <div className={styles.section}>
                                    <a.div style={hoverpropss} className={styles.sectiontext} onMouseEnter={() => setMenuhover(3)} onMouseLeave={() => setMenuhover(undefined)}>Religione</a.div>
                                  </div>
                                </Link>
                              </>
                            )}
                          </Spring>
                          <a.hr className={clsx(styles.line, styles.religione)} style={lineprops} />

                        </>
                      )}
                    </Spring>
                  </div>
                </a.div>
              </>
            )}
          </Spring>
          <div className={styles.buttonMenu}>
            <Menu fill="white" onClick={() => setViewMenu(true)} />
          </div>
          {viewMenu && (
            <Spring from={{ opacity: 0 }} to={{ opacity: viewMenu ? 0.8 : 0 }}>
              {(bprops) => (
                <>
                  <a.div className={styles.backgroundBlack} style={bprops} />
                </>
              )}
            </Spring>
          )}
        </>
      )}
      <div className={styles.main}>
        {router.asPath === '/' && (
          <>
            {' '}
            <Spring
              from={{
                top: titlepositionfrom ? '0%' : '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                fontSize: 140 - ((size.width / 100) * 1),
                color: color ? 'white' : 'black',
              }}
              to={{
                top: title ? '0%' : '50%', left: '50%', transform: title ? 'translate(-50%, 0)' : 'translate(-50%, -50%)', fontSize: title ? ((size.width / 100) * 4) : ((size.width / 100) * 5), color: '#0F6F8C',
              }}
              config={config.molasses}
            >
              {(styless) => (
                <>
                  <animated.div className={styles.title} style={styless} onClick={() => { setTitle(true); if (router.asPath !== '/') router.push('/'); }}>
                  IL MO
                    {/* <Globe
            ref={globeEl}
            globeImageUrl="//unpkg.com/three-globe/example/img/earth-day.jpg"
            width={title ? ((size.width / 100) * 3.5) : ((size.width / 100) * 5)}
            height={title ? ((size.width / 100) * 3.5) : ((size.width / 100) * 5)}
            backgroundColor='#EDF0E6'
          /> */}
                  NDO CHE VORREI
                  </animated.div>
                  <div className={styles.earth} />
                </>
              )}
            </Spring>
            {' '}

          </>
        )}
        {/* {(title && router.asPath === '/') && <div className={styles.menu}>
        <div className={styles.grid_container}>
          <Transition
            items={menuIcons}
            keys={(logo: any) => logo.key}
            from={{
              opacity: 0, display: 'flex', justifyContent: 'center', alignItems: 'center', height: 145, width: 100,
            }}
            enter={() => ({ opacity: 1 })}
            config={{
              duration: 2000,
            }}>
            {(stylesss, logos) => <>
              <div className={styles[logos.class]}>
                <Link href={logos.link}><animated.div style={stylesss} onMouseEnter={() => setHover(logos.key)} onMouseLeave={() => setHover(undefined)}>
                  {logos.logo}
                </animated.div></Link>
              </div>
            </>}
          </Transition>
        </div>
      </div>} */}
        {(title && router.asPath === '/') && (
          <div className={styles.menu}>
            <div className={styles.gridCard}>
              <Transition
                items={menuIcons}
                keys={(logo: any) => logo.key}
                from={{
                  opacity: 0,
                }}
                enter={() => ({ opacity: title ? 1 : 0 })}
                config={{
                  duration: 1000,
                }}
                delay={5000}
              >
                {(stylesss, logos) => (
                  <>
                    <a.div style={stylesss} className={styles[logos.class]}>
                      <Spring from={{ opacity: 1 }} to={{ opacity: cardhover === logos.key ? 0 : 1 }}>
                        {(propsa) => (
                          <>
                            <a.span className={styles.titleCard} onMouseEnter={() => setCardHover(logos.key)} style={propsa} onMouseLeave={() => setCardHover(undefined)}>{logos.class}</a.span>
                            <a.div style={propsa} className={clsx(styles.sfondoopaco, styles[logos.class])} onMouseEnter={() => setCardHover(logos.key)} onMouseLeave={() => setCardHover(undefined)} />
                          </>
                        )}
                      </Spring>
                      <Link href={logos.link}>
                        <animated.div onMouseEnter={() => setTimeout(() => setHover(logos.key), 1000)} onMouseLeave={() => setHover(undefined)} className={styles.insidecard}>
                          {logos.logo}
                        </animated.div>
                      </Link>
                      <Spring from={{ top: 400 }} to={{ top: cardhover === logos.key ? 150 : 400 }}>
                        {(slabprops) => (
                          <>
                            <a.div className={styles.textcards} style={slabprops}>
                              <h1>{logos.class}</h1>
                              <h2>{logos.description}</h2>
                              <Link href={logos.link}>
                                <button className={styles.arrow} onMouseEnter={() => setCardHover(logos.key)}>
                                  <Arrow />
                                </button>
                              </Link>
                            </a.div>
                          </>
                        )}
                      </Spring>
                    </a.div>
                  </>
                )}
              </Transition>
            </div>
          </div>
        )}
        {children}
      </div>
    </>
  );
}
