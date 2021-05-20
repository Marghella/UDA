/* eslint-disable no-nested-ternary */
import React, { useState } from 'react';
import {
  useSprings, animated, to as interpolate, Spring,
} from 'react-spring';
import { useDrag } from 'react-use-gesture';
import styles from './styles/Storia_Filosofia.module.scss';

const cards = [
  <div key={0} className={styles.mainUno}>
    <Spring from={{ opacity: 0 }} to={{ opacity: 1 }}>
      {(vprops) => <>
        <animated.em style={vprops}>Vonazzo</animated.em>
      </>}
    </Spring>
  </div>,
  <div key={1}>Scema</div>,
  <div key={2}>Ti</div>,
  <div key={3}>Voglio</div>,
  <div key={4}>Tanto</div>,
  <div key={5}>Bene</div>,
];

cards.reverse();

const to = (i) => ({
  x: 0, y: i * -4, scale: 1, rot: -10 + Math.random() * 20, delay: i * 100,
});
const from = (i) => ({
  x: 0, rot: 0, scale: 1.5, y: -1000,
});
const trans = (r, s) => `perspective(1500px) rotateX(30deg) rotateY(${r / 10}deg) rotateZ(${r}deg) scale(${s})`;

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
    <div className={styles.main}>
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
    </div>
  </>;
}
