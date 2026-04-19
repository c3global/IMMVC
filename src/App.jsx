import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';
import Home from './pages/Home';
import About from './pages/About';
import IMMVC from './pages/IMMVC';
import Community from './pages/Community';
import ResourceHub from './pages/ResourceHub';
import Connect from './pages/Connect';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-ink">
      <ScrollToTop />
      <Navbar />
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/immvc" element={<IMMVC />} />
          <Route path="/community" element={<Community />} />
          <Route path="/resources" element={<ResourceHub />} />
          <Route path="/connect" element={<Connect />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}
