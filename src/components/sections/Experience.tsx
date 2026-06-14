import { useEffect, useRef, useState } from 'react';
import { MapPin, Calendar } from 'lucide-react';
import { EXPERIENCE } from '../../content/site';

export default function Experience() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.05 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="experience"
      ref={ref}
      className="py-24 lg:py-32"
      aria-labelledby="experience-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className={`section-eyebrow mb-4 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Experience
        </div>

        <h2
          id="experience-heading"
          className={`font-display text-3xl sm:text-4xl font-bold text-[#e8ecf4] max-w-2xl mb-4 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '100ms' }}
        >
          From data pipelines to{' '}
          <span className="gradient-text">finance automation.</span>
        </h2>

        <p
          className={`text-[#8fa3c0] max-w-xl mb-14 leading-relaxed transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '150ms' }}
        >
          A 10-year career that started in audit, evolved through finance operations and global reporting, and landed in commercial analytics with AI automation.
        </p>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line */}
          <div
            className="hidden md:block absolute left-[11.5rem] top-0 bottom-0 w-px bg-gradient-to-b from-indigo-500/40 via-[#1e2d45] to-transparent"
            aria-hidden="true"
          />

          <div className="space-y-10">
            {EXPERIENCE.map((role, i) => (
              <article
                key={`${role.company}-${i}`}
                className={`relative transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}
                style={{ transitionDelay: `${200 + i * 120}ms` }}
              >
                <div className="md:flex gap-0 items-start">
                  {/* Date column */}
                  <div className="hidden md:block w-44 pr-8 pt-1.5 flex-shrink-0 text-right">
                    <span className="text-xs font-medium text-[#4d6280]">{role.period}</span>
                  </div>

                  {/* Dot */}
                  <div className="hidden md:flex absolute left-[10.75rem] mt-2 items-center justify-center" aria-hidden="true">
                    <div className="w-3.5 h-3.5 rounded-full bg-[#0d1117] border-2 border-indigo-500 shadow-[0_0_0_4px_rgba(99,102,241,0.12)]" />
                  </div>

                  {/* Content */}
                  <div className="flex-1 md:pl-10 glass-card rounded-2xl p-6 hover:border-[#253a5e] transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 mb-4">
                      <div>
                        <h3 className="font-display font-bold text-[#e8ecf4] text-lg leading-tight">{role.title}</h3>
                        <div className="text-indigo-400 font-semibold text-sm mt-0.5">{role.company}</div>
                      </div>
                      <div className="flex flex-col gap-1 sm:items-end flex-shrink-0">
                        <span className="inline-flex items-center gap-1 text-xs text-[#4d6280]">
                          <Calendar size={11} aria-hidden="true" />
                          {role.period}
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs text-[#4d6280]">
                          <MapPin size={11} aria-hidden="true" />
                          {role.location}
                        </span>
                      </div>
                    </div>

                    <ul className="space-y-2" aria-label={`Responsibilities at ${role.company}`}>
                      {role.bullets.map((bullet, bi) => (
                        <li key={bi} className="flex gap-2.5 text-sm text-[#8fa3c0] leading-relaxed">
                          <span className="w-1 h-1 rounded-full bg-indigo-500/60 mt-2 flex-shrink-0" aria-hidden="true" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
