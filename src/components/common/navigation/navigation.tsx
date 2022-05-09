import React, { ReactElement } from 'react';
import { configuration } from '../../../configuration/configuration';
import { NavigationDirection } from '../../../enums';
import { AppNavigationService } from '../../../services';
import styles from './navigation.module.scss';
import NavigationItem from './_item';

export default function Navigation({
  direction = NavigationDirection.ROW,
  isUseRoterDOM = true,
  listClassName,
  itemClassname
}:{
  direction?: NavigationDirection;
  isUseRoterDOM?: boolean;
  listClassName?: string;
  itemClassname?: string;
}): ReactElement {
  const openHomePage = (): void => {
    AppNavigationService.openHomePage();
  };

  const openAboutPage = (): void => {
    AppNavigationService.openAboutPage();
  };

  const openFAQPage = (): void => {
    AppNavigationService.openFAQPage();
  };

  return (
    <nav className={styles['navigation']}>
      <ul className={`
        ${styles['navigation-list']}
        ${styles[`navigation-list_${direction}`]}
        ${listClassName ? listClassName : ''}
      `}>
        <NavigationItem
          path={configuration.routes.pages.home}
          isUseRoterDOM={isUseRoterDOM}
          className={itemClassname}
          handleClick={openHomePage}
          title="Home" />

        <NavigationItem
          path={configuration.routes.pages.about}
          isUseRoterDOM={isUseRoterDOM}
          className={itemClassname}
          handleClick={openAboutPage}
          title="About" />

        <NavigationItem
          path={configuration.routes.pages.faq}
          isUseRoterDOM={isUseRoterDOM}
          className={itemClassname}
          handleClick={openFAQPage}
          title="FAQ" />
      </ul>
    </nav>
  );
}
