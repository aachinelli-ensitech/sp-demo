import React from 'react';
import styles from './Footer.module.scss';

const Footer: React.FC = () => {
  return (
    <footer className={styles.footer}>
      <p>© 2024 Su empresa. Todos los derechos reservados.</p>
    </footer>
  );
};

export default Footer;