import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import AboutUs from './pages/AboutUs';
import TreeServices from './pages/TreeServices';
import DisasterRecovery from './pages/DisasterRecovery';
import CivilConstruction from './pages/CivilConstruction';
import Demolition from './pages/Demolition';
import CommercialRoofing from './pages/CommercialRoofing';
import ResidentialRoofing from './pages/ResidentialRoofing';
import Opportunities from './pages/Opportunities';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import { ErrorBoundary } from './components/ErrorBoundary';

function App() {
  return (
    <HelmetProvider>
      <Router>
        <ErrorBoundary>
          <div className="min-h-screen">
            <Header />
            <main>
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/tree-services" element={<TreeServices />} />
                <Route path="/disaster-recovery" element={<DisasterRecovery />} />
                <Route path="/civil-construction" element={<CivilConstruction />} />
                <Route path="/demolition" element={<Demolition />} />
                <Route path="/commercial-roofing" element={<CommercialRoofing />} />
                <Route path="/residential-roofing" element={<ResidentialRoofing />} />
                <Route path="/opportunities" element={<Opportunities />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
          <Analytics />
        </ErrorBoundary>
      </Router>
    </HelmetProvider>
  );
}

export default App;