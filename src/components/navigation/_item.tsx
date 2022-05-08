import React, { ReactElement } from 'react';
import styles from './navigation.module.scss';

export default function NavigationItem({
  title,
  handleClick,
  className
}: {
  title: string;
  handleClick: () => void;
  className?: string;
}): ReactElement {
  return (
    <li className={`
      ${styles['navigation-item']}
      ${className ? className : ''}
    `}>
      <a onClick={handleClick}>
        {title}
      </a>
    </li>
  );
}
