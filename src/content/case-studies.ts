export interface CaseStudy {
  slug: string;
  title: string;
  shortTitle: string;
  client: string;
  year: string;
  role: string;
  industry: string;
  outcome: string;
  tags: string[];
  metrics: { value: string; label: string }[];
  gradient: string;
  context: string;
  problem: string;
  ownership: string;
  approach: string[];
  stack: string[];
  result: string;
  reflection: string;
}

export const CASE_STUDIES: CaseStudy[] = [
  {
    slug: 'fpa-trend-monitoring-pipeline',
    title: 'Rebuilding an FP&A Monitoring Pipeline from Zero Documentation',
    shortTitle: 'FP&A Trend Monitoring Pipeline',
    client: 'SquareTrade Europe',
    year: '2023',
    role: 'Commercial Analyst',
    industry: 'Insurance · Consumer Electronics',
    outcome: 'Reduced reporting cycle time by 70%+ and eliminated 15+ hours of weekly manual processing across 9+ European markets.',
    tags: ['Python', 'SQL', 'Microsoft Fabric', 'FP&A', 'Automation'],
    metrics: [
      { value: '70%+', label: 'Reporting time reduction' },
      { value: '15 hrs+', label: 'Weekly hours eliminated' },
      { value: '9+', label: 'Markets covered' },
    ],
    gradient: 'from-indigo-600/20 via-blue-600/10 to-transparent',
    context:
      'SquareTrade Europe operates a complex multi-partner insurance and warranty business across major European markets. Commercial analysts were responsible for tracking plan performance, partner economics, and margin trends — but the reporting infrastructure had grown organically with no documentation and heavy manual Excel dependency.',
    problem:
      'When I joined the function, the FP&A monitoring pipeline existed mainly in the muscle memory of one senior analyst. There were no documented data sources, no clear ownership of transformation logic, and monthly reports that required 15+ hours of manual copy-paste consolidation across fragmented files. When that analyst was unavailable, the entire reporting cycle broke.',
    ownership:
      'I owned the full end-to-end rebuild: from reverse-engineering the existing logic through to building a documented, automated pipeline, with stakeholder sign-off on the output format.',
    approach: [
      'Mapped existing data sources by tracing formulas in the legacy Excel files back to their origins in NetSuite and PostgreSQL.',
      'Built a Python-based extraction and transformation layer that replaced all manual copy-paste steps with reproducible scripts.',
      'Migrated the pipeline to Microsoft Fabric for incremental refresh, removing the batch dependency on manual file drops.',
      'Wrote inline documentation and a handoff guide so any analyst could run, troubleshoot, or extend the pipeline without tribal knowledge.',
      'Delivered an output format that matched the existing reporting template so stakeholders saw no disruption to how they consumed the data.',
    ],
    stack: ['Python', 'Pandas', 'SQL', 'PostgreSQL', 'Microsoft Fabric', 'NetSuite', 'openpyxl'],
    result:
      'The rebuilt pipeline cut reporting preparation time by more than 70% and eliminated all manual consolidation steps. The 15+ hours per month previously spent on copy-paste assembly were fully automated. The pipeline ran reliably across all 9+ European partner markets and was fully documented for team continuity.',
    reflection:
      'The hardest part was not the technical work — it was convincing stakeholders to trust that automated output matched the numbers they were used to. Parallel-running the old and new pipelines for three reporting cycles before cutover was the right call. It took longer, but it removed every objection.',
  },
  {
    slug: 'partner-profitability-dashboard',
    title: 'Making Partner Profitability Visible Across a European Insurance Portfolio',
    shortTitle: 'Partner Profitability P&L Dashboard',
    client: 'SquareTrade Europe',
    year: '2023',
    role: 'Commercial Analyst',
    industry: 'Insurance · Consumer Electronics',
    outcome: 'Delivered the first consolidated partner P&L view across 9+ European markets, enabling margin-by-partner decisions that were previously impossible.',
    tags: ['Power BI', 'SQL', 'DAX', 'Financial Modeling', 'Partner Analytics'],
    metrics: [
      { value: '9+', label: 'Partners analyzed' },
      { value: '1st', label: 'Consolidated P&L view ever built' },
      { value: '4', label: 'Revenue streams modeled per partner' },
    ],
    gradient: 'from-emerald-600/20 via-teal-600/10 to-transparent',
    context:
      'Partner profitability was tracked in disconnected spreadsheets maintained by different analysts. Leadership had no single view of which partners were margin-accretive and which were eroding profitability through claims, overheads, or structural pricing misalignment.',
    problem:
      'Without a consolidated partner P&L, commercial negotiations lacked data leverage. Decisions about partner fee structures, claim thresholds, and contract renewals were made on intuition and partial data. Building a complete picture required joining data from multiple systems with different granularities and business-rule interpretations.',
    ownership:
      'I designed the data model, wrote all SQL transformation logic, and built the Power BI report. I also defined the partner P&L structure in consultation with Finance and Commercial leadership.',
    approach: [
      'Mapped the revenue and cost components for each partner: premium income, claims paid, admin overhead allocation, and partner fees.',
      'Built SQL views that joined NetSuite financial data with operational PostgreSQL tables to produce a per-partner income statement structure.',
      'Modeled gross margin, net contribution, and loss ratio for each partner at monthly granularity.',
      'Built the Power BI report with partner-level and portfolio-level views, trend lines, and period-over-period variance analysis.',
      'Added an anomaly layer that flagged partners whose loss ratios exceeded pre-set thresholds, surfacing early warning signals.',
    ],
    stack: ['Power BI', 'DAX', 'SQL', 'PostgreSQL', 'NetSuite', 'Excel (openpyxl)', 'Python'],
    result:
      'Leadership had, for the first time, a single dashboard showing P&L by partner with drill-through to underlying driver detail. The tool was used in commercial review meetings to support three partner renegotiations and informed pricing structure changes for two underperforming partnerships.',
    reflection:
      'Partner P&L work is highly political — different teams have incentives to show different numbers. I learned to define each metric with Finance sign-off first, before building anything. The audit trail from source table to final number was essential to getting the report accepted.',
  },
  {
    slug: 'netsuite-warehouse-reconciliation',
    title: 'Reconciling NetSuite and Warehouse Data Before Margin Reporting Broke',
    shortTitle: 'ERP Reconciliation Pipeline',
    client: 'SquareTrade Europe',
    year: '2022',
    role: 'Commercial Analyst',
    industry: 'Insurance · Consumer Electronics',
    outcome: 'Detected 3,621 duplicate claim records distorting margin reports and built a reconciliation pipeline that flagged discrepancies before they reached finance.',
    tags: ['Python', 'SQL', 'Data Quality', 'ERP', 'Reconciliation'],
    metrics: [
      { value: '3,621', label: 'Duplicate records detected' },
      { value: '3', label: 'Systems reconciled (NetSuite, PostgreSQL, Fabric)' },
      { value: '100%', label: 'Pre-reporting coverage' },
    ],
    gradient: 'from-rose-600/20 via-orange-600/10 to-transparent',
    context:
      'SquareTrade\'s operational data lived in PostgreSQL while financial reporting ran through NetSuite, with Microsoft Fabric as the analytics warehouse. Over time, data had accumulated in the warehouse from multiple ingestion paths, and nobody had established a systematic reconciliation process to verify that the three systems agreed.',
    problem:
      'During a routine investigation of margin variance, I noticed claim counts in the analytics warehouse that didn\'t match the NetSuite ledger. Tracing the discrepancy revealed 3,621 duplicate claim records created by a double-ingestion bug. These records had inflated reported claim counts and understated gross margin — for an unknown period of time before I found them.',
    ownership:
      'I owned the investigation, the root-cause analysis, and the remediation. I also designed and built the ongoing reconciliation checks to prevent recurrence.',
    approach: [
      'Wrote SQL queries to cross-reference claim IDs across all three systems and identify records present in the warehouse but absent in NetSuite (and vice versa).',
      'Traced the duplicate records to a specific ingestion pipeline step where records were being processed twice on retry.',
      'Quantified the financial impact by re-running margin calculations with and without the duplicate records.',
      'Built a Python reconciliation job that runs nightly before any reporting queries consume the data, flagging discrepancies above a defined threshold.',
      'Documented the root cause and remediation for the engineering team to fix the underlying ingestion bug.',
    ],
    stack: ['Python', 'SQL', 'PostgreSQL', 'Microsoft Fabric', 'NetSuite', 'Pandas'],
    result:
      'The duplicate records were quarantined and margin reports were corrected. The reconciliation pipeline now runs automatically before every reporting cycle and flags any count or value discrepancy across the three systems. Zero margin reporting errors attributable to data-integrity issues since deployment.',
    reflection:
      'This was a reminder that data quality work is never glamorous but always high-stakes. Finding a 3,621-record discrepancy through a routine check — rather than a stakeholder complaint — is exactly what good data infrastructure should do. The reconciliation job I built is the kind of unglamorous thing that prevents very visible failures.',
  },
  {
    slug: 'cx-pilot-power-analysis',
    title: 'Killing an Underpowered CX Pilot Before It Burned Budget',
    shortTitle: 'CX Pilot Statistical Power Analysis',
    client: 'SquareTrade Europe',
    year: '2023',
    role: 'Commercial Analyst',
    industry: 'Insurance · Consumer Electronics',
    outcome: 'Sample-size analysis showed the pilot was 176× too small to detect the target effect, stopping a multi-month experiment before it produced meaningless results.',
    tags: ['Python', 'Statistics', 'A/B Testing', 'Power Analysis', 'Experiment Design'],
    metrics: [
      { value: '176×', label: 'Sample gap identified' },
      { value: '0', label: 'Budget wasted on underpowered test' },
      { value: '1', label: 'Experiment design framework built for reuse' },
    ],
    gradient: 'from-amber-600/20 via-yellow-600/10 to-transparent',
    context:
      'A cross-functional team proposed a CX improvement pilot to test whether a change in claims communication would improve customer satisfaction scores. The proposal included a timeline and a target metric, but no statistical design — no defined sample size, no power calculation, and no minimum detectable effect.',
    problem:
      'The pilot was being scoped for 2 weeks with a sample of roughly 200 customers. The target improvement was a 5% increase in CSAT. Nobody had checked whether 200 observations was sufficient to detect a 5-point change with any statistical confidence. The risk was running a 2-month experiment and walking away with results that could not support or reject the hypothesis either way.',
    ownership:
      'I was asked to review the experimental design before launch. I ran the power analysis, communicated the findings to the project owner, and built a reusable sample-size calculator for future use.',
    approach: [
      'Obtained the baseline CSAT distribution and variance from historical data.',
      'Calculated the required sample size for 80% power at a 5% significance level to detect a 5-point change in CSAT.',
      'The calculation showed a minimum of 35,200 observations were needed — compared to the proposed 200.',
      'Modeled what effect size the proposed sample of 200 could reliably detect: approximately a 70-point shift, which was implausible.',
      'Built a reusable Python power analysis tool with configurable effect size, alpha, and power parameters for the team.',
    ],
    stack: ['Python', 'SciPy', 'Statsmodels', 'Pandas', 'Jupyter Notebooks'],
    result:
      'The pilot was paused before launch. The project team revised the design: either scale up the sample or reduce the target effect size to something the available sample could support. The power analysis tool was adopted for subsequent experiment proposals. Two later pilots used it to validate their sample design before submission.',
    reflection:
      'Statistical power analysis is one of the highest-leverage analytical contributions you can make because it prevents expensive mistakes before they happen, not after. The challenge is always communication: explaining to a non-technical stakeholder why their proposed experiment can\'t answer their question, without making them feel like analytics is a blocker rather than an enabler.',
  },
];
