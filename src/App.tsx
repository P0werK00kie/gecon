import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
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
import Articles from './pages/Articles';
import ArticleDetail from './pages/ArticleDetail';
import Privacy from './pages/Privacy';
import Terms from './pages/Terms';
import NotFound from './pages/NotFound';
import { ErrorBoundary } from './components/ErrorBoundary';

// State pages
import Georgia from './pages/states/Georgia';
import Florida from './pages/states/Florida';
import Alabama from './pages/states/Alabama';
import SouthCarolina from './pages/states/SouthCarolina';
import NorthCarolina from './pages/states/NorthCarolina';
import Tennessee from './pages/states/Tennessee';
import Mississippi from './pages/states/Mississippi';
import Louisiana from './pages/states/Louisiana';

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
                <Route path="/articles" element={<Articles />} />
                <Route path="/articles/:slug" element={<ArticleDetail />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/terms" element={<Terms />} />
                
                {/* State pages */}
                <Route path="/states/georgia" element={<Georgia />} />
                <Route path="/states/florida" element={<Florida />} />
                <Route path="/states/alabama" element={<Alabama />} />
                <Route path="/states/south-carolina" element={<SouthCarolina />} />
                <Route path="/states/north-carolina" element={<NorthCarolina />} />
                <Route path="/states/tennessee" element={<Tennessee />} />
                <Route path="/states/mississippi" element={<Mississippi />} />
                <Route path="/states/louisiana" element={<Louisiana />} />
                
                <Route path="*" element={<NotFound />} />
              </Routes>
            </main>
            <Footer />
          </div>
          <Analytics />
          <SpeedInsights />
        </ErrorBoundary>
      </Router>
    </HelmetProvider>
  );
}

export default App;