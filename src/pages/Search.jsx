import React, { useState } from 'react';
import Header from '../components/Header';
import { Search as SearchIcon, X, CheckCircle } from 'lucide-react';

const BorrowSuccessModal = ({ bookTitle, onClose }) => (
    <div style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        backgroundColor: 'rgba(0,0,0,0.5)',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        zIndex: 1000,
        padding: '24px'
    }}>
        <div style={{
            backgroundColor: 'var(--bg-primary)',
            color: 'var(--text-primary)',
            borderRadius: '16px',
            padding: '32px 24px',
            width: '100%',
            maxWidth: '320px',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)'
        }}>
            <div style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                backgroundColor: '#2ecc71',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px'
            }}>
                <CheckCircle size={48} color="white" strokeWidth={3} />
            </div>

            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>Laina onnistui</h2>

            <p style={{ fontSize: '16px', margin: '0 0 4px 0', fontWeight: '500' }}>{bookTitle}</p>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: '0 0 24px 0' }}>Eräpäivä: 10.01.2024</p>

            <button
                onClick={onClose}
                className="btn-primary"
            >
                OK
            </button>
        </div>
    </div>
);

const SearchResult = ({ title, author, imageSrc, isAvailable, onBorrow }) => (
    <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        padding: '16px 20px',
        borderBottom: '1px solid var(--border-color)'
    }}>
        <div style={{
            width: '60px',
            height: '90px',
            background: 'var(--bg-secondary)',
            borderRadius: '4px',
            marginRight: '16px',
            flexShrink: 0,
            overflow: 'hidden'
        }}>
            {imageSrc && <img src={imageSrc} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
        </div>

        <div style={{ flex: 1, marginRight: '16px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', margin: '0 0 4px 0', color: 'var(--text-primary)' }}>{title}</h3>
            <p style={{ color: 'var(--text-secondary)', margin: '0 0 4px 0' }}>{author}</p>

            {/* Availability Indicator */}
            <div style={{ display: 'flex', alignItems: 'center', gap: '6px' }}>
                <div style={{
                    width: '10px',
                    height: '10px',
                    borderRadius: '50%',
                    backgroundColor: isAvailable ? '#2ecc71' : '#e74c3c' // Green if available, Red if not
                }} />
                <span style={{ fontSize: '12px', color: 'var(--text-secondary)' }}>
                    {isAvailable ? 'Saatavilla' : 'Varattu'}
                </span>
            </div>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '8px' }}>
            <button
                disabled={!isAvailable}
                onClick={onBorrow}
                style={{
                    background: isAvailable ? 'var(--brand-blue)' : '#c6c6c8',
                    color: 'white',
                    border: 'none',
                    borderRadius: '8px',
                    padding: '8px 24px',
                    fontWeight: '600',
                    fontSize: '14px',
                    cursor: isAvailable ? 'pointer' : 'default'
                }}>
                Lainaa
            </button>
            <button style={{
                background: 'var(--brand-blue)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                padding: '8px 24px',
                fontWeight: '600',
                fontSize: '14px'
            }}>
                Varaa
            </button>
        </div>
    </div>
);

const Search = () => {
    const [borrowModal, setBorrowModal] = useState(null); // { title: string } or null

    const handleBorrow = (title) => {
        setBorrowModal({ title });
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%', position: 'relative' }}>
            {borrowModal && (
                <BorrowSuccessModal
                    bookTitle={borrowModal.title}
                    onClose={() => setBorrowModal(null)}
                />
            )}

            {/* Header with Search Bar overlay */}
            <div style={{
                background: 'var(--bg-primary)',
                color: 'var(--text-primary)',
                padding: '50px 16px 12px',
                borderBottom: '1px solid var(--border-color)'
            }}>
                <div style={{ textAlign: 'center', fontWeight: 'bold', marginBottom: '12px' }}>
                    TaskuHelmet
                </div>
                <div style={{
                    background: 'var(--bg-secondary)',
                    borderRadius: '10px',
                    padding: '8px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}>
                    <SearchIcon size={20} color="var(--text-secondary)" />
                    <input
                        type="text"
                        placeholder="Hae..."
                        defaultValue="Harry Potter"
                        style={{
                            border: 'none',
                            background: 'transparent',
                            fontSize: '16px',
                            flex: 1,
                            outline: 'none',
                            color: 'var(--text-primary)'
                        }}
                    />
                    <X size={20} color="var(--text-secondary)" />
                </div>
            </div>

            <div style={{ flex: 1, overflowY: 'auto' }}>
                <SearchResult
                    title="Harry Potter ja viisasten kivi"
                    author="Harry Potter"
                    imageSrc="/covers/potter.png"
                    isAvailable={true}
                    onBorrow={() => handleBorrow("Harry Potter ja viisasten kivi")}
                />
                <SearchResult
                    title="Harry Potter ja Azkabanin va..."
                    author="J.K. Reylong"
                    imageSrc="/covers/potter.png"
                    isAvailable={false}
                    onBorrow={() => handleBorrow("Harry Potter ja Azkabanin va...")}
                />
            </div>
        </div>
    );
};

export default Search;
