import React from 'react';
import styles from './Sidebar.module.scss';
import Button from '../Button';
import { FiArrowLeftCircle } from 'react-icons/fi';

interface MenuItem {
  name: string;
  icon: React.ReactNode;
  link: string;
}

interface SidebarProps {
  menuItems: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {

  return (
    <div className={`${styles.sidebar}`}>
      <div className={styles.header}>
          <div className={styles.logo}>
            <span className={styles.logoPro}>Pro</span><span className={styles.logoVisor}>Visor</span><span className={styles.logoID}>ID</span>
          </div>
        <button className={styles.toggleButton}>
            <p>
              <FiArrowLeftCircle />
            </p>
        </button>
      </div>
      <ul className={styles.menu}>
        {menuItems.map((item, index) => (
          <li key={index} className={styles.menuItem}>
            <Button label={item.name} icon={item.icon} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
