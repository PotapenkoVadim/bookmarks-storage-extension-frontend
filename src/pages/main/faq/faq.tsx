import React, { ReactElement } from 'react';
import Layout from '../../../components/layout/layout';
import styles from './faq.module.scss';

export default function FAQPage(): ReactElement {
  return (
    <Layout>
      <div className={styles['faqpage']}>
        <h2>FAQ page</h2>
      </div>
    </Layout>
  );
}
