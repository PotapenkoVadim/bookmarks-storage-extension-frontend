import React, { ReactElement } from 'react';
import { Link } from 'react-router-dom';
import styles from './navigation.module.scss';

export default function NavigationItem({
  title,
  handleClick,
  isUseRoterDOM,
  path,
  className
}: {
  title: string;
  handleClick: () => void;
  isUseRoterDOM: boolean;
  path?: string;
  className?: string;
}): ReactElement {
  return (
    <li className={`
      ${styles['navigation-item']}
      ${className ? className : ''}
    `}>
      {isUseRoterDOM
        ? <Link className={styles['navigation-link']} to={`/${path}`}>{title}</Link>
        : <a className={styles['navigation-link']} onClick={handleClick}>{title}</a>
      }
    </li>
  );
}
