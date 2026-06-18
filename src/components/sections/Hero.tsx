import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Download, Linkedin, Mail, ExternalLink, MapPin, Briefcase, GraduationCap, User } from 'lucide-react';
import { SITE } from '../../content/site';
import headshot from '../../assets/photo.png';

const CATEGORIES = [
  { label: 'Data & Business Analytics', color: 'text-indigo-300 border-indigo-500/25 bg-indigo-500/8' },
  { label: 'Finance & Accounting', color: 'text-emerald-300 border-emerald-500/25 bg-emerald-500/8' },
  { label: 'AI Agents & Workflow Automation', color: 'text-amber-300 border-amber-500/25 bg-amber-500/8' },
];

const CREDENTIALS = [
  { icon: GraduationCap, label: 'MSc Data Analytics' },
  { icon: Briefcase, label: 'ACCA Member' },
  { icon: Briefcase, label: '7+ Years Experience' },
];

export default function Hero() {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 50);
    return () => clearTimeout(t);
  }, []);

  return (
    <section
      className="relative min-h-screen flex items-center pt-24 pb-16 lg:pb-24 overflow-hidden"
      aria-label="Introduction"
    >
      {/* Background glow */}
      <div className="absolute inset-0 bg-hero-glow pointer-events-none" aria-hidden="true" />
      <div
        className="absolute top-1/4 -left-40 w-96 h-96 bg-indigo-600/8 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />
      <div
        className="absolute bottom-1/4 -right-40 w-80 h-80 bg-blue-600/6 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Content */}
          <div>
            {/* Availability chip */}
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-[#1e2d45] bg-[#131926]/80 mb-6 transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '50ms' }}
            >
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse-slow" aria-hidden="true" />
              <MapPin size={12} className="text-[#8fa3c0]" aria-hidden="true" />
              <span className="text-xs font-medium text-[#8fa3c0]">{SITE.availability}</span>
            </div>

            {/* Headline */}
            <h1
              className={`font-display text-4xl sm:text-5xl lg:text-[3.25rem] xl:text-6xl font-bold leading-[1.1] tracking-tight mb-6 transition-all duration-600 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '150ms' }}
            >
              <span className="gradient-text">Data</span>
              <span className="text-[#e8ecf4]">, business & finance analytics</span>
              <span className="text-[#8fa3c0] block mt-1">— automated with AI.</span>
            </h1>

            {/* Subheadline */}
            <p
              className={`text-base sm:text-lg text-[#8fa3c0] leading-relaxed max-w-xl mb-8 transition-all duration-600 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: '250ms' }}
            >
              {SITE.subhead}
            </p>

            {/* Category pills */}
            <div
              className={`flex flex-wrap gap-2 mb-8 transition-all duration-600 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '350ms' }}
            >
              {CATEGORIES.map((cat) => (
                <span
                  key={cat.label}
                  className={`category-pill text-xs ${cat.color}`}
                >
                  {cat.label}
                </span>
              ))}
            </div>

            {/* Credential badges */}
            <div
              className={`flex flex-wrap gap-2 mb-10 transition-all duration-600 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '400ms' }}
            >
              {CREDENTIALS.map(({ icon: Icon, label }) => (
                <span
                  key={label}
                  className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#131926] border border-[#253a5e] text-xs font-medium text-[#8fa3c0]"
                >
                  <Icon size={12} className="text-indigo-400" aria-hidden="true" />
                  {label}
                </span>
              ))}
            </div>

            {/* CTAs */}
            <div
              className={`flex flex-wrap gap-3 mb-8 transition-all duration-600 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '500ms' }}
            >
              <Link
                to="/#projects"
                onClick={(e) => {
                  e.preventDefault();
                  document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
                }}
                className="btn-primary"
              >
                View case studies
                <ArrowRight size={16} aria-hidden="true" />
              </Link>
              <a href={SITE.cv} download className="btn-secondary">
                <Download size={16} aria-hidden="true" />
                Download CV
              </a>
            </div>

            {/* Social links */}
            <div
              className={`flex items-center gap-3 transition-all duration-600 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
              }`}
              style={{ transitionDelay: '600ms' }}
            >
              <a
                href={SITE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-[#1e2d45] text-[#8fa3c0] hover:text-indigo-400 hover:border-indigo-500/40 hover:bg-indigo-500/8 transition-all"
                aria-label="Haris Ali on LinkedIn"
              >
                <Linkedin size={18} aria-hidden="true" />
              </a>
              <a
                href={SITE.upwork}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2.5 rounded-lg border border-[#1e2d45] text-[#8fa3c0] hover:text-emerald-400 hover:border-emerald-500/40 hover:bg-emerald-500/8 transition-all"
                aria-label="Haris Ali on Upwork"
              >
                <ExternalLink size={18} aria-hidden="true" />
              </a>
              <a
                href={SITE.email}
                className="p-2.5 rounded-lg border border-[#1e2d45] text-[#8fa3c0] hover:text-amber-400 hover:border-amber-500/40 hover:bg-amber-500/8 transition-all"
                aria-label="Email Haris Ali"
              >
                <Mail size={18} aria-hidden="true" />
              </a>
            </div>
          </div>

          {/* Right — Headshot */}
          <div
            className={`flex justify-center lg:justify-end transition-all duration-700 ${
              visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="relative">
              {/* Glow behind image */}
              <div
                className="absolute inset-0 -m-6 bg-indigo-600/10 rounded-full blur-2xl"
                aria-hidden="true"
              />

              {/* Headshot frame */}
              <div className="relative w-64 h-64 sm:w-72 sm:h-72 lg:w-80 lg:h-80 xl:w-96 xl:h-96 rounded-2xl overflow-hidden border-2 border-[#253a5e] shadow-2xl shadow-black/40 bg-[#131926]">
                <img
                  src={headshot}
                  alt="Portrait of Haris Ali, Data & Business Analyst based in Berlin"
                  className="w-full h-full object-cover object-top"
                  width={384}
                  height={384}
                  onError={(e) => {
                    const target = e.currentTarget;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      const fallback = parent.querySelector('.photo-fallback') as HTMLElement;
                      if (fallback) fallback.style.display = 'flex';
                    }
                  }}
                />
                <div
                  className="photo-fallback absolute inset-0 flex-col items-center justify-center gap-3"
                  style={{ display: 'none' }}
                  aria-hidden="true"
                >
                  <User size={64} className="text-[#253a5e]" />
                  <span className="text-xs text-[#253a5e]">Haris Ali</span>
                </div>
                {/* Subtle gradient overlay */}
                <div
                  className="absolute inset-0 bg-gradient-to-t from-[#0d1117]/40 via-transparent to-transparent"
                  aria-hidden="true"
                />
              </div>

              {/* Floating KPI card */}
              <div
                className="absolute -bottom-6 -left-6 glass-card rounded-xl p-4 min-w-44"
                aria-label="Quick statistics"
              >
                <div className="flex flex-col gap-2">
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-indigo-400" aria-hidden="true" />
                    <span className="text-xs font-medium text-[#8fa3c0]">3 case studies</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" aria-hidden="true" />
                    <span className="text-xs font-medium text-[#8fa3c0]">15+ hrs/cycle automated</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-amber-400" aria-hidden="true" />
                    <span className="text-xs font-medium text-[#8fa3c0]">9+ EU partners analyzed</span>
                  </div>
                </div>
              </div>

              {/* Top-right badge */}
              <div className="absolute -top-4 -right-4 glass-card rounded-xl px-3.5 py-2.5">
                <span className="text-xs font-semibold text-emerald-400">Open to work</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
