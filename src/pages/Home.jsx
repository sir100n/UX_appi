import React, { useState } from 'react';
import Header from '../components/Header';
import LoanItem from '../components/LoanItem';
import { CheckCircle, X } from 'lucide-react';

const RenewalModal = ({ bookTitle, newDueDate, onClose }) => (
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

            <h2 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '8px' }}>Laina uusittu</h2>

            <p style={{ fontSize: '16px', margin: '0 0 4px 0', fontWeight: '500' }}>{bookTitle}</p>
            <p style={{ fontSize: '14px', color: 'var(--text-secondary)', margin: '0 0 24px 0' }}>Uusi eräpäivä: {newDueDate}</p>

            <button
                onClick={onClose}
                className="btn-primary"
            >
                OK
            </button>
        </div>
    </div>
);

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

const BookActionModal = ({ bookTitle, onClose, onBorrow, onReserve }) => (
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
            padding: '24px',
            width: '100%',
            maxWidth: '320px',
            display: 'flex',
            flexDirection: 'column',
            boxShadow: '0 4px 20px rgba(0,0,0,0.2)',
            position: 'relative'
        }}>
            <button
                onClick={onClose}
                style={{
                    position: 'absolute',
                    top: '16px',
                    right: '16px',
                    background: 'none',
                    border: 'none',
                    cursor: 'pointer',
                    color: 'var(--text-secondary)'
                }}
            >
                <X size={24} />
            </button>

            <h2 style={{ fontSize: '18px', fontWeight: 'bold', marginBottom: '24px', textAlign: 'center' }}>{bookTitle}</h2>

            <div style={{ display: 'flex', gap: '12px', width: '100%' }}>
                <button
                    onClick={onBorrow}
                    style={{
                        flex: 1,
                        backgroundColor: 'var(--brand-blue)',
                        color: 'white',
                        border: 'none',
                        borderRadius: '8px',
                        padding: '12px',
                        fontWeight: '600',
                        fontSize: '14px',
                        cursor: 'pointer'
                    }}
                >
                    Lainaa
                </button>
                <button
                    onClick={onReserve} // In this demo, maybe just close or show another mock
                    style={{
                        flex: 1,
                        backgroundColor: 'var(--bg-secondary)',
                        color: 'var(--text-primary)',
                        border: '1px solid var(--border-color)',
                        borderRadius: '8px',
                        padding: '12px',
                        fontWeight: '600',
                        fontSize: '14px',
                        cursor: 'pointer'
                    }}
                >
                    Varaa
                </button>
            </div>
        </div>
    </div>
);

const Home = () => {
    const [renewalModal, setRenewalModal] = useState(null); // { title: string, date: string } or null
    const [selectedBook, setSelectedBook] = useState(null); // { title: string } or null from recommendations
    const [borrowSuccess, setBorrowSuccess] = useState(null); // { title: string } or null

    const handleRenew = (title) => {
        // Function to calculate a random future date or static for demo
        const date = "28.12.2023";
        setRenewalModal({ title, date });
    };

    const handleRecommendationClick = (title) => {
        setSelectedBook({ title });
    };

    const handleBorrow = () => {
        const title = selectedBook?.title;
        setSelectedBook(null);
        setBorrowSuccess({ title });
    };

    const handleReserve = () => {
        // Just close for now, or could show another alert
        setSelectedBook(null);
    };

    return (
        <div style={{ position: 'relative' }}>
            {renewalModal && (
                <RenewalModal
                    bookTitle={renewalModal.title}
                    newDueDate={renewalModal.date}
                    onClose={() => setRenewalModal(null)}
                />
            )}
            {borrowSuccess && (
                <BorrowSuccessModal
                    bookTitle={borrowSuccess.title}
                    onClose={() => setBorrowSuccess(null)}
                />
            )}
            {selectedBook && (
                <BookActionModal
                    bookTitle={selectedBook.title}
                    onClose={() => setSelectedBook(null)}
                    onBorrow={handleBorrow}
                    onReserve={handleReserve}
                />
            )}

            <Header />
            <div style={{ padding: '24px 20px' }}>
                <h2 className="section-title">Erääntyvät lainat</h2>

                <LoanItem
                    title="Sinuhe egyptiläinen"
                    dueDate="Tänään"
                    statusLabel="Erääntyy"
                    isDueSoon={true}
                    imageSrc="/covers/sinuhe.png"
                    onRenew={() => handleRenew("Sinuhe egyptiläinen")}
                />
                <LoanItem
                    title="Tuntematon sotilas"
                    dueDate="Huomenna"
                    statusLabel="Erääntyy"
                    isDueSoon={true}
                    imageSrc="/covers/sotilas.png"
                    onRenew={() => handleRenew("Tuntematon sotilas")}
                />

                <div style={{ height: '32px' }} /> {/* Spacer */}

                <h2 className="section-title">Suositukset sinulle</h2>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '16px' }}>Perustuu aiempiin lainoihisi</p>

                <div style={{ display: 'flex', gap: '16px', overflowX: 'auto', paddingBottom: '16px' }}>
                    {/* Recommendation Cards */}
                    <div
                        onClick={() => handleRecommendationClick("Puhdistus")}
                        style={{ width: '140px', flexShrink: 0, cursor: 'pointer' }}
                    >
                        <img src="/covers/puhdistus.png" alt="Puhdistus" style={{ width: '100%', height: '200px', borderRadius: '8px', marginBottom: '8px', objectFit: 'cover' }} />
                        <p style={{ fontWeight: '600', fontSize: '14px' }}>Puhdistus</p>
                    </div>
                    <div
                        onClick={() => handleRecommendationClick("Koirapuisto")}
                        style={{ width: '140px', flexShrink: 0, cursor: 'pointer' }}
                    >
                        <div style={{ width: '100%', height: '200px', background: 'var(--bg-secondary)', borderRadius: '8px', marginBottom: '8px', overflow: 'hidden' }}>
                            {/* Reusing potter cover as generic placeholder for variety if needed, or make new one. Using random generated one. */}
                            <img src="/covers/potter.png" alt="Koirapuisto" style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'hue-rotate(90deg)' }} />
                        </div>
                        <p style={{ fontWeight: '600', fontSize: '14px' }}>Koirapuisto</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Home;
