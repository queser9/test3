import React, { useState } from 'react';

function Subscribe() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();
        
        try {
            const response = await fetch('http://localhost:3000/subscribe', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ email })
            });
            const data = await response.text();
            setMessage(data);
        } catch (error) {
            setMessage('Error subscribing.');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>SIGN UP FOR OUR DAILY INSIDER</label>
                <input 
                    type="email" 
                    value={email} 
                    onChange={e => setEmail(e.target.value)}
                    placeholder="Enter your email" 
                    required 
                />
                <input type="submit" value="Subscribe" />
            </form>
            {message && <p>{message}</p>}
        </div>
    );
}

export default Subscribe;
