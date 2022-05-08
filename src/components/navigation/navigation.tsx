import React, { ReactElement } from 'react';
import { NavigationDirection } from '../../enums';
import { AppNavigationService } from '../../services';
import styles from './navigation.module.scss';
import NavigationItem from './_item';

export default function Navigation({
  direction = NavigationDirection.ROW,
  listClassName,
  itemClassname
}:{
  direction?: NavigationDirection;
  listClassName?: string;
  itemClassname?: string;
}): ReactElement {
  const openHomePage = (): void => {
    AppNavigationService.openHomePage();
  };

  return (
    <nav className={styles['navigation']}>
      <ul className={`
        ${styles['navigation-list']}
        ${styles[`navigation-list_${direction}`]}
        ${listClassName ? listClassName : ''}
      `}>
        <NavigationItem
          className={itemClassname}
          handleClick={openHomePage}
          title="Home" />

        <NavigationItem
          className={itemClassname}
          handleClick={() => console.log('click')}
          title="About" />

        <NavigationItem
          className={itemClassname}
          handleClick={() => console.log('click')}
          title="FAQ" />
      </ul>
    </nav>
  );
}
