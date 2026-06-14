import { useEffect, useRef, useState } from 'react';
import { BarChart3, Calculator, Bot, FlaskConical, GitMerge } from 'lucide-react';
import { CAPABILITIES } from '../../content/site';

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  BarChart3, Calculator, Bot, FlaskConical, GitMerge,
};

const CAREER_STAGES = [
  { stage: 'Audit Foundation', employer: 'A.F. Ferguson (PwC) · PKF Frants', what: 'Learned controls, evidence, and accounting discipline.' },
  { stage: 'Finance Operations', employer: 'Moon Knits', what: 'Operational finance, working capital, and month-end close.' },
  { stage: 'Risk & Advisory', employer: 'BDO Pakistan', what: 'Internal controls, IFRS reporting risk, and analytics on audit engagements.' },
  { stage: 'Global Reporting', employer: 'Equinix', what: 'Multi-region financial reporting, SQL automation, Power BI.' },
  { stage: 'Commercial Analytics & Automation', employer: 'SquareTrade Europe', what: 'FP&A pipelines, partner P&L, ERP reconciliation, AI workflows.' },
];

export default function About() {
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
      id="about"
      ref={ref}
      className="py-24 lg:py-32"
      aria-labelledby="about-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div
          className={`section-eyebrow mb-4 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
        >
          About
        </div>

        {/* Section heading */}
        <h2
          id="about-heading"
          className={`font-display text-3xl sm:text-4xl lg:text-5xl font-bold text-[#e8ecf4] max-w-3xl leading-tight mb-12 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '100ms' }}
        >
          Accounting, finance, data & business analytics —{' '}
          <span className="gradient-text">wired together with AI automation.</span>
        </h2>

        {/* Two column */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-20">
          {/* Narrative */}
          <div
            className={`transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="space-y-5 text-[#8fa3c0] leading-relaxed text-[0.9375rem]">
              <p>
                I started in public accounting — audit, controls, evidence. That foundation taught me something most analytics people skip: that numbers only matter if they're trustworthy. It shaped how I approach every data problem I've worked on since.
              </p>
              <p>
                From there, I moved through operational finance, risk advisory, and global reporting before landing in commercial analytics at SquareTrade Europe. That's where the profile people find interesting emerged: I was writing Python pipelines in the morning, reviewing partner P&L with Finance in the afternoon, and investigating a 3,621-record data integrity issue before the reporting cycle closed.
              </p>
              <p>
                Now I build analytics and automation systems where the finance logic, data pipeline, and business outcome are all connected. I'm based in Berlin, actively pursuing FP&A, BI, and commercial analytics roles across Germany and the EU, and open to projects where data quality and business clarity both matter.
              </p>
            </div>
          </div>

          {/* Capabilities */}
          <div
            className={`transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
            style={{ transitionDelay: '300ms' }}
          >
            <div className="space-y-3">
              {CAPABILITIES.map((cap) => {
                const Icon = ICON_MAP[cap.icon];
                return (
                  <div
                    key={cap.title}
                    className="flex gap-4 p-4 rounded-xl border border-[#1e2d45] bg-[#131926]/60 hover:border-[#253a5e] transition-colors"
                  >
                    <div className="w-9 h-9 rounded-lg bg-indigo-600/15 border border-indigo-500/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      {Icon && <Icon size={16} className="text-indigo-400" aria-hidden="true" />}
                    </div>
                    <div>
                      <h3 className="font-display font-semibold text-sm text-[#e8ecf4] mb-0.5">{cap.title}</h3>
                      <p className="text-xs text-[#8fa3c0] leading-relaxed">{cap.description}</p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Career Journey */}
        <div
          className={`transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '400ms' }}
        >
          <h3 className="font-display text-xl font-bold text-[#e8ecf4] mb-8">Career Journey</h3>
          <div className="relative">
            {/* Timeline line */}
            <div
              className="absolute left-4 top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-indigo-500/20 to-transparent"
              aria-hidden="true"
            />

            <div className="space-y-0">
              {CAREER_STAGES.map((stage, i) => (
                <div key={stage.stage} className="flex gap-8 pb-8 last:pb-0">
                  <div className="relative flex-shrink-0 pt-1">
                    <div className="timeline-dot" aria-hidden="true" />
                  </div>
                  <div
                    className={`flex-1 pb-0 transition-all duration-400 ${visible ? 'opacity-100' : 'opacity-0'}`}
                    style={{ transitionDelay: `${400 + i * 80}ms` }}
                  >
                    <div className="text-xs font-semibold text-indigo-400 uppercase tracking-widest mb-0.5">{stage.stage}</div>
                    <div className="font-display font-semibold text-sm text-[#e8ecf4] mb-1">{stage.employer}</div>
                    <div className="text-xs text-[#8fa3c0]">{stage.what}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
