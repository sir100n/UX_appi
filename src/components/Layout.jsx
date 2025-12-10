import React from 'react';
import { Home, Search, User } from 'lucide-react';

const Layout = ({ children, activeTab, onTabChange }) => {
  const navItems = [
    { id: 'home', icon: Home, label: 'Koti' },
    { id: 'search', icon: Search, label: 'Haku' },
    { id: 'profile', icon: User, label: 'Profiili' },
  ];

  return (
    <div className="app-container">
      <main style={{ flex: 1, overflowY: 'auto', backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)' }}>
        {children}
      </main>

      <nav style={{
        backgroundColor: 'var(--bg-primary)',
        borderTop: '1px solid var(--border-color)',
        padding: '8px 0 24px 0',
        display: 'flex',
        justifyContent: 'space-around',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        zIndex: 100
      }}>
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;

          return (
            <button
              key={item.id}
              onClick={() => onTabChange(item.id)}
              style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                color: isActive ? 'var(--brand-blue)' : 'var(--text-secondary)',
                background: 'none',
                border: 'none',
                gap: '4px'
              }}
            >
              <Icon size={24} strokeWidth={isActive ? 2.5 : 2} />
              <span style={{ fontSize: '10px', fontWeight: isActive ? '600' : '400' }}>
                {item.label}
              </span>
            </button>
          );
        })}
      </nav>
    </div>
  );
};

export default Layout;
