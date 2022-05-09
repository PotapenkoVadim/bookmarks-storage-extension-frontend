import React, { ReactElement } from 'react';
import styles from './layout.module.scss';
import LayoutHeader from './_header';

export default function Layout({ children }:{ children: ReactElement }): ReactElement {
  return (
    <div className={styles['layout']}>
      <LayoutHeader />

      <div className={styles['layout-content']}>
        {children}
      </div>
    </div>
  );
}
