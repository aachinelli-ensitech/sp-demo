import React, { useState } from 'react';

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
      <div className={`sidebar ${collapsed ? 'collapsed' : ''}`}>
        <button className="toggle-button" onClick={toggleCollapse}>
          {collapsed ? '☰' : '✕'}
        </button>
        <ul>
          {menuItems.map((item, index) => (
            <li key={index} className="menu-item">
              <a href={item.link}>
                <span className="icon">{item.icon}</span>
                {!collapsed && <span className="name">{item.name}</span>}
                {collapsed && <span className="tooltip">{item.name}</span>}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default Sidebar;