import { Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

import Home from './pages/Home';
import About from './pages/About';
import IMMVC from './pages/IMMVC';
import ResourceHub from './pages/ResourceHub';
import Connect from './pages/Connect';
import CommunityLounges from './pages/CommunityLounges';

import MotherhoodOtherhood from './pages/MotherhoodOtherhood';
import MentorshipLeadership from './pages/MentorshipLeadership';
import HealingWellness from './pages/HealingWellness';
import GriefGrace from './pages/GriefGrace';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />

          {/* Topic pages — primary nav */}
          <Route path="/motherhood-otherhood" element={<MotherhoodOtherhood />} />
          <Route path="/mentorship-leadership" element={<MentorshipLeadership />} />
          <Route path="/healing-wellness" element={<HealingWellness />} />
          <Route path="/grief-grace" element={<GriefGrace />} />
          <Route path="/immvc" element={<IMMVC />} />

          {/* Secondary pages — footer nav */}
          <Route path="/about" element={<About />} />
          <Route path="/community-lounges" element={<CommunityLounges />} />
          <Route path="/community" element={<Navigate to="/community-lounges" replace />} />
          <Route path="/resources" element={<ResourceHub />} />
          <Route path="/connect" element={<Connect />} />

          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
