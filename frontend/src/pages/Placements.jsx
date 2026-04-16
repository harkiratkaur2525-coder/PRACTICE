import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, LineChart, Line } from 'recharts';

function Placements() {
  const placementData = [
    { year: '2021', offers: 450, highestPackage: 12 },
    { year: '2022', offers: 580, highestPackage: 15 },
    { year: '2023', offers: 720, highestPackage: 22 },
    { year: '2024', offers: 850, highestPackage: 28 },
  ];

  return (
    <div className="animate-fade-in" style={{ padding: '4rem 0' }}>
      <div className="container">
        
        {/* Header Section */}
        <div className="flex items-center gap-8" style={{ flexWrap: 'wrap', marginBottom: '4rem' }}>
          <div style={{ flex: '1 1 500px' }}>
            <h1 style={{ fontSize: '2.5rem', color: 'var(--primary)' }}>Outstanding Placements</h1>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', marginBottom: '2rem' }}>
              At AGC, we bring top companies to campus. Our dedicated placement cell ensures that students are industry-ready.
            </p>
            <div className="flex gap-4">
              <div style={{ background: '#eef2f6', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid var(--primary)' }}>
                <h2 style={{ fontSize: '2rem', margin: 0 }}>850+</h2>
                <span style={{ color: 'var(--text-light)' }}>Offers in 2024</span>
              </div>
              <div style={{ background: '#fff0e5', padding: '1rem', borderRadius: '8px', borderLeft: '4px solid var(--secondary)' }}>
                <h2 style={{ fontSize: '2rem', margin: 0 }}>28 LPA</h2>
                <span style={{ color: 'var(--text-light)' }}>Highest Package</span>
              </div>
            </div>
          </div>
          <div style={{ flex: '1 1 400px' }}>
            <img src="/images/placement.png" alt="Placement Drive" style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-lg)' }} />
          </div>
        </div>

        {/* Charts Section */}
        <div className="flex gap-8" style={{ flexWrap: 'wrap' }}>
          
          <div className="card" style={{ flex: '1 1 400px', height: '400px' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>Number of Offers by Year</h3>
            <ResponsiveContainer width="100%" height="80%">
              <BarChart data={placementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Bar dataKey="offers" fill="var(--primary)" name="Total Offers" />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="card" style={{ flex: '1 1 400px', height: '400px' }}>
            <h3 style={{ textAlign: 'center', marginBottom: '2rem' }}>Highest Package (LPA)</h3>
            <ResponsiveContainer width="100%" height="80%">
              <LineChart data={placementData}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="highestPackage" stroke="var(--secondary)" strokeWidth={3} name="Highest Package (LPA)" />
              </LineChart>
            </ResponsiveContainer>
          </div>

        </div>
      </div>
    </div>
  );
}

export default Placements;
