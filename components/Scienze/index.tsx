import React, {
  useState, useCallback,
} from 'react';
import {
  Transition, animated, config,
} from 'react-spring';
import clsx from 'clsx';
import {
  Uno, Due, Tre, Quattro, Cinque, Sei, Sette, Otto, Nove, Dieci, Undici, Dodici, Tredici, Quattordici, Quindici, Sedici, Diciassette,
} from '../../public/images/agenda2030/index';
import styles from './styles/Scienze.module.scss';
import useEventListener from '../../hooks/useEventListener';

export default function Scienze() {
  const imgs = [{ img: <Uno fill='black'/> }, { img: <Due /> }, { img: <Tre /> }, { img: <Quattro /> }, { img: <Cinque /> }, { img: <Sei /> }, { img: <Sette className={styles.sette}/> }, { img: <Otto /> }, { img: <Nove /> }, { img: <Dieci /> }, { img: <Undici /> }, { img: <Dodici className={styles.dodici}/> }, { img: <Tredici /> }, { img: <Quattordici className={styles.quattordici} /> }, { img: <Quindici /> }, { img: <Sedici /> }, { img: <Diciassette /> }];
  const [agenda, setAgenda] = useState(imgs.map((im, i) => ({
    img: im.img, key: i, width: 104, height: 104, margin: 2,
  })));
  const [grid, setGrid] = useState(false);
  const AClick = useCallback(
    (ev) => {
      if (ev.key === 'Escape') {
        console.log('Mario');
        setAgenda(agenda.filter((el, i) => i === 6 || i === 11 || i === 13));
      }
    },
    [agenda],
  );
  if (process.browser) useEventListener('keydown', AClick, window);
  return <>
    <div className={styles.main}>
      <div className={styles.title}>
      </div>
      <div className={styles.body}>
        <div className={clsx(grid ? styles.grid : styles.flex)}>
          <Transition
            items={agenda}
            keys={(item: any) => item.key}
            from={{
              opacity: 0, height: 0, width: 0, margin: 0,
            }}
            leave={() => async (next) => {
              await next({
                opacity: 0, height: 0, width: 0, margin: 0,
              });
            }}
            enter={({ width, height, margin }) => ({
              opacity: 1, width, height, margin,
            })}
            config={config.molasses}
            onRest={() => {
              if (agenda.length === 3) setGrid(true);
            }}
          >
            {({
              opacity, height, width, margin,
            }, item) => (
              <animated.div style={{ width, height, opacity }}>
                <animated.div style={{ margin }} className={styles.margin}>
                  {item.img}
                </animated.div>
              </animated.div>
            )}
          </Transition>
        </div>
      </div>
    </div>
  </>;
}
