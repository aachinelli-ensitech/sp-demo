import React from 'react';
import styles from './Content.module.scss';

interface MainContentProps {
  children: React.ReactNode;
}

const MainContent: React.FC<MainContentProps> = ({ children }) => {
  return <div className={styles.mainContent}>{children}</div>;
};

export default MainContent;
