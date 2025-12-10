import React, { useEffect } from 'react';
import { ScanFace } from 'lucide-react';
import { motion } from 'framer-motion';

const Login = ({ onLogin }) => {
    return (
        <div className="app-container" style={{
            alignItems: 'center',
            padding: '48px 24px',
            justifyContent: 'space-between',
            backgroundColor: 'var(--bg-primary)',
            color: 'var(--text-primary)'
        }}>
            <div style={{
                marginTop: '60px',
                display: 'flex',
                alignItems: 'center',
                gap: '12px'
            }}>
                <div style={{
                    width: '40px',
                    height: '40px',
                    background: 'linear-gradient(135deg, #007bc0, #005a90)',
                    borderRadius: '10px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                }}>
                    {/* Simple Helmet Icon Representation */}
                    <div style={{ width: '20px', height: '10px', borderTopLeftRadius: '20px', borderTopRightRadius: '20px', background: 'white' }} />
                </div>
                <h1 style={{ fontSize: '28px', fontWeight: 'bold' }}>TaskuHelmet</h1>
            </div>

            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    transition={{ duration: 0.5 }}
                    style={{ marginBottom: '24px' }}
                >
                    <ScanFace size={80} strokeWidth={1.5} color="#007bc0" />
                </motion.div>
                <p style={{ fontSize: '18px', fontWeight: '500' }}>Kirjaudu FaceID:llä</p>
            </div>

            <button
                onClick={onLogin}
                className="btn-primary"
            >
                Kirjaudu tunnuksilla
            </button>
        </div>
    );
};

export default Login;
