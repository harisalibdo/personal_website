import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download, MessageSquare, BarChart3 } from 'lucide-react';
import { SITE } from '../../content/site';

const NAV_LINKS = [
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Services', href: '/#services' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '/#contact' },
];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const handleNavClick = (href: string) => {
    if (href.startsWith('/#') && isHome) {
      const id = href.slice(2);
      document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-[#0d1117]/95 backdrop-blur-xl border-b border-[#1e2d45] shadow-lg shadow-black/20'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-18">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2.5 group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-lg"
            aria-label="Haris Ali — Home"
          >
            <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center group-hover:bg-indigo-600/30 transition-colors">
              <BarChart3 size={16} className="text-indigo-400" />
            </div>
            <span className="font-display font-700 text-[1.0625rem] text-[#e8ecf4] tracking-tight">
              Haris Ali
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav aria-label="Main navigation" className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  if (isHome && link.href.startsWith('/#')) {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }
                }}
                className="px-3.5 py-2 text-sm font-medium text-[#8fa3c0] hover:text-[#e8ecf4] rounded-md transition-colors hover:bg-white/5"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="hidden lg:flex items-center gap-3">
            <a
              href={SITE.cv}
              download
              className="btn-secondary text-sm py-2 px-4"
              aria-label="Download CV"
            >
              <Download size={14} />
              Download CV
            </a>
            <a
              href={SITE.email}
              className="btn-primary text-sm py-2 px-4"
              aria-label="Contact Haris Ali"
            >
              <MessageSquare size={14} />
              Let's talk
            </a>
          </div>

          {/* Mobile toggle */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="lg:hidden p-2 rounded-lg text-[#8fa3c0] hover:text-[#e8ecf4] hover:bg-white/5 transition-colors"
            aria-expanded={mobileOpen}
            aria-controls="mobile-menu"
            aria-label={mobileOpen ? 'Close menu' : 'Open menu'}
          >
            {mobileOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div
          id="mobile-menu"
          className="lg:hidden bg-[#0d1117]/98 backdrop-blur-xl border-b border-[#1e2d45]"
        >
          <nav aria-label="Mobile navigation" className="max-w-6xl mx-auto px-4 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => {
                  setMobileOpen(false);
                  if (isHome && link.href.startsWith('/#')) {
                    e.preventDefault();
                    handleNavClick(link.href);
                  }
                }}
                className="px-4 py-2.5 text-sm font-medium text-[#8fa3c0] hover:text-[#e8ecf4] rounded-lg hover:bg-white/5 transition-colors"
              >
                {link.label}
              </a>
            ))}
            <div className="flex flex-col gap-2 mt-4 pt-4 border-t border-[#1e2d45]">
              <a href={SITE.cv} download className="btn-secondary text-sm justify-center">
                <Download size={14} />
                Download CV
              </a>
              <a href={SITE.email} className="btn-primary text-sm justify-center">
                <MessageSquare size={14} />
                Let's talk
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
