import React from 'react';
import './App.css';
import Header from './components/Header';
import MainBanner from './components/MainBanner';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <MainBanner />
      <FeatureSection />
      <Footer />
    </div>
  );
}

export default App;

