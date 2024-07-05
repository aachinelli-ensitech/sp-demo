import React, { useState } from 'react';
import styles from './Sidebar.module.scss';
import Button from '../Button';
import { FiArrowLeftCircle, FiMenu } from 'react-icons/fi';

interface MenuItem {
  name: string;
  icon: React.ReactNode;
  link: string;
}

interface SidebarProps {
  menuItems: MenuItem[];
}

const Sidebar: React.FC<SidebarProps> = ({ menuItems }) => {
  const [collapsed, setCollapsed] = useState(false);

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className={`${styles.sidebar} ${collapsed ? styles.collapsed : ''}`}>
      <div className={styles.header}>
        {
          !collapsed ?
          <div className={styles.logo}>
            <span className={styles.logoPro}>Pro</span><span className={styles.logoVisor}>Visor</span><span className={styles.logoID}>ID</span>
          </div> : null
        }
        <button className={styles.toggleButton} onClick={toggleCollapse}>
          {collapsed ? 
            <p>
              <FiMenu />
            </p>
            : 
            <p>
              <FiArrowLeftCircle />
            </p>
          }
        </button>
      </div>
      <ul className={styles.menu}>
        {menuItems.map((item, index) => (
          <li key={index} className={styles.menuItem}>
            <Button label={collapsed ? '' : item.name} icon={item.icon} />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;
