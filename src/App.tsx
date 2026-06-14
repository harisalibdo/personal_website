import { Routes, Route, useLocation } from 'react-router-dom';
import { useEffect } from 'react';
import Header from './components/site/Header';
import Footer from './components/site/Footer';
import HomePage from './pages/HomePage';
import CaseStudyPage from './pages/CaseStudyPage';

function ScrollToTop() {
  const { pathname } = useLocation();
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'instant' });
  }, [pathname]);
  return null;
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0d1117] text-[#e8ecf4]">
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 btn-primary text-sm"
      >
        Skip to main content
      </a>
      <ScrollToTop />
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/case-studies/:slug" element={<CaseStudyPage />} />
        <Route path="*" element={<HomePage />} />
      </Routes>
      <Footer />
    </div>
  );
}
