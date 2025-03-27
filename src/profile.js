import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfilePage = () => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Show confirmation dialog
        const isConfirmed = window.confirm("Are you sure you want to log out?");
        
        // If user confirms, redirect to the login page
        if (isConfirmed) {
            navigate('/login');
        }
    };

    return (
        <div style={{
            backgroundColor: '#f0f2f5', padding: '40px', textAlign: 'center', fontFamily: 'Arial, sans-serif'
        }}>
            <div style={{
                background: 'white', maxWidth: '500px', margin: 'auto', padding: '30px',
                borderRadius: '12px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}>
                <img 
                    src="/img/familyphoto.jpg" 
                    alt="Profile"
                    style={{
                        width: '150px', height: '150px', borderRadius: '50%', objectFit: 'cover', marginBottom: '20px'
                    }}
                />
                <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Emma J. Pratt</h2>
                <p style={{ fontSize: '16px', color: '#555' }}>Let's follow Jesus</p>
                <div style={{ marginTop: '30px' }}>
                    <button style={{
                        padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', borderRadius: '25px',
                        border: 'none', cursor: 'pointer', fontSize: '16px', marginRight: '15px'
                    }}>
                        Edit Profile
                    </button>
                    <button 
                        onClick={handleLogout} 
                        style={{
                            padding: '10px 20px', backgroundColor: '#f44336', color: 'white', borderRadius: '25px',
                            border: 'none', cursor: 'pointer', fontSize: '16px'
                        }}
                    >
                        Log Out
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProfilePage;
