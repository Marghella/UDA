import React, { useEffect, useState, useRef } from 'react';
import {
  Spring, animated, config, Transition,
} from 'react-spring';
import { useRouter } from 'next/router';
import Link from 'next/link';
import useWindowSize from '../../hooks/useWindowSize';
import styles from './styles/Home.module.scss';
import {
  ScienzeLogo, StoriaLogo, ArteLogo, ReligioneLogo,
} from '../../loghi/index';

let Globe = () => null;
// eslint-disable-next-line global-require
if (typeof window !== 'undefined') Globe = require('react-globe.gl').default;

export default function Home({ children }) {
  const router = useRouter();
  const [color, setColor] = useState(false);
  const [title, setTitle] = useState(false);
  const globeEl = useRef(null);
  const size = useWindowSize();
  const [titlepositionfrom, settitlepositionfrom] = useState(false);
  const [hover, setHover] = useState(undefined);
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
    logo: <ScienzeLogo animation={hover === 0} />,
    link: '/scienze',
    class: 'scienze',
    key: 0,
  }, {
    logo: <StoriaLogo animation={hover === 1}/>,
    link: '/storia',
    class: 'storia',
    key: 1,
  }, {
    logo: <ArteLogo animation={hover === 2}/>,
    link: '/arte',
    class: 'arte',
    key: 2,
  }, {
    logo: <ReligioneLogo animation={hover === 3}/>,
    link: '/religione',
    class: 'religione',
    key: 3,
  }];
  return (<>
    {/* title */}
    <div className={styles.main}>
      {router.asPath === '/' && <> <Spring from={{
        top: titlepositionfrom ? '0%' : '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        fontSize: 140 - ((size.width / 100) * 1),
        color: color ? 'white' : 'black',
      }} to={{
        top: title ? '0%' : '50%', left: '50%', transform: title ? 'translate(-50%, 0)' : 'translate(-50%, -50%)', fontSize: title ? ((size.width / 100) * 4) : ((size.width / 100) * 5), color: color ? 'white' : 'black',
      }} config={config.molasses}>
        {(styless) => <>
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
          <div className={styles.earth}>
          </div>
        </>
        }
      </Spring> </>}
      {(title && router.asPath === '/') && <div className={styles.menu}>
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
      </div>}
      {children}
    </div>
  </>
  );
}
