import React, { ReactElement } from 'react';
import Navigation from '../../../components/common/navigation/navigation';
import { NavigationDirection } from '../../../enums';
import styles from './popup-navigation.module.scss';

export default function PopupNavigationPage(): ReactElement {
  return (
    <div className={styles['popupnavpage']}>
      <Navigation
        isUseRoterDOM={false}
        direction={NavigationDirection.COL} />
    </div>
  );
}
