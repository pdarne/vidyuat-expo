import React from 'react';

const Gallery = () => {
  return (
    <div className="gallery-page">
      <section className="page-header">
        <div className="container">
          <h1>Gallery</h1>
          <p>Highlights from Previous Expos & Promotional Content</p>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Previous Expo Highlights</h2>
          <div className="gallery-grid">
            <div className="gallery-item">
              <div className="image-placeholder">[Photo 1]</div>
              <p>Exhibition Hall Overview</p>
            </div>
            <div className="gallery-item">
              <div className="image-placeholder">[Photo 2]</div>
              <p>Live Product Demonstrations</p>
            </div>
            <div className="gallery-item">
              <div className="image-placeholder">[Photo 3]</div>
              <p>Networking Sessions</p>
            </div>
            <div className="gallery-item">
              <div className="image-placeholder">[Photo 4]</div>
              <p>EV Vehicle Zone</p>
            </div>
            <div className="gallery-item">
              <div className="image-placeholder">[Photo 5]</div>
              <p>Solar Solutions Showcase</p>
            </div>
            <div className="gallery-item">
              <div className="image-placeholder">[Photo 6]</div>
              <p>Safety Equipment Display</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Promotional Videos</h2>
          <div className="video-section">
            <div className="video-placeholder">
              <p>[Promotional Reel - Coming Soon]</p>
            </div>
            <div className="video-placeholder">
              <p>[Expo Highlights Video]</p>
            </div>
          </div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <h2>Event Moments</h2>
          <div className="moments-grid">
            <div className="moment-card">
              <div className="image-placeholder">[Moment 1]</div>
              <h4>Opening Ceremony</h4>
            </div>
            <div className="moment-card">
              <div className="image-placeholder">[Moment 2]</div>
              <h4>Award Distribution</h4>
            </div>
            <div className="moment-card">
              <div className="image-placeholder">[Moment 3]</div>
              <h4>Technical Workshops</h4>
            </div>
            <div className="moment-card">
              <div className="image-placeholder">[Moment 4]</div>
              <h4>Business Meetings</h4>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;