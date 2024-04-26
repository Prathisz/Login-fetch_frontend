import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  async function LoginUser(event) {
    event.preventDefault();
    try {
      const response = await fetch('http://localhost:5000/api/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email,
          password,
        }),
      });
      if (!response.ok) {
        throw new Error('Failed to log in');
      }
      const data = await response.json();
      console.log(data);
      sessionStorage.setItem('accessToken', data.user);

      if (data.user) {
        alert('Login successful');
        navigate("/dashboard");
      } else {
        setErrorMessage('Please check username and password');
      }
    } catch (error) {
      console.error('Login error:', error);
      setErrorMessage('An error occurred while logging in');
    }
  }

  return (
    <div className="login-container">
      <h1>Login</h1>
      <form onSubmit={LoginUser}>
        <input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          type="email"
          placeholder="Email"
          style={styles.input}
        />
        <input
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          type="password"
          placeholder="Password"
          style={styles.input}
        />
        <button type="submit" style={styles.button}>Login</button>
      </form>
      {errorMessage && <p style={styles.error}>{errorMessage}</p>}
    </div>
  );
}

const styles = {
  input: {
    margin: '10px 0',
    padding: '8px',
    fontSize: '16px',
    borderRadius: '5px',
    border: '1px solid #ccc',
    width: '100%',
    boxSizing: 'border-box',
  },
  button: {
    backgroundColor: '#4CAF50',
    color: 'white',
    padding: '14px 20px',
    margin: '10px 0',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
    width: '100%',
    fontSize: '16px',
  },
  error: {
    color: 'red',
    margin: '10px 0',
  },
};

export default Login;
