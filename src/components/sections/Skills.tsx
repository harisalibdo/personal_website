import { useEffect, useRef, useState } from 'react';
import { Database, TrendingUp, Cpu, Activity, Wrench } from 'lucide-react';
import { SKILL_GROUPS, CREDENTIALS } from '../../content/site';

const ICON_MAP: Record<string, React.ComponentType<{ size?: number; className?: string }>> = {
  Database, TrendingUp, Cpu, Activity, Wrench,
};

const CREDENTIAL_COLORS: Record<string, string> = {
  Professional: 'text-indigo-300 border-indigo-500/25 bg-indigo-500/8',
  Academic: 'text-emerald-300 border-emerald-500/25 bg-emerald-500/8',
  Certificate: 'text-amber-300 border-amber-500/25 bg-amber-500/8',
};

export default function Skills() {
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
      id="skills"
      ref={ref}
      className="py-24 lg:py-32 bg-[#0a0e18]"
      aria-labelledby="skills-heading"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Eyebrow */}
        <div className={`section-eyebrow mb-4 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          Skills & Tools
        </div>

        <h2
          id="skills-heading"
          className={`font-display text-3xl sm:text-4xl font-bold text-[#e8ecf4] max-w-2xl mb-4 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '100ms' }}
        >
          The toolkit — grouped by{' '}
          <span className="gradient-text">function, not buzzword.</span>
        </h2>
        <p
          className={`text-[#8fa3c0] max-w-xl mb-12 leading-relaxed transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '150ms' }}
        >
          No skill bars. No fake percentages. Just the tools I actually use, organized around what they do.
        </p>

        {/* Skill Groups */}
        <div className={`grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-5 mb-16 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`} style={{ transitionDelay: '200ms' }}>
          {SKILL_GROUPS.map((group, i) => {
            const Icon = ICON_MAP[group.icon];
            return (
              <div
                key={group.title}
                className={`glass-card rounded-xl p-6 transition-all duration-400 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                style={{ transitionDelay: `${200 + i * 80}ms` }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div className="w-9 h-9 rounded-lg bg-indigo-600/15 border border-indigo-500/20 flex items-center justify-center flex-shrink-0">
                    {Icon && <Icon size={16} className="text-indigo-400" aria-hidden="true" />}
                  </div>
                  <h3 className="font-display font-semibold text-[#e8ecf4]">{group.title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {group.skills.map((skill) => (
                    <span key={skill} className="skill-chip">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            );
          })}
        </div>

        {/* Credentials */}
        <div>
          <h3
            className={`font-display text-xl font-bold text-[#e8ecf4] mb-6 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '600ms' }}
          >
            Credentials
          </h3>
          <div
            className={`flex flex-wrap gap-3 transition-all duration-500 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
            style={{ transitionDelay: '650ms' }}
          >
            {CREDENTIALS.map((cred) => (
              <div
                key={cred.title}
                className={`inline-flex items-center gap-2.5 px-4 py-2.5 rounded-lg border ${CREDENTIAL_COLORS[cred.type] || 'text-[#8fa3c0] border-[#253a5e] bg-[#131926]/60'}`}
              >
                <div>
                  <div className="font-display font-semibold text-sm">{cred.title}</div>
                  <div className="text-xs opacity-70">{cred.issuer}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
