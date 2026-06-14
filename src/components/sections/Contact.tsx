import { useEffect, useRef, useState } from 'react';
import { Mail, Linkedin, ExternalLink, Download, MapPin, Globe } from 'lucide-react';
import { SITE } from '../../content/site';

const CONTACT_CARDS = [
  {
    icon: Mail,
    label: 'Email',
    value: 'Direct and preferred',
    href: 'mailto:harisali@example.com',
    accent: 'border-amber-500/25 hover:border-amber-500/50 hover:bg-amber-500/5',
    iconBg: 'bg-amber-600/15 border-amber-500/20 text-amber-400',
    cta: 'Send email',
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect & message',
    href: SITE.linkedin,
    accent: 'border-indigo-500/25 hover:border-indigo-500/50 hover:bg-indigo-500/5',
    iconBg: 'bg-indigo-600/15 border-indigo-500/20 text-indigo-400',
    cta: 'Open LinkedIn',
  },
  {
    icon: ExternalLink,
    label: 'Upwork',
    value: 'Freelance engagements',
    href: SITE.upwork,
    accent: 'border-emerald-500/25 hover:border-emerald-500/50 hover:bg-emerald-500/5',
    iconBg: 'bg-emerald-600/15 border-emerald-500/20 text-emerald-400',
    cta: 'View profile',
  },
];

export default function Contact() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.1 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="contact"
      ref={ref}
      className="py-24 lg:py-32 bg-[#0a0e18]"
      aria-labelledby="contact-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Hero text */}
        <div className="max-w-3xl mx-auto text-center mb-14">
          <div className={`section-eyebrow mb-4 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
            Get in Touch
          </div>
          <h2
            id="contact-heading"
            className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e8ecf4] mb-5 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '100ms' }}
          >
            Hiring for{' '}
            <span className="gradient-text">data analytics, BI, or commercial finance?</span>
          </h2>
          <p
            className={`text-[#8fa3c0] text-base sm:text-lg leading-relaxed mb-8 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '150ms' }}
          >
            I'm actively looking for my next role across Germany, Luxembourg, and the Netherlands. I'm also available for freelance and contract engagements in BI, reporting automation, and ERP reconciliation. Direct outreach works best — no recruiters needed.
          </p>

          {/* Location badges */}
          <div
            className={`flex flex-wrap justify-center gap-3 mb-10 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#253a5e] bg-[#131926]/60 text-xs text-[#8fa3c0]">
              <MapPin size={11} className="text-indigo-400" aria-hidden="true" />
              Berlin, Germany
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#253a5e] bg-[#131926]/60 text-xs text-[#8fa3c0]">
              <Globe size={11} className="text-emerald-400" aria-hidden="true" />
              Open to EU remote & hybrid
            </span>
            <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-[#253a5e] bg-[#131926]/60 text-xs text-[#8fa3c0]">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse-slow" aria-hidden="true" />
              Immediately available
            </span>
          </div>
        </div>

        {/* Contact cards */}
        <div
          className={`grid grid-cols-1 sm:grid-cols-3 gap-5 max-w-3xl mx-auto mb-12 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '300ms' }}
        >
          {CONTACT_CARDS.map((card, i) => {
            const Icon = card.icon;
            const isExternal = card.href.startsWith('http');
            return (
              <a
                key={card.label}
                href={card.href}
                target={isExternal ? '_blank' : undefined}
                rel={isExternal ? 'noopener noreferrer' : undefined}
                className={`glass-card rounded-2xl p-7 flex flex-col items-center text-center border transition-all duration-200 ${card.accent} ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
                style={{ transitionDelay: `${300 + i * 80}ms` }}
                aria-label={`${card.cta} — ${card.label}`}
              >
                <div className={`w-12 h-12 rounded-xl border flex items-center justify-center mb-4 ${card.iconBg}`}>
                  <Icon size={22} aria-hidden="true" />
                </div>
                <div className="font-display font-bold text-[#e8ecf4] mb-1">{card.label}</div>
                <div className="text-xs text-[#4d6280] mb-4">{card.value}</div>
                <span className="text-sm font-semibold text-indigo-400 group-hover:text-indigo-300">
                  {card.cta} →
                </span>
              </a>
            );
          })}
        </div>

        {/* CV download */}
        <div
          className={`flex justify-center transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '550ms' }}
        >
          <a
            href={SITE.cv}
            download
            className="btn-secondary inline-flex items-center gap-2"
          >
            <Download size={16} aria-hidden="true" />
            Download CV (PDF)
          </a>
        </div>

        <p
          className={`text-center text-xs text-[#4d6280] mt-6 transition-all duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}
          style={{ transitionDelay: '600ms' }}
        >
          English · Urdu · German (learning) · Open to sponsorship discussions
        </p>
      </div>
    </section>
  );
}
