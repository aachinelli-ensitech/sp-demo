import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2024 Your Company. All Rights Reserved.</p>
    </footer>
  );
};

export default Footer;