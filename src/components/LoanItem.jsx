import React from 'react';

const LoanItem = ({ title, author, dueDate, isDueSoon, statusLabel, imageSrc, onRenew }) => {
    return (
        <div style={{
            display: 'flex',
            alignItems: 'center',
            marginBottom: '16px',
            gap: '16px'
        }}>
            {/* Book Cover */}
            <div style={{
                width: '60px',
                height: '90px',
                backgroundColor: 'var(--bg-secondary)',
                borderRadius: '4px',
                flexShrink: 0,
                overflow: 'hidden'
            }}>
                {imageSrc ? (
                    <img src={imageSrc} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                ) : (
                    <div style={{ width: '100%', height: '100%', background: '#ccc' }} />
                )}
            </div>

            <div style={{ flex: 1 }}>
                <h3 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 4px 0', lineHeight: '1.2', color: 'var(--text-primary)' }}>{title}</h3>
                {author && <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: '0 0 4px 0' }}>{author}</p>}
                <p style={{ fontSize: '14px', color: isDueSoon ? '#d00' : 'var(--text-secondary)', margin: 0 }}>
                    {statusLabel}: {dueDate}
                </p>
            </div>

            <button onClick={onRenew} style={{
                backgroundColor: 'var(--btn-primary)',
                color: 'white',
                border: 'none',
                borderRadius: '6px',
                padding: '8px 20px',
                fontSize: '14px',
                fontWeight: '600',
                cursor: 'pointer'
            }}>
                Uusi
            </button>
        </div>
    );
};

export default LoanItem;
