import React from 'react';
import { Link } from 'react-router-dom';
import { BookOpen, Users, Award } from 'lucide-react';

function Home() {
  return (
    <div className="animate-fade-in">
      {/* Hero Section */}
      <section style={{ 
        height: '600px', 
        backgroundImage: 'linear-gradient(rgba(15, 76, 129, 0.8), rgba(15, 76, 129, 0)), url(/images/hero.png)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        display: 'flex',
        alignItems: 'center',
        color: 'var(--white)'
      }}>
        <div className="container">
          <h1 style={{ fontSize: '3.5rem', marginBottom: '1rem', color: 'var(--white)' }}>
            Welcome to <span style={{ color: 'var(--secondary)' }}>AGC Smart Campus</span>
          </h1>
          <p style={{ fontSize: '1.2rem', maxWidth: '600px', marginBottom: '2rem', color: '#f0f0f0' }}>
            Empowering the next generation of engineers and leaders. Experience world-class 
            education, modern infrastructure, and record-breaking placements.
          </p>
          <div className="flex gap-4">
            <Link to="/about" className="btn btn-primary" style={{ padding: '1rem 2rem', fontSize: '1.1rem' }}>
              Explore Courses
            </Link>
            <Link to="/login" className="btn btn-outline" style={{ padding: '1rem 2rem', fontSize: '1.1rem', borderColor: 'var(--white)', color: 'var(--white)' }}>
              Student Login
            </Link>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section style={{ padding: '5rem 0', background: 'var(--white)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2>Why Choose AGC?</h2>
            <p style={{ color: 'var(--text-light)' }}>Discover what makes us the best choice for your future.</p>
          </div>
          
          <div className="flex justify-between gap-8" style={{ flexWrap: 'wrap' }}>
            <div className="card" style={{ flex: '1 1 300px', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', background: '#eef2f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--primary)' }}>
                <BookOpen size={40} />
              </div>
              <h3 style={{ fontSize: '1.5rem' }}>Excellence in Education</h3>
              <p style={{ color: 'var(--text-light)' }}>Rigorous academic programs designed to meet industry standards.</p>
            </div>

            <div className="card" style={{ flex: '1 1 300px', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', background: '#fff0e5', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--secondary)' }}>
                <Award size={40} />
              </div>
              <h3 style={{ fontSize: '1.5rem' }}>100% Placement Assistant</h3>
              <p style={{ color: 'var(--text-light)' }}>Top MNCs visiting campus every year for recruitment.</p>
            </div>

            <div className="card" style={{ flex: '1 1 300px', textAlign: 'center' }}>
              <div style={{ width: '80px', height: '80px', background: '#eef2f6', borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 1.5rem', color: 'var(--primary)' }}>
                <Users size={40} />
              </div>
              <h3 style={{ fontSize: '1.5rem' }}>Vibrant Campus Life</h3>
              <p style={{ color: 'var(--text-light)' }}>Clubs, events, and a vibrant community of diverse students.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Home;
