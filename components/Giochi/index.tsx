import React from 'react';
import styles from './styles/Giochi.module.scss';

export default function index() {
  return (
    <div className={styles.main}>
      <div className={styles.padding}>
        <div className={styles.content}>
          <div className={styles.titolo}>Pl@sticando</div>
          <div className={styles.carte}></div>
          <div className={styles.labirinto}></div>
        </div>
      </div>
    </div>
  );
}
