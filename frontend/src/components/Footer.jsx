import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, Mail } from 'lucide-react';

function Footer() {
  return (
    <footer style={{ background: 'var(--primary)', color: 'var(--white)', padding: '3rem 0 1rem 0', marginTop: 'auto' }}>
      <div className="container flex justify-between" style={{ flexWrap: 'wrap', gap: '2rem', marginBottom: '2rem' }}>
        <div style={{ flex: '1 1 300px' }}>
          <h3 style={{ color: 'var(--white)' }}>Amritsar Group of Colleges</h3>
          <p style={{ color: '#ccc', marginTop: '1rem' }}>
            Empowering students with quality education, modern infrastructure, and excellent placement opportunities.
          </p>
        </div>
        
        <div style={{ flex: '1 1 200px' }}>
          <h3 style={{ color: 'var(--white)' }}>Quick Links</h3>
          <ul style={{ listStyle: 'none', padding: 0, marginTop: '1rem' }}>
            <li style={{ marginBottom: '0.5rem' }}><Link to="/about" style={{ color: '#ccc' }}>About AGC</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link to="/placements" style={{ color: '#ccc' }}>Placements</Link></li>
            <li style={{ marginBottom: '0.5rem' }}><Link to="/login" style={{ color: '#ccc' }}>Student Login</Link></li>
          </ul>
        </div>

        <div style={{ flex: '1 1 300px' }}>
          <h3 style={{ color: 'var(--white)' }}>Contact Us</h3>
          <div style={{ marginTop: '1rem', color: '#ccc' }}>
            <p className="flex items-center gap-4" style={{ marginBottom: '0.5rem' }}>
              <MapPin size={18} /> 12 KM Stone, NH-3, Grand Trunk Rd, Amritsar, Punjab
            </p>
            <p className="flex items-center gap-4" style={{ marginBottom: '0.5rem' }}>
              <Phone size={18} /> +91-0183-5069527
            </p>
            <p className="flex items-center gap-4" style={{ marginBottom: '0.5rem' }}>
              <Mail size={18} /> contact@agc.edu.in
            </p>
          </div>
        </div>
      </div>
      
      <div style={{ textAlign: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '1rem', color: '#999' }}>
        <p>&copy; {new Date().getFullYear()} Amritsar Group of Colleges. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;
