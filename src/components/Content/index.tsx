import React from 'react';
import styles from './Content.module.scss';

interface MainContentProps {
  children: React.ReactNode;
}

const Content: React.FC<MainContentProps> = ({ children }) => {
  return <div className={styles.content}>{children}</div>;
};

export default Content;
