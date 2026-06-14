import { useParams, Link, Navigate } from 'react-router-dom';
import { ArrowLeft, ArrowRight, Calendar, Briefcase, Tag, CheckCircle2 } from 'lucide-react';
import { CASE_STUDIES } from '../content/case-studies';

export default function CaseStudyPage() {
  const { slug } = useParams<{ slug: string }>();
  const index = CASE_STUDIES.findIndex((s) => s.slug === slug);
  const study = CASE_STUDIES[index];

  if (!study) {
    return <Navigate to="/" replace />;
  }

  const prev = index > 0 ? CASE_STUDIES[index - 1] : null;
  const next = index < CASE_STUDIES.length - 1 ? CASE_STUDIES[index + 1] : null;

  return (
    <main id="main-content" className="pt-24 pb-24">
      {/* JSON-LD for CreativeWork */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'CreativeWork',
            name: study.title,
            description: study.outcome,
            creator: {
              '@type': 'Person',
              name: 'Haris Ali',
            },
            dateCreated: study.year,
            keywords: study.tags.join(', '),
          }),
        }}
      />

      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          to="/#projects"
          onClick={(e) => {
            e.preventDefault();
            window.location.href = '/#projects';
          }}
          className="inline-flex items-center gap-2 text-sm text-[#8fa3c0] hover:text-[#e8ecf4] transition-colors mb-10 group"
          aria-label="Back to all case studies"
        >
          <ArrowLeft size={14} className="group-hover:-translate-x-0.5 transition-transform" aria-hidden="true" />
          All case studies
        </Link>

        {/* Eyebrow */}
        <div className="flex flex-wrap items-center gap-2 mb-4">
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#4d6280]">
            <Briefcase size={11} aria-hidden="true" />
            {study.client}
          </span>
          <span className="text-[#253a5e]" aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#4d6280]">
            <Calendar size={11} aria-hidden="true" />
            {study.year}
          </span>
          <span className="text-[#253a5e]" aria-hidden="true">·</span>
          <span className="inline-flex items-center gap-1.5 text-xs font-medium text-[#4d6280]">
            <Tag size={11} aria-hidden="true" />
            {study.industry}
          </span>
        </div>

        {/* Title */}
        <h1 className="font-display text-3xl sm:text-4xl font-bold text-[#e8ecf4] leading-tight mb-6">
          {study.title}
        </h1>

        {/* Outcome strip */}
        <div className="flex flex-wrap gap-3 mb-10 p-5 rounded-xl border border-[#1e2d45] bg-[#131926]/60">
          {study.metrics.map((m) => (
            <div key={m.label} className="flex flex-col">
              <span className="accent-gradient-text font-display text-2xl font-bold leading-none">{m.value}</span>
              <span className="text-xs text-[#8fa3c0] mt-0.5">{m.label}</span>
            </div>
          ))}
        </div>

        {/* Tags */}
        <div className="flex flex-wrap gap-2 mb-12">
          {study.tags.map((tag) => (
            <span key={tag} className="skill-chip">{tag}</span>
          ))}
        </div>

        {/* Content sections */}
        <div className="space-y-10 text-[0.9375rem] leading-[1.75]">
          <CaseSection title="Context">
            <p className="text-[#8fa3c0]">{study.context}</p>
          </CaseSection>

          <CaseSection title="The Problem">
            <p className="text-[#8fa3c0]">{study.problem}</p>
          </CaseSection>

          <CaseSection title="What I Owned">
            <p className="text-[#8fa3c0]">{study.ownership}</p>
          </CaseSection>

          <CaseSection title="Approach">
            <ol className="space-y-3" aria-label="Steps taken">
              {study.approach.map((step, i) => (
                <li key={i} className="flex gap-3">
                  <span
                    className="flex-shrink-0 w-6 h-6 rounded-full bg-indigo-600/20 border border-indigo-500/25 text-indigo-400 text-xs font-bold flex items-center justify-center mt-0.5"
                    aria-hidden="true"
                  >
                    {i + 1}
                  </span>
                  <span className="text-[#8fa3c0]">{step}</span>
                </li>
              ))}
            </ol>
          </CaseSection>

          <CaseSection title="Stack">
            <div className="flex flex-wrap gap-2">
              {study.stack.map((tool) => (
                <span key={tool} className="skill-chip">{tool}</span>
              ))}
            </div>
          </CaseSection>

          <CaseSection title="Result">
            <div className="flex gap-3 p-5 rounded-xl border border-emerald-500/20 bg-emerald-500/5">
              <CheckCircle2 size={20} className="text-emerald-400 flex-shrink-0 mt-0.5" aria-hidden="true" />
              <p className="text-[#8fa3c0]">{study.result}</p>
            </div>
          </CaseSection>

          <CaseSection title="Reflection">
            <p className="text-[#8fa3c0] italic border-l-2 border-indigo-500/40 pl-4">{study.reflection}</p>
          </CaseSection>
        </div>

        {/* Prev / Next nav */}
        <div className="mt-16 pt-10 border-t border-[#1e2d45] grid grid-cols-1 sm:grid-cols-2 gap-4">
          {prev ? (
            <Link
              to={`/case-studies/${prev.slug}`}
              className="glass-card glass-card-hover rounded-xl p-5 flex flex-col gap-1"
              aria-label={`Previous case study: ${prev.shortTitle}`}
            >
              <span className="text-xs text-[#4d6280] flex items-center gap-1">
                <ArrowLeft size={11} aria-hidden="true" /> Previous
              </span>
              <span className="font-display font-semibold text-sm text-[#e8ecf4] leading-tight">{prev.shortTitle}</span>
            </Link>
          ) : (
            <div />
          )}

          {next ? (
            <Link
              to={`/case-studies/${next.slug}`}
              className="glass-card glass-card-hover rounded-xl p-5 flex flex-col gap-1 sm:text-right"
              aria-label={`Next case study: ${next.shortTitle}`}
            >
              <span className="text-xs text-[#4d6280] flex items-center gap-1 sm:justify-end">
                Next <ArrowRight size={11} aria-hidden="true" />
              </span>
              <span className="font-display font-semibold text-sm text-[#e8ecf4] leading-tight">{next.shortTitle}</span>
            </Link>
          ) : (
            <div />
          )}
        </div>
      </div>
    </main>
  );
}

function CaseSection({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <section aria-labelledby={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}>
      <h2
        id={`section-${title.toLowerCase().replace(/\s+/g, '-')}`}
        className="font-display text-lg font-bold text-[#e8ecf4] mb-4"
      >
        {title}
      </h2>
      {children}
    </section>
  );
}
