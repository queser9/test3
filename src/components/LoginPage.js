import React, { useState } from 'react';

function LoginPage({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleLogin = () => {
        onLogin(username, password);
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', marginTop: '50px' }}>
            <label style={{ marginBottom: '10px', fontSize: '1.2em' }}>Login</label>
            <input
                type="text"
                placeholder="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                style={{ padding: '10px', marginBottom: '10px', fontSize: '1em', width: '200px' }}
            />
            <input
                type="password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                style={{ padding: '10px', marginBottom: '20px', fontSize: '1em', width: '200px' }}
            />
            <button onClick={handleLogin} style={{ padding: '10px 20px', fontSize: '1em', cursor: 'pointer' }}>
                Login
            </button>
        </div>
    );
}

export default LoginPage;
