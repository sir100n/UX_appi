import React from 'react';
import { motion } from 'framer-motion';
import { Heart, MessageCircle, Share2 } from 'lucide-react';

const FeedCard = ({ post, index }) => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, type: "spring", stiffness: 100 }}
            className="glass-panel"
            style={{
                marginBottom: '24px',
                overflow: 'hidden',
                border: '1px solid var(--glass-border)',
            }}
        >
            <div style={{ position: 'relative', height: '240px', overflow: 'hidden' }}>
                <img
                    src={post.image}
                    alt={post.title}
                    style={{
                        width: '100%',
                        height: '100%',
                        objectFit: 'cover',
                        transition: 'transform 0.5s ease'
                    }}
                    onMouseOver={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
                    onMouseOut={(e) => e.currentTarget.style.transform = 'scale(1)'}
                />
                <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    background: 'linear-gradient(to top, rgba(0,0,0,0.8), transparent)',
                    padding: '24px 16px 16px',
                }}>
                    <h3 style={{ fontSize: '18px', fontWeight: '600', marginBottom: '4px' }}>{post.title}</h3>
                    <p style={{ fontSize: '14px', color: 'var(--text-secondary)' }}>{post.subtitle}</p>
                </div>
            </div>

            <div style={{ padding: '16px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <div style={{ display: 'flex', gap: '16px' }}>
                    <button style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)' }}>
                        <Heart size={20} />
                        <span style={{ fontSize: '14px' }}>{post.likes}</span>
                    </button>
                    <button style={{ display: 'flex', alignItems: 'center', gap: '6px', color: 'var(--text-secondary)' }}>
                        <MessageCircle size={20} />
                        <span style={{ fontSize: '14px' }}>{post.comments}</span>
                    </button>
                </div>
                <button style={{ color: 'var(--text-secondary)' }}>
                    <Share2 size={20} />
                </button>
            </div>
        </motion.div>
    );
};

export default FeedCard;
