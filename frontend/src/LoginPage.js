import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
    const navigate = useNavigate(); // Initialize navigate
    const [username, setUsername] = useState(''); // State for username
    const [password, setPassword] = useState(''); // State for password
    const [error, setError] = useState(''); // State for error message

    const handleLogin = (e) => {
        e.preventDefault(); // Prevent the default form submission

        // Basic validation: check if both username and password are empty
        if (username === '' && password === '') {
            setError('Username and Password are required.');
        } else {
            // If credentials are entered (in this case, any non-empty values)
            setError(''); // Clear the error message
            navigate('/posts'); // Redirect to Posts page
        }
    };

    return (
        <div style={{
            backgroundColor: '#f0f2f5', padding: '40px', textAlign: 'center', fontFamily: 'Arial, sans-serif'
        }}>
            <div style={{
                background: 'white', maxWidth: '400px', margin: 'auto', padding: '30px',
                borderRadius: '12px', boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
            }}>
                <h2 style={{ fontSize: '24px', fontWeight: 'bold' }}>Login</h2>
                <form onSubmit={handleLogin}>
                    <div style={{ marginBottom: '15px' }}>
                        <input
                            type="text"
                            placeholder="Username"
                            value={username}
                            onChange={(e) => setUsername(e.target.value)} // Update username state
                            style={{
                                width: '100%', padding: '10px', borderRadius: '25px', border: '1px solid #ccc', fontSize: '16px'
                            }}
                        />
                    </div>
                    <div style={{ marginBottom: '15px' }}>
                        <input
                            type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)} // Update password state
                            style={{
                                width: '100%', padding: '10px', borderRadius: '25px', border: '1px solid #ccc', fontSize: '16px'
                            }}
                        />
                    </div>
                    {error && <p style={{ color: 'red', fontSize: '14px' }}>{error}</p>} {/* Show error if needed */}
                    <div>
                        <button
                            type="submit"
                            style={{
                                padding: '10px 20px', backgroundColor: '#4CAF50', color: 'white', borderRadius: '25px',
                                border: 'none', cursor: 'pointer', fontSize: '16px'
                            }}
                        >
                            Log In
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default LoginPage;
