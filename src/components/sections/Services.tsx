import { useEffect, useRef, useState } from 'react';
import { LayoutDashboard, Zap, ShieldCheck, ArrowRight } from 'lucide-react';
import { SERVICES, SITE } from '../../content/site';

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  LayoutDashboard, Zap, ShieldCheck,
};

const CARD_ACCENTS = [
  { border: 'hover:border-indigo-500/40', icon: 'bg-indigo-600/15 border-indigo-500/20 text-indigo-400', bullet: 'bg-indigo-400' },
  { border: 'hover:border-amber-500/40', icon: 'bg-amber-600/15 border-amber-500/20 text-amber-400', bullet: 'bg-amber-400' },
  { border: 'hover:border-emerald-500/40', icon: 'bg-emerald-600/15 border-emerald-500/20 text-emerald-400', bullet: 'bg-emerald-400' },
];

export default function Services() {
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
      id="services"
      ref={ref}
      className="py-24 lg:py-32 bg-[#0a0e18]"
      aria-labelledby="services-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`section-eyebrow mb-4 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Services
        </div>

        <h2
          id="services-heading"
          className={`font-display text-3xl sm:text-4xl font-bold text-[#e8ecf4] max-w-2xl mb-4 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '100ms' }}
        >
          Available for contract and{' '}
          <span className="gradient-text">freelance engagements.</span>
        </h2>

        <p
          className={`text-[#8fa3c0] max-w-xl mb-12 leading-relaxed transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '150ms' }}
        >
          Finance and analytics work that produces something your team can actually use — not another dashboard that collects dust.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {SERVICES.map((service, i) => {
            const Icon = ICON_MAP[service.icon];
            const accent = CARD_ACCENTS[i] || CARD_ACCENTS[0];
            return (
              <div
                key={service.title}
                className={`glass-card rounded-2xl p-7 flex flex-col border border-[#1e2d45] ${accent.border} transition-all duration-300 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + i * 100}ms` }}
              >
                {/* Icon */}
                <div className={`w-11 h-11 rounded-xl border flex items-center justify-center mb-5 ${accent.icon}`}>
                  {Icon && <Icon size={20} aria-hidden="true" />}
                </div>

                <h3 className="font-display font-bold text-[#e8ecf4] text-lg mb-2">{service.title}</h3>
                <p className="text-sm text-[#8fa3c0] mb-5 italic leading-relaxed">{service.outcome}</p>

                <ul className="space-y-2.5 mb-7 flex-1" aria-label={`${service.title} includes`}>
                  {service.bullets.map((bullet) => (
                    <li key={bullet} className="flex gap-2.5 text-sm text-[#8fa3c0]">
                      <span className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${accent.bullet}`} aria-hidden="true" />
                      {bullet}
                    </li>
                  ))}
                </ul>

                <a
                  href={SITE.email}
                  className="inline-flex items-center gap-1.5 text-sm font-semibold text-indigo-400 hover:text-indigo-300 transition-colors group"
                  aria-label={`Discuss ${service.title}`}
                >
                  {service.cta}
                  <ArrowRight size={14} className="group-hover:translate-x-0.5 transition-transform" aria-hidden="true" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
