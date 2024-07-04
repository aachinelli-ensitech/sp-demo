import React, { useState } from 'react';
import styles from './Sidebar.module.scss';

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
      <button className={styles.toggleButton} onClick={toggleCollapse}>
        {collapsed ? '☰' : '✕'}
      </button>
      <ul>
        {menuItems.map((item, index) => (
          <li key={index} className={styles.menuItem}>
            <a href={item.link}>
              <span className={styles.icon}>{item.icon}</span>
              {!collapsed && <span className={styles.name}>{item.name}</span>}
              {collapsed && <span className={styles.tooltip}>{item.name}</span>}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;