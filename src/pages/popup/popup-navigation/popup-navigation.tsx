import React, { ReactElement } from 'react';
import { AppNavigationService } from '../../../services';
import styles from './popup-navigation.module.scss';

export default function PopupNavigationPage(): ReactElement {
  const openHomePage = (): void => {
    AppNavigationService.openHomePage();
  };

  return (
    <div className={styles['popupnavpage']}>
      <ul className={styles['popupnavpage-navigation']}>
        <li className={styles['popupnavpage-item']}>
          <a onClick={() => openHomePage()}>Go to Home Page</a>
        </li>
      </ul>
    </div>
  );
}
