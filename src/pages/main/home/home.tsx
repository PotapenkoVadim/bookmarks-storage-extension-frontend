import React, { ReactElement } from 'react';
import Greetings from '../../../components/greetings/greetings';
import styles from './home.module.scss';

export default function HomePage(): ReactElement {
  return (
    <div className={styles['homepage']}>
      <Greetings />
    </div>
  );
}