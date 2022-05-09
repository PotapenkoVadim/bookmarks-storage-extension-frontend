import React, { ReactElement } from 'react';
import Layout from '../../../components/layout/layout';
import styles from './home.module.scss';

export default function HomePage(): ReactElement {
  return (
    <Layout>
      <div className={styles['homepage']}>
        <h2>Home page</h2>
      </div>
    </Layout>
  );
}
