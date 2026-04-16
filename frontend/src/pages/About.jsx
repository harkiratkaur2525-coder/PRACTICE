import React from 'react';

function About() {
  return (
    <div className="animate-fade-in" style={{ padding: '4rem 0' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
          <h1 style={{ fontSize: '3rem', color: 'var(--primary)' }}>About AGC & Courses</h1>
          <p style={{ fontSize: '1.2rem', color: 'var(--text-light)', maxWidth: '700px', margin: '0 auto' }}>
            Amritsar Group of Colleges is committed to providing a holistic educational format. 
            Our modern labs and interactive classrooms foster innovations.
          </p>
        </div>

        {/* Dynamic Sections */}
        <div className="flex items-center gap-8" style={{ flexWrap: 'wrap', marginBottom: '4rem' }}>
          <div style={{ flex: '1 1 400px' }}>
            <img src="/images/classroom.png" alt="Classroom" style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-md)' }} />
          </div>
          <div style={{ flex: '1 1 500px' }}>
            <h2>Modern Interactive Classrooms</h2>
            <p style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>
              Our classrooms are equipped with the latest teaching aids. We emphasize interactive learning where students are encouraged to participate and discuss.
            </p>
            <ul style={{ listStylePosition: 'inside', color: 'var(--text-light)' }}>
              <li>Smart Boards and Audio-Visual setup</li>
              <li>Air-conditioned environment</li>
              <li>Small batch sizes for personalized attention</li>
            </ul>
          </div>
        </div>

        <div className="flex items-center gap-8" style={{ flexWrap: 'wrap-reverse', marginBottom: '4rem' }}>
          <div style={{ flex: '1 1 500px' }}>
            <h2>High-Tech Laboratories</h2>
            <p style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>
              Practical knowledge is as important as theoretical concepts. AGC boasts state-of-the-art computer and electronics labs to give you hands-on experience.
            </p>
            <ul style={{ listStylePosition: 'inside', color: 'var(--text-light)' }}>
              <li>24/7 High-speed Internet</li>
              <li>Latest Hardware & Software Kits</li>
              <li>Dedicated Research wings</li>
            </ul>
          </div>
          <div style={{ flex: '1 1 400px' }}>
            <img src="/images/lab.png" alt="Laboratory" style={{ width: '100%', borderRadius: '12px', boxShadow: 'var(--shadow-md)' }} />
          </div>
        </div>

        {/* Courses Segment */}
        <h2 style={{ textAlign: 'center', marginTop: '5rem', marginBottom: '2rem' }}>Our Popular Courses</h2>
        <div className="flex gap-8 justify-center" style={{ flexWrap: 'wrap' }}>
          <div className="card" style={{ flex: '1 1 300px' }}>
            <h3>B.Tech Computer Science</h3>
            <p style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>4 Years | Full-time</p>
            <p>Master programming, AI, algorithms and build the future of tech.</p>
          </div>
          <div className="card" style={{ flex: '1 1 300px' }}>
            <h3>B.Tech Electronics</h3>
            <p style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>4 Years | Full-time</p>
            <p>Dive deep into circuit design, VLSI and embedded systems.</p>
          </div>
          <div className="card" style={{ flex: '1 1 300px' }}>
            <h3>Master of Business Admin</h3>
            <p style={{ color: 'var(--text-light)', marginBottom: '1rem' }}>2 Years | Full-time</p>
            <p>Develop leadership skills and explore marketing, finance, HR.</p>
          </div>
        </div>

      </div>
    </div>
  );
}

export default About;
