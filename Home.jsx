import React, { useState } from 'react'
import { useLocation, useNavigate } from 'react-router';
import LoadingBar from 'react-top-loading-bar';

const Home = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const [data, setData] = useState([{
        username: "",
        password: ""
    }]);

    const handleLogout = () => {
        // Clear session storage and reset the data state
        sessionStorage.removeItem('username');
        sessionStorage.removeItem('password');
        setData({ username: '', password: '' });
        navigate('/')
    };

    return (
        <>
            <div style={{ textAlign: 'center' }}>
                <h3>Hello, {location.state.name}</h3>
                <button style={{ marginTop: '1rem' }} onClick={handleLogout}>Logout</button>
            </div>
        </>
    )
}

export default Home;