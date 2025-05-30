import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import TreeServices from './pages/TreeServices';
import DisasterRecovery from './pages/DisasterRecovery';
import CivilConstruction from './pages/CivilConstruction';

function App() {
  return (
    <Router>
      <div className="min-h-screen">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about-us" element={<AboutUs />} />
            <Route path="/tree-services" element={<TreeServices />} />
            <Route path="/disaster-recovery" element={<DisasterRecovery />} />
            <Route path="/civil-construction" element={<CivilConstruction />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;