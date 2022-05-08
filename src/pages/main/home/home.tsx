import React, { ReactElement } from 'react';
import Navigation from '../../../components/navigation/navigation';
import styles from './home.module.scss';

export default function HomePage(): ReactElement {
  return (
    <div className={styles['homepage']}>
      <Navigation />
    </div>
  );
}
