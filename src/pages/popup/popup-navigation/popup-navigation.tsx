import React, { ReactElement } from 'react';
import Navigation from '../../../components/navigation/navigation';
import { NavigationDirection } from '../../../enums/Navigation';
import styles from './popup-navigation.module.scss';

export default function PopupNavigationPage(): ReactElement {
  return (
    <div className={styles['popupnavpage']}>
      <Navigation direction={NavigationDirection.COL} />
    </div>
  );
}
