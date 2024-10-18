import React, { useState } from 'react';
import axios from 'axios';

const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await axios.post('http://localhost:5000/api/auth/login', { email, password });
            setError(null);
        } catch (err) {
            setError('Invalid credentials. Please try again.');
        }
    };

    // Inline styles
    const styles = {
        container: {
            maxWidth: '400px',
            margin: '50px auto',
            padding: '20px',
            border: '1px solid #ccc',
            borderRadius: '8px',
            backgroundColor: '#f9f9f9',
            boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        title: {
            textAlign: 'center',
            marginBottom: '20px',
            fontSize: '24px',
            fontWeight: 'bold',
            color: '#333',
        },
        errorMessage: {
            color: 'red',
            textAlign: 'center',
            marginBottom: '15px',
        },
        form: {
            display: 'flex',
            flexDirection: 'column',
        },
        input: {
            padding: '10px',
            marginBottom: '15px',
            border: '1px solid #ccc',
            borderRadius: '4px',
            fontSize: '16px',
        },
        inputFocus: {
            borderColor: '#007bff',
            outline: 'none',
        },
        button: {
            padding: '10px',
            backgroundColor: '#007bff',
            color: 'white',
            border: 'none',
            borderRadius: '4px',
            fontSize: '16px',
            cursor: 'pointer',
        },
        buttonHover: {
            backgroundColor: '#0056b3',
        },
    };

    return (
        <div style={styles.container}>
            <h2 style={styles.title}>Login</h2>
            {error && <p style={styles.errorMessage}>{error}</p>}
            <form onSubmit={handleSubmit} style={styles.form}>
                <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Email"
                    required
                    style={styles.input}
                />
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    placeholder="Password"
                    required
                    style={styles.input}
                />
                <button
                    type="submit"
                    style={styles.button}
                    onMouseOver={(e) => (e.target.style.backgroundColor = styles.buttonHover.backgroundColor)}
                    onMouseOut={(e) => (e.target.style.backgroundColor = styles.button.backgroundColor)}
                >
                    Login
                </button>
            </form>
        </div>
    );
};

export default Login;
