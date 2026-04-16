import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Login() {
  const navigate = useNavigate();
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    name: '', email: '', password: '', role: 'student'
  });
  const [error, setError] = useState('');

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Because backend operates with mock features mostly for this demo
    try {
      const endpoint = isLogin ? 'http://localhost:5000/api/auth/login' : 'http://localhost:5000/api/auth/register';
      const res = await fetch(endpoint, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || 'Something went wrong');

      if (!isLogin) {
        setIsLogin(true); // switch to login after successful register
        alert('Registration successful. Please login.');
      } else {
        localStorage.setItem('token', data.token);
        localStorage.setItem('user', JSON.stringify(data.user));
        
        let targetRoute = '/dashboard';
        if (data.user.role === 'admin') targetRoute = '/admin';
        if (data.user.role === 'faculty') targetRoute = '/faculty';
        
        navigate(targetRoute);
      }
    } catch (err) {
      setError(err.message);
    }
  };

  return (
    <div className="animate-fade-in" style={{ padding: '6rem 0', display: 'flex', justifyContent: 'center' }}>
      <div className="card" style={{ width: '100%', maxWidth: '450px' }}>
        <h2 style={{ textAlign: 'center', marginBottom: '2rem' }}>{isLogin ? 'Welcome Back' : 'Create Account'}</h2>
        
        {error && <div style={{ background: '#ffebee', color: '#c62828', padding: '0.75rem', borderRadius: '4px', marginBottom: '1rem' }}>{error}</div>}

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {!isLogin && (
            <input 
              type="text" name="name" placeholder="Full Name" required 
              style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }}
              onChange={handleChange}
            />
          )}
          <input 
            type="email" name="email" placeholder="Email Address" required 
            style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }}
            onChange={handleChange}
          />
          <input 
            type="password" name="password" placeholder="Password" required 
            style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }}
            onChange={handleChange}
          />
          {!isLogin && (
            <select name="role" onChange={handleChange} style={{ padding: '0.75rem', borderRadius: '4px', border: '1px solid #ccc' }}>
              <option value="student">Student</option>
              <option value="admin">Admin</option>
              <option value="faculty">Faculty</option>
            </select>
          )}

          <button type="submit" className="btn btn-primary" style={{ padding: '1rem' }}>
            {isLogin ? 'Login' : 'Signup'}
          </button>
        </form>

        <p style={{ textAlign: 'center', marginTop: '1.5rem', color: 'var(--text-light)' }}>
          {isLogin ? "Don't have an account? " : "Already have an account? "}
          <span 
            onClick={() => setIsLogin(!isLogin)} 
            style={{ color: 'var(--primary)', cursor: 'pointer', fontWeight: 600 }}
          >
            {isLogin ? 'Sign up' : 'Login'}
          </span>
        </p>
      </div>
    </div>
  );
}

export default Login;
