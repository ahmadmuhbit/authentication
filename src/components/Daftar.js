import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Daftar = () => {
    const[username,setUsername] = useState('');
    const[email,setEmail]       = useState('');
    const[password,setPassword] = useState('');


    const changeUsername = (e) => {
        const value = e.target.value
        setUsername(value)
    }
    const changeEmail = (e) => {
        const value = e.target.value
        setEmail(value)
    }
    const changePassword = (e) => {
        const value = e.target.value
        setPassword(value)
    }

    return (
        <div>
            <div style={{marginTop: '220px'}}>
                <div className="row justify-content-center">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <div className="form-group">
                                    <label>Username</label>
                                    <input type="text" placeholder="Username" className="form-control" value={username} onChange={changeUsername} />
                                </div>
                                <div className="form-group">
                                    <label>Email</label>
                                    <input type="email" placeholder="Email" className="form-control" value={email} onChange={changeEmail} />
                                </div>
                                <div className="form-group">
                                    <label>Password</label>
                                    <input type="password" placeholder="Password" className="form-control" value={password} onChange={changePassword} />
                                </div>
                                <button className="btn btn-primary">Daftar</button>{' '}
                                 <Link to="/" className="btn btn-warning">
                                     Batal
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Daftar