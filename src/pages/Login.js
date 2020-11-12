import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import logoPapo from '../assets/logo-img.png';

import '../styles/login.css';

function Login() {
  const [id, setId] = useState('');
  const [password, setPassword] = useState('');
  const history = useHistory();

  async function handleLogin(e) {
    e.preventDefault();

    try {
      localStorage.setItem('userId', id);

      history.push('/start');
    } catch (err) {
      alert('Falha no login, tente novamente.');
    }
  }

  return (
    <div className="logon-landing">
      <img src={logoPapo} alt="Papo Watch Party" />
      <h1>Sign In to Papo</h1>
      <section className="loginForm">
        <form onSubmit={handleLogin}>
          <input required placeholder="User" value={id} onChange={(e) => setId(e.target.value)} />
          <input required placeholder="Password" type="password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <button id="login-button">Login</button>
        </form>
      </section>
      <footer>© Privoce 2020</footer>
    </div>
  );
}

export default Login;
