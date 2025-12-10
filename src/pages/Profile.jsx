import React, { useState } from 'react';
import { User, ChevronRight, Lock, Bell, CreditCard, X, ArrowLeft, Moon, Sun } from 'lucide-react';
import { useTheme } from '../context/ThemeContext';

const ProfileMenuItem = ({ icon: Icon, label, onClick, rightElement }) => (
    <button onClick={onClick} style={{
        display: 'flex',
        alignItems: 'center',
        width: '100%',
        padding: '16px 20px',
        background: 'var(--bg-primary)', // Use var for dark mode
        border: 'none',
        borderBottom: '1px solid var(--border-color)', // Use var
        justifyContent: 'space-between',
        fontSize: '16px',
        color: 'var(--text-primary)'
    }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <Icon size={24} color="var(--brand-blue)" />
            <span>{label}</span>
        </div>
        {rightElement || <ChevronRight size={20} color="var(--text-secondary)" />}
    </button>
);

const Profile = () => {
    const [showCard, setShowCard] = useState(false);
    const { theme, toggleTheme } = useTheme();

    if (showCard) {
        return (
            <div style={{ backgroundColor: 'var(--bg-primary)', color: 'var(--text-primary)', height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div style={{ padding: '24px' }}>
                    <button
                        onClick={() => setShowCard(false)}
                        style={{ border: 'none', background: 'none', padding: 0, marginBottom: '24px', display: 'flex', alignItems: 'center', gap: '8px', fontSize: '16px', color: 'var(--brand-blue)' }}
                    >
                        <ArrowLeft size={24} />
                        Takaisin
                    </button>

                    <h1 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '16px' }}>Digitaalinen<br />kirjastokortti</h1>

                    <div style={{
                        border: '4px solid var(--brand-blue)',
                        borderRadius: '8px',
                        padding: '32px 16px',
                        display: 'flex',
                        flexDirection: 'column',
                        alignItems: 'center',
                        boxShadow: '0 4px 12px rgba(0,0,0,0.05)',
                        backgroundColor: 'white', // Card should probably stay white for barcode contrast
                        color: 'black'
                    }}>
                        {/* Simulated Barcode */}
                        <div style={{
                            height: '80px',
                            width: '90%',
                            background: 'repeating-linear-gradient(90deg, #000 0px, #000 2px, transparent 2px, transparent 4px, #000 4px, #000 5px, transparent 5px, transparent 8px, #000 8px, #000 11px, transparent 11px, transparent 13px)',
                            marginBottom: '24px',
                            transform: 'scaleX(1.1)' /* Stretch for barcode look */
                        }} />

                        <h2 style={{ fontSize: '16px', fontWeight: '600', margin: '0 0 4px 0' }}>Matti Meikäläinen</h2>
                        <p style={{ fontSize: '18px', margin: 0, letterSpacing: '1px' }}>0012345678</p>
                    </div>

                    <p style={{ textAlign: 'center', marginTop: '32px', color: 'var(--text-secondary)' }}>
                        Näytä tämä viivakoodi kirjaston lainausautomaatilla.
                    </p>
                </div>
            </div>
        );
    }

    return (
        <div style={{ backgroundColor: 'var(--bg-secondary)', minHeight: '100%' }}>
            {/* Header */}
            <div style={{
                backgroundColor: 'var(--bg-primary)',
                padding: '48px 20px 16px',
                textAlign: 'center',
                borderBottom: '1px solid var(--border-color)',
                fontWeight: 'bold',
                fontSize: '18px',
                color: 'var(--brand-blue)'
            }}>
                Profiili
            </div>

            {/* User Info Card */}
            <div style={{
                backgroundColor: 'var(--bg-primary)',
                padding: '24px 20px',
                display: 'flex',
                alignItems: 'center',
                gap: '20px',
                marginBottom: '16px',
                borderBottom: '1px solid var(--border-color)',
                color: 'var(--text-primary)'
            }}>
                <div style={{
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    backgroundColor: '#ddd',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    <User size={30} color="#999" />
                </div>
                <div>
                    <h2 style={{ fontSize: '18px', margin: '0 0 4px 0' }}>Matti Meikäläinen</h2>
                    <p style={{ margin: 0, color: 'var(--text-secondary)', fontSize: '14px' }}>Kirjast: 0012345678</p>
                </div>
            </div>

            {/* Menu List */}
            <div style={{ marginBottom: '24px', borderTop: '1px solid var(--border-color)', borderBottom: '1px solid var(--border-color)' }}>
                <ProfileMenuItem icon={User} label="Omat tiedot" />
                <ProfileMenuItem icon={Lock} label="Vaihda salasana" />
                <ProfileMenuItem icon={Bell} label="Ilmoitusasetukset" />
                <ProfileMenuItem
                    icon={theme === 'dark' ? Moon : Sun}
                    label={theme === 'dark' ? 'Tumma tila' : 'Vaalea tila'}
                    rightElement={
                        <div style={{ position: 'relative', width: '44px', height: '24px', background: theme === 'dark' ? 'var(--brand-blue)' : '#ccc', borderRadius: '12px', transition: '0.3s' }}>
                            <div style={{ position: 'absolute', top: '2px', left: theme === 'dark' ? '22px' : '2px', width: '20px', height: '20px', background: 'white', borderRadius: '50%', transition: '0.3s' }} />
                        </div>
                    }
                    onClick={toggleTheme}
                />
            </div>

            {/* Digital Library Card Section */}
            <div style={{ padding: '0 20px' }}>
                <h3 style={{ fontSize: '16px', fontWeight: 'bold', marginBottom: '12px', color: 'var(--text-primary)' }}>Digitaalinen kirjastokortti</h3>
                <button
                    onClick={() => setShowCard(true)}
                    className="btn-primary"
                    style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        gap: '12px',
                        borderRadius: '8px',
                        padding: '14px'
                    }}>
                    <CreditCard size={24} />
                    Näytä kirjastokortti
                </button>
            </div>
        </div>
    );
};

export default Profile;
