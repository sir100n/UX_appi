import React from 'react';

const Header = () => {
    return (
        <div style={{
            backgroundColor: 'var(--brand-blue)',
            padding: '16px 20px',
            paddingTop: '48px', /* Status bar space */
            color: 'white',
            boxShadow: '0 2px 4px rgba(0,0,0,0.1)'
        }}>
            <h1 style={{
                fontSize: '22px',
                fontWeight: '700',
                margin: 0
            }}>
                TaskuHelmet
            </h1>
        </div>
    );
};

export default Header;
