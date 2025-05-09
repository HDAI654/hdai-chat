"use client";
import { useState, useEffect, use } from 'react';
import styles from '../public/css/login.module.css';
import { setAuthCookies, getAuthToken } from '../public/js/auth';

export default function Login({ setLogin }) {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const API_URL = 'https://67d81af29d5e3a10152d6a97.mockapi.io/kol-msg/users';

  useEffect(() => {
    if (getAuthToken()) {
      setLogin(true);
    }
  }, []);

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${API_URL}?username=${username}&password=${password}`);
      const users = await res.json();
      const user = users.find(u => u.username === username && u.password === password);

      if (user) {
        setAuthCookies(username);
        router.push('/');
      } else {
        setError('Invalid username or password!');
      }
    } catch {
      setError('Server error! Try again later.');
    }
  };

  return (
    <div className={`container ${styles.loginContainer}`}>
      <div className="card p-4 shadow-sm mx-auto mt-5" style={{ maxWidth: '400px' }}>
        <h3 className="text-center">Login</h3>
        <form onSubmit={handleLogin}>
          <div className="form-group mt-3">
            <label>Username</label>
            <input className="form-control" value={username} onChange={e => setUsername(e.target.value)} required />
          </div>
          <div className="form-group mt-3">
            <label>Password</label>
            <input type="password" className="form-control" value={password} onChange={e => setPassword(e.target.value)} required />
          </div>
          <button className="btn btn-primary w-100 mt-4">Login</button>
        </form>
        {error && <div className="text-danger mt-3 text-center">{error}</div>}
      </div>
    </div>
  );
}