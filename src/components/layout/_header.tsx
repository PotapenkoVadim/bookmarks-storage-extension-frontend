import React, { ReactElement } from 'react';
import { configuration } from '../../configuration/configuration';
import Navigation from '../common/navigation/navigation';
import styles from './layout.module.scss';

export default function LayoutHeader(): ReactElement {
  return (
    <div className={styles['layout-header']}>
      <h1 className={styles['layout-title']}>
        {configuration.appName}
      </h1>

      <div className={styles['layout-navigation']}>
        <Navigation />
      </div>
    </div>
  );
}
