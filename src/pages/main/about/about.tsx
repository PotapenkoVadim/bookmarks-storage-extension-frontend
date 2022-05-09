import React, { ReactElement } from 'react';
import Layout from '../../../components/layout/layout';
import styles from './about.module.scss';

export default function AboutPage(): ReactElement {
  return (
    <Layout>
      <div className={styles['aboutpage']}>
        <h2>About page</h2>
      </div>
    </Layout>
  );
}
