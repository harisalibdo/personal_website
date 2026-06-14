import { useEffect, useRef, useState } from 'react';
import { PROOF } from '../../content/site';

export default function ProofStrip() {
  const ref = useRef<HTMLElement>(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setVisible(true); observer.disconnect(); } },
      { threshold: 0.2 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={ref}
      className="py-12 border-y border-[#1e2d45] bg-[#131926]/50"
      aria-label="Key metrics"
    >
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {PROOF.map((item, i) => (
            <div
              key={item.label}
              className={`proof-card transition-all duration-500 ${
                visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="accent-gradient-text font-display text-3xl sm:text-4xl font-bold mb-1.5">
                {item.value}
              </div>
              <div className="text-[#e8ecf4] text-sm font-semibold font-display mb-1">
                {item.label}
              </div>
              <div className="text-[#4d6280] text-xs leading-relaxed">
                {item.sublabel}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
