import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { GraduationCap } from 'lucide-react';

function Navbar() {
  const navigate = useNavigate();
  const token = localStorage.getItem('token');
  const user = JSON.parse(localStorage.getItem('user'));

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    navigate('/');
  };

  return (
    <header style={{ padding: '15px 0' }}>
      <div className="container justify-between" style={{ display: 'flex', alignItems: 'center' }}>
        <Link to="/" className="flex items-center gap-4" style={{ color: 'var(--primary)' }}>
          <GraduationCap size={40} color="var(--primary)" />
          <div>
            <h2 style={{ margin: 0, fontSize: '1.5rem' }}>AGC</h2>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-light)', fontWeight: 600 }}>Amritsar Group of Colleges</span>
          </div>
        </Link>
        <nav className="nav-links">
          <Link to="/">Home</Link>
          <Link to="/about">About & Courses</Link>
          <Link to="/placements">Placements</Link>
          {token ? (
            <>
              {user?.role === 'admin' && <Link to="/admin">Admin Dashboard</Link>}
              {user?.role === 'faculty' && <Link to="/faculty">Faculty Portal</Link>}
              {user?.role === 'student' && <Link to="/dashboard">Student Portal</Link>}
              <button 
                className="btn btn-outline" 
                onClick={handleLogout}
                style={{ padding: '0.5rem 1rem' }}
              >
                Logout
              </button>
            </>
          ) : (
            <Link to="/login" className="btn btn-primary" style={{ padding: '0.5rem 1rem' }}>
              Login
            </Link>
          )}
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
