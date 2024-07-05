import React from 'react';
import { FaChevronDown } from 'react-icons/fa';
import styles from './TopBar.module.scss';
import { FiBell } from 'react-icons/fi';

const TopBar: React.FC = () => {
  return (
    <div className={styles.topBar}>
      <input
        type="text"
        placeholder="Buscar..."
        className={styles.searchInput}
      />
      <div className={styles.userInfo}>
        <FiBell className={styles.icon} />
        <div className={styles.userDetails}>
          <span>Brandon Orop</span>
          <span className={styles.userRole}>Promotor</span>
        </div>
        <FaChevronDown className={styles.dropdownIcon} />
      </div>
    </div>
  );
};

export default TopBar;
