import React, { useEffect, useRef, useState } from 'react';
import clsx from 'clsx';
import {
  ForbiceDestraSVG, ForbiceSinistraSVG, LineaTraggiataSVG, NuvolaSVG, ScrittaSVG,
} from '../../public/images/logo/logo';
import styles from './styles/Arte.module.scss';

export default function Arte() {
  const scissors = useRef(null);
  const [toggle, settoggle] = useState(false);
  useEffect(() => {
    const int = setTimeout(() => {
      settoggle(true);
    }, 700);
    return () => clearInterval(int);
  });
  return (
    <>
      <ForbiceDestraSVG className={styles.forbiceDestra} ref={scissors}/>
      <ForbiceSinistraSVG className={clsx(styles.forbiceSinistra, toggle && styles.cut)} />
      <LineaTraggiataSVG className={styles.lineatratteggiata} />
      <div className={styles.buildnuvola}/>
      <NuvolaSVG className={styles.nuvola}/>
      <ScrittaSVG className={styles.scritta}/>
    </>
  );
}
