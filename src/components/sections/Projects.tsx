import { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { CASE_STUDIES } from '../../content/case-studies';

export default function Projects() {
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
      id="projects"
      ref={ref}
      className="py-24 lg:py-32"
      aria-labelledby="projects-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12">
          <div>
            <div className={`section-eyebrow mb-4 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
              Case Studies
            </div>
            <h2
              id="projects-heading"
              className={`font-display text-3xl sm:text-4xl font-bold text-[#e8ecf4] max-w-xl transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
              style={{ transitionDelay: '100ms' }}
            >
              Real problems.{' '}
              <span className="gradient-text">Measurable outcomes.</span>
            </h2>
          </div>
          <p
            className={`text-[#8fa3c0] text-sm max-w-xs transition-all duration-500 ${visible ? 'opacity-100' : 'opacity-0'}`}
            style={{ transitionDelay: '200ms' }}
          >
            Three case studies that show the intersection of finance logic, data engineering, and analytics rigor.
          </p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {CASE_STUDIES.map((study, i) => (
            <Link
              key={study.slug}
              to={`/case-studies/${study.slug}`}
              className={`group glass-card glass-card-hover rounded-2xl overflow-hidden flex flex-col transition-all duration-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
              style={{ transitionDelay: `${200 + i * 100}ms` }}
              aria-label={`Read case study: ${study.title}`}
            >
              {/* Cover gradient */}
              <div className={`h-36 bg-gradient-to-br ${study.gradient} flex items-end p-5`} aria-hidden="true">
                <div className="flex flex-wrap gap-1.5">
                  {study.metrics.map((m) => (
                    <span
                      key={m.label}
                      className="inline-flex items-center gap-1 px-2 py-1 rounded-lg bg-black/30 backdrop-blur-sm border border-white/10 text-xs font-bold text-white"
                    >
                      <span className="accent-gradient-text">{m.value}</span>
                      <span className="text-white/70 font-normal">{m.label}</span>
                    </span>
                  ))}
                </div>
              </div>

              {/* Content */}
              <div className="flex flex-col flex-1 p-6">
                <div className="text-xs text-[#4d6280] font-medium mb-2">
                  {study.client} · {study.year} · {study.industry}
                </div>

                <h3 className="font-display font-bold text-[#e8ecf4] text-lg leading-snug mb-3 group-hover:text-white transition-colors">
                  {study.shortTitle}
                </h3>

                <p className="text-sm text-[#8fa3c0] leading-relaxed mb-5 flex-1">
                  {study.outcome}
                </p>

                {/* Tags */}
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {study.tags.map((tag) => (
                    <span key={tag} className="skill-chip text-xs">
                      {tag}
                    </span>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex items-center gap-1.5 text-indigo-400 text-sm font-semibold group-hover:text-indigo-300 transition-colors">
                  Read case study
                  <ArrowRight
                    size={14}
                    className="group-hover:translate-x-0.5 transition-transform"
                    aria-hidden="true"
                  />
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
