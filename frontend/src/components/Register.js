import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

// TODO: revisit this later when done with main site

// TODO: import register function from services/api
// TODO: split function into parts
// TODO: similarities between Login and Register, break down into similar components

function Register() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const role = 'user';    // TODO: edit later
    const navigate = useNavigate();     // TODO: figure out navigate later

    // TODO: Add logic to move to the Dashboard page
    const handleRegister = (e) => {
        e.preventDefault();
        alert(`Username: ${username}, Password: ${password}`);
    }

    return (
        <div className='container'>

            <h2>Register</h2>

            <form onSubmit={handleRegister}>

                <div className='form-group'>
                    <label>First and Last Initial</label>

                    <input 
                        type='text' 
                        className='form-control' 
                        value={name} 
                        onChange={(e) => setName(e.target.value)} 
                        required />
                </div>


                <div className='form-group'>
                    <label>Email</label>

                    <input 
                        type='email' 
                        className='form-control' 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required />
                </div>


                <div className='form-group'>
                    <label>Username</label>

                    <input 
                        type='text' 
                        className='form-control' 
                        value={username} 
                        onChange={(e) => setUsername(e.target.value)} 
                        required />
                </div>


                <div className='form-group'>

                    <label>Password</label>

                    <input 
                        type='text'
                        className='form-control' 
                        value={password} 
                        onChange={(e) => setPassword(e.target.value)} 
                        required />
                </div>

                <button type='submit' className='btn btn-primary'>Login</button>
            </form>
        </div>
    );
}

export default Register;
