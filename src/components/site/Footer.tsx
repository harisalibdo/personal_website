import { Link } from 'react-router-dom';
import { Linkedin, Mail, ExternalLink, BarChart3 } from 'lucide-react';
import { SITE } from '../../content/site';

const NAV = [
  { label: 'About', href: '/#about' },
  { label: 'Skills', href: '/#skills' },
  { label: 'Projects', href: '/#projects' },
  { label: 'Services', href: '/#services' },
  { label: 'Experience', href: '/#experience' },
  { label: 'Contact', href: '/#contact' },
];

export default function Footer() {
  return (
    <footer className="border-t border-[#1e2d45] bg-[#0a0e18]">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand */}
          <div>
            <Link to="/" className="flex items-center gap-2.5 mb-4 w-fit">
              <div className="w-8 h-8 rounded-lg bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center">
                <BarChart3 size={16} className="text-indigo-400" />
              </div>
              <span className="font-display font-bold text-[1.0625rem] text-[#e8ecf4]">Haris Ali</span>
            </Link>
            <p className="text-sm text-[#8fa3c0] leading-relaxed max-w-xs">
              Data & Business Analyst in Berlin. Finance depth. BI precision. AI-powered automation.
            </p>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#4d6280] mb-4">Navigation</h3>
            <ul className="flex flex-col gap-2.5">
              {NAV.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="text-sm text-[#8fa3c0] hover:text-[#e8ecf4] transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-semibold uppercase tracking-widest text-[#4d6280] mb-4">Connect</h3>
            <div className="flex flex-col gap-3">
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-[#8fa3c0] hover:text-[#e8ecf4] transition-colors group"
                aria-label="LinkedIn profile"
              >
                <Linkedin size={16} className="text-[#4d6280] group-hover:text-indigo-400 transition-colors" />
                LinkedIn
                <ExternalLink size={12} className="opacity-50" />
              </a>
              <a
                href={SITE.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2.5 text-sm text-[#8fa3c0] hover:text-[#e8ecf4] transition-colors group"
                aria-label="Upwork profile"
              >
                <ExternalLink size={16} className="text-[#4d6280] group-hover:text-indigo-400 transition-colors" />
                Upwork
                <ExternalLink size={12} className="opacity-50" />
              </a>
              <a
                href={SITE.email}
                className="flex items-center gap-2.5 text-sm text-[#8fa3c0] hover:text-[#e8ecf4] transition-colors group"
                aria-label="Email Haris Ali"
              >
                <Mail size={16} className="text-[#4d6280] group-hover:text-indigo-400 transition-colors" />
                Email
              </a>
            </div>
            <p className="mt-5 text-xs text-[#4d6280]">
              Based in Berlin · Open to remote, hybrid, and EU on-site
            </p>
          </div>
        </div>

        <div className="border-t border-[#1e2d45] pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-xs text-[#4d6280]">
            © {new Date().getFullYear()} Haris Ali. All rights reserved.
          </p>
          <p className="text-xs text-[#4d6280]">
            Built with React + Vite · Deployed on Cloudflare Pages
          </p>
        </div>
      </div>
    </footer>
  );
}
