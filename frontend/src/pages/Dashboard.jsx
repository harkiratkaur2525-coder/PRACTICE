import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { PlayCircle, Award, BookOpen, AlertCircle } from 'lucide-react';

function Dashboard() {
  const navigate = useNavigate();
  const [data, setData] = useState(null);
  const user = JSON.parse(localStorage.getItem('user'));

  useEffect(() => {
    if (!localStorage.getItem('token') || user?.role !== 'student') {
      navigate('/login');
      return;
    }

    fetch('http://localhost:5000/api/student/dashboard', {
      headers: { 'Authorization': `Bearer ${localStorage.getItem('token')}` }
    })
    .then(res => res.json())
    .then(setData)
    .catch(console.error);
  }, [navigate]);

  if (!data) return <div className="flex justify-center items-center" style={{ height: '50vh' }}>Loading Dashboard...</div>;

  return (
    <div className="animate-slide-up section-padding">
      <div className="container">
        <h1 style={{ marginBottom: '1rem', fontSize: '3rem' }}>Student Portal</h1>
        <p style={{ color: 'var(--text-light)', marginBottom: '3rem', fontSize: '1.2rem' }}>
          Welcome back, {user?.name}. Here is your academic overview.
        </p>
        
        <div className="flex gap-8" style={{ flexWrap: 'wrap' }}>
          
          {/* Main Content Column */}
          <div style={{ flex: '2 1 600px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Results */}
            <div className="card">
              <h3 className="flex items-center gap-4" style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--surface-border)', paddingBottom: '1rem' }}>
                <Award size={28} color="var(--secondary)" /> Academic Results
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '1rem', fontWeight: 700, paddingBottom: '1rem', color: 'var(--primary)' }}>
                <span>Subject</span><span>Marks</span><span>Grade</span>
              </div>
              
              {data.results.map((res, i) => (
                <div key={i} style={{ 
                  display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: '1rem', 
                  padding: '1rem 0', borderTop: '1px solid rgba(0,0,0,0.05)' 
                }}>
                  <span style={{ fontWeight: 500 }}>{res.subject}</span>
                  <span style={{ color: 'var(--text-light)' }}>{res.marks}/100</span>
                  <span style={{ color: 'var(--secondary)', fontWeight: 800 }}>{res.grade}</span>
                </div>
              ))}
            </div>

            {/* Recorded Lectures */}
            <div className="card">
              <h3 className="flex items-center gap-4" style={{ marginBottom: '1.5rem', borderBottom: '1px solid var(--surface-border)', paddingBottom: '1rem' }}>
                <PlayCircle size={28} color="var(--primary-light)" /> Missed Lectures & Recordings
              </h3>
              <p style={{ color: 'var(--text-light)', marginBottom: '1.5rem' }}>
                You missed some lectures recently. Catch up quickly before the mid-terms!
              </p>
              
              <div className="flex gap-4" style={{ flexWrap: 'wrap' }}>
                {data.missedLectures.map((vid, idx) => (
                  <div key={idx} style={{ flex: '1 1 250px', background: 'rgba(0,0,0,0.02)', borderRadius: '12px', overflow: 'hidden' }}>
                    <iframe 
                      width="100%" 
                      height="200" 
                      src={vid.url} 
                      title={vid.title} 
                      frameBorder="0" 
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" 
                      allowFullScreen
                    ></iframe>
                    <div style={{ padding: '1rem' }}>
                      <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{vid.title}</h4>
                      <span style={{ fontSize: '0.9rem', color: 'var(--secondary)', fontWeight: 600 }}>Required</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

          </div>

          {/* Sidebar Column */}
          <div style={{ flex: '1 1 350px', display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            
            {/* Attendance */}
            <div className="card" style={{ background: data.attendance.percentage < 75 ? '#fee2e2' : 'var(--surface)' }}>
              <h3 className="flex items-center gap-4" style={{ marginBottom: '1.5rem', color: data.attendance.percentage < 75 ? '#991b1b' : 'var(--primary)' }}>
                {data.attendance.percentage < 75 ? <AlertCircle size={28} /> : <BookOpen size={28} />}
                Attendance
              </h3>
              
              <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '2rem' }}>
                <div style={{ 
                  width: '150px', height: '150px', borderRadius: '50%', 
                  background: `conic-gradient(${data.attendance.percentage < 75 ? '#ef4444' : 'var(--secondary)'} ${data.attendance.percentage}%, transparent 0)`,
                  display: 'flex', alignItems: 'center', justifyContent: 'center',
                  boxShadow: 'inset 0 0 0 15px rgba(255,255,255,0.5)'
                }}>
                  <div style={{ width: '120px', height: '120px', background: 'white', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', flexDirection: 'column' }}>
                    <span style={{ fontSize: '2rem', fontWeight: 800, color: data.attendance.percentage < 75 ? '#ef4444' : 'var(--primary)' }}>
                      {data.attendance.percentage}%
                    </span>
                  </div>
                </div>
              </div>

              <div className="flex justify-between" style={{ fontSize: '1.1rem' }}>
                <span style={{ color: 'var(--text-light)' }}>Total Classes: <strong>{data.attendance.total}</strong></span>
                <span style={{ color: 'var(--text-light)' }}>Attended: <strong>{data.attendance.attended}</strong></span>
              </div>
              
              {data.attendance.percentage < 75 && (
                <div style={{ marginTop: '1.5rem', padding: '1rem', background: '#fef2f2', border: '1px solid #fca5a5', borderRadius: '8px', color: '#991b1b', fontWeight: 500 }}>
                  Warning: Your attendance is below 75%. Please watch the missed lectures.
                </div>
              )}
            </div>

          </div>

        </div>
      </div>
    </div>
  );
}

export default Dashboard;
