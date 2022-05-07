import React, { ReactElement } from 'react';
import styles from './greetings.module.scss';

export default function Greetings(): ReactElement {
  return <h2 className={styles['greetings']}>Welcome to the example chome extension page!</h2>;
}
