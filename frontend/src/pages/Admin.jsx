import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

function Admin() {
  const navigate = useNavigate();
  const [students, setStudents] = useState([]);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!localStorage.getItem('token') || user?.role !== 'admin') {
      navigate('/login');
      return;
    }

    fetch('http://localhost:5000/api/admin/students', {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    })
    .then(res => res.json())
    .then(setStudents)
    .catch(console.error);
  }, [navigate]);

  return (
    <div className="animate-fade-in" style={{ padding: '4rem 0' }}>
      <div className="container">
        <h1 style={{ marginBottom: '2rem' }}>Admin Dashboard</h1>
        
        <div className="card">
          <h3 style={{ marginBottom: '2rem' }}>Manage Students</h3>
          
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr style={{ background: '#f8fafc', borderBottom: '2px solid #eee', textAlign: 'left' }}>
                <th style={{ padding: '1rem' }}>Name</th>
                <th style={{ padding: '1rem' }}>Email</th>
                <th style={{ padding: '1rem' }}>Joined</th>
                <th style={{ padding: '1rem' }}>Action</th>
              </tr>
            </thead>
            <tbody>
              {students.length === 0 ? (
                <tr><td colSpan="4" style={{ padding: '1rem', textAlign: 'center' }}>No students found.</td></tr>
              ) : students.map(st => (
                <tr key={st._id} style={{ borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '1rem' }}>{st.name}</td>
                  <td style={{ padding: '1rem', color: 'var(--text-light)' }}>{st.email}</td>
                  <td style={{ padding: '1rem' }}>{new Date(st.createdAt).toLocaleDateString()}</td>
                  <td style={{ padding: '1rem' }}>
                    <button className="btn" style={{ background: '#fee2e2', color: '#ef4444', padding: '0.5rem 1rem' }}>Remove</button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default Admin;
