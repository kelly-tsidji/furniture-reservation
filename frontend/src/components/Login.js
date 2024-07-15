import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// TODO: import login function from services/api
// TODO: split function into parts

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const navigate = useNavigate();     // TODO: figure out navigate later

    // TODO: Add logic to move to the Dashboard page
    const handleLogin = (e) => {
        e.preventDefault();
        alert(`Username: ${username}, Password: ${password}`);
    }

    return (
        <div className='container'>

            <h2>Login</h2>

            <form onSubmit={handleLogin}>
                <div className='form-group'>

                    <label>Username</label>

                    <input type='text' className='form-control' 
                           value={username} 
                           onChange={(e) => setUsername(e.target.value)} 
                        required />
                </div>

                <div className='form-group'>

                    <label>Password</label>

                    <input type='text' className='form-control' 
                           value={password} 
                           onChange={(e) => setPassword(e.target.value)} 
                        required />
                </div>
                <button type='submit' className='btn btn-primary'>Login</button>
            </form>
        </div>
    );
}

export default Login;
