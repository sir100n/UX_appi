import React, { useState } from 'react';
import Header from '../components/Header';
import { Search as SearchIcon, X } from 'lucide-react';

const SearchResult = ({ title, author, imageSrc, isAvailable }) => (
    <div style={{
        display: 'flex',
        alignItems: 'flex-start',
        padding: '16px 20px',
        borderBottom: '1px solid #eee'
    }}>
        <div style={{
            width: '60px',
            height: '90px',
            background: '#eee',
            borderRadius: '4px',
            marginRight: '16px',
            flexShrink: 0,
            overflow: 'hidden'
        }}>
            {imageSrc && <img src={imageSrc} alt={title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />}
        </div>

        <div style={{ flex: 1, marginRight: '16px' }}>
            <h3 style={{ fontSize: '16px', fontWeight: 'bold', margin: '0 0 4px 0' }}>{title}</h3>
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
            <button style={{
                background: 'var(--brand-blue)',
                color: 'white',
                border: 'none',
                borderRadius: '8px',
                padding: '8px 24px',
                fontWeight: '600',
                fontSize: '14px'
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
    return (
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
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
                    background: '#eef',
                    borderRadius: '10px',
                    padding: '8px 12px',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px'
                }}>
                    <SearchIcon size={20} color="#888" />
                    <input
                        type="text"
                        placeholder="Hae..."
                        defaultValue="Harry Potter"
                        style={{
                            border: 'none',
                            background: 'transparent',
                            fontSize: '16px',
                            flex: 1,
                            outline: 'none'
                        }}
                    />
                    <X size={20} color="#888" />
                </div>
            </div>

            <div style={{ flex: 1, overflowY: 'auto' }}>
                <SearchResult
                    title="Harry Potter ja viisasten kivi"
                    author="Harry Potter"
                    imageSrc="/covers/potter.png"
                    isAvailable={true}
                />
                <SearchResult
                    title="Harry Potter ja Azkabanin va..."
                    author="J.K. Reylong"
                    imageSrc="/covers/potter.png"
                    isAvailable={false}
                />
            </div>
        </div>
    );
};

export default Search;
