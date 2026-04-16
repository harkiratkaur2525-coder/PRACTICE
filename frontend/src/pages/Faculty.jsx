import React from 'react';
import { useNavigate } from 'react-router-dom';

function Faculty() {
  const navigate = useNavigate();
  const user = JSON.parse(localStorage.getItem('user'));

  if (!localStorage.getItem('token') || user?.role !== 'faculty') {
    return (
      <div className="container section-padding animate-slide-up" style={{ textAlign: 'center' }}>
        <h2>Access Denied</h2>
        <p>You must be logged in as Faculty to view this page.</p>
        <button className="btn btn-primary" style={{ marginTop: '2rem' }} onClick={() => navigate('/login')}>Login as Faculty</button>
      </div>
    );
  }

  return (
    <div className="animate-slide-up section-padding">
      <div className="container">
        <h1 style={{ marginBottom: '1rem' }}>Faculty Portal</h1>
        <p style={{ color: 'var(--text-light)', marginBottom: '3rem', fontSize: '1.2rem' }}>
          Welcome, {user?.name}. Manage your classes and students here.
        </p>

        <div className="flex gap-8" style={{ flexWrap: 'wrap' }}>
          <div className="card" style={{ flex: '1 1 400px' }}>
            <h3>Your Upcoming Classes</h3>
            <div style={{ marginTop: '1.5rem' }}>
              <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '8px', marginBottom: '1rem', borderLeft: '4px solid var(--secondary)' }}>
                <h4>Advanced Data Structures</h4>
                <p style={{ color: 'var(--text-light)' }}>Room 402 • 10:30 AM</p>
              </div>
              <div style={{ padding: '1rem', background: '#f8fafc', borderRadius: '8px', marginBottom: '1rem', borderLeft: '4px solid var(--primary)' }}>
                <h4>Artificial Intelligence</h4>
                <p style={{ color: 'var(--text-light)' }}>Lab 3 • 2:00 PM</p>
              </div>
            </div>
            <button className="btn btn-primary" style={{ marginTop: '1rem', width: '100%' }}>Launch Virtual Class</button>
          </div>

          <div className="card" style={{ flex: '1 1 400px' }}>
            <h3>Student Alerts</h3>
            <p style={{ color: 'var(--text-light)', marginTop: '1rem' }}>
              Students with attendance below 75%:
            </p>
            <ul style={{ marginTop: '1rem', listStyle: 'none', padding: 0 }}>
              <li style={{ padding: '0.5rem 0', borderBottom: '1px solid #eee', color: '#ef4444', fontWeight: 500 }}>
                • Rahul Kumar (65%)
              </li>
            </ul>
            <button className="btn btn-outline" style={{ marginTop: '1.5rem', width: '100%' }}>Send Warning Email</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Faculty;
