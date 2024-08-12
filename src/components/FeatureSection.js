import React, { useState } from 'react';
import './FeatureSection.css';

const FeatureSection = () => {
  const [currentFeature, setCurrentFeature] = useState('Fast');

  return (
    <section className="feature-section">
      <div className="feature-tabs">
        <button onClick={() => setCurrentFeature('All')}>All</button>
        <button onClick={() => setCurrentFeature('Yours')}>Yours</button>
        <button onClick={() => setCurrentFeature('Safe')}>Safe</button>
        <button onClick={() => setCurrentFeature('Fast')}>Fast</button>
        <button onClick={() => setCurrentFeature('By Google')}>By Google</button>
      </div>
      <div className="feature-content">
        {currentFeature === 'Fast' && (
          <div className="feature-fast">
            <h2>The fast way to do things online</h2>
            <p>Speed is everything. Google Chrome is designed to be fast in every possible way.</p>
          </div>
        )}
        {/* Add other features' content here */}
      </div>
    </section>
  );
}

export default FeatureSection;
