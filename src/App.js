import React, { useState } from 'react';
import Subscribe from './components/Subscribe';
import Footer from './components/Footer';
import LoginPage from './components/LoginPage';
import './styles/MainContent.css';

function App() {
    const [isLoggedIn, setIsLoggedIn] = useState(false);

    const handleLogout = () => {
        setIsLoggedIn(false);
    };

    if (!isLoggedIn) {
        return <LoginPage onLogin={() => setIsLoggedIn(true)} />;
    }

    return (
        <div className="App">
            <button 
                onClick={handleLogout} 
                style={{ 
                    padding: '10px 20px', 
                    fontSize: '1em', 
                    cursor: 'pointer', 
                    position: 'absolute', 
                    top: '10px', 
                    right: '10px' 
                }}
            >
                Logout
            </button>
            <div className="main-content">
                <div className="main-title">Welcome to DevLink Marketplace</div>
                <div className="main-description">
                    Discover and subscribe here to get the latest updates and offers.
                </div>
                <Subscribe />
            </div>
            <Footer/>
        </div>
    );
}

export default App;



