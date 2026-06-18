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
    title: 'Automating FP&A Monitoring for a Multi-Market European Warranty Business',
    shortTitle: 'FP&A Monitoring Automation',
    client: 'SquareTrade Europe',
    year: '2025',
    role: 'Commercial Analyst',
    industry: 'Insurance / Consumer Electronics / FP&A Automation',
    outcome:
      'Reduced reporting preparation time by more than 70% and eliminated over 15 hours of manual work per reporting cycle across 9+ European markets.',
    tags: ['Python', 'Pandas', 'PostgreSQL', 'Microsoft Fabric', 'NetSuite', 'Reporting Automation'],
    metrics: [
      { value: '70%+', label: 'Reporting time reduced' },
      { value: '15+ hrs', label: 'Manual work eliminated' },
      { value: '9+', label: 'European markets supported' },
    ],
    gradient: 'from-indigo-600/20 via-blue-600/10 to-transparent',
    context:
      'SquareTrade Europe operates a multi-partner insurance and warranty business across several European markets. The commercial finance team needed to monitor partner performance, plan economics, cancellations, claims, premiums, and margin trends across fragmented data sources. The existing reporting process relied heavily on Excel-based consolidation, manual file handling, and knowledge held by experienced analysts, creating a continuity risk for reporting that needed to be repeatable, auditable, and easy to hand over.',
    problem:
      'The FP&A monitoring process had grown organically over time. Key transformation logic was embedded inside Excel files, source data came from multiple systems, and documentation was limited. Monthly and weekly reporting required significant manual copy-paste work, reconciliation, and checks before outputs could be shared with stakeholders. This made the process slow, fragile, and dependent on individual knowledge rather than a repeatable system.',
    ownership:
      'I rebuilt the reporting workflow from a manual Excel-heavy process into a more structured, documented, and automated FP&A monitoring pipeline. My role covered process discovery, data-source mapping, transformation logic, automation, validation, documentation, and stakeholder handover.',
    approach: [
      'Reverse-engineered the existing reporting logic by tracing formulas, linked files, manual adjustments, and source extracts to separate real business logic from manual workarounds.',
      'Mapped the source data across finance, partner, policy, premium, cancellation, and claims-related datasets so each reporting number had a clearer origin and reconciliation path.',
      'Built reusable Python scripts with Pandas and SQL to clean, transform, and consolidate data, replacing manual copy-paste steps with a workflow that could be rerun and audited.',
      'Improved refresh and scalability by structuring the workflow for repeatable refreshes across multiple European markets and aligning it with Microsoft Fabric where applicable.',
      'Created documentation and handover material covering process flow, data sources, transformation steps, assumptions, and troubleshooting points.',
      'Validated outputs with stakeholders by comparing automated results against existing reporting templates before cutover.',
    ],
    stack: ['Python', 'Pandas', 'SQL', 'PostgreSQL', 'Microsoft Fabric', 'NetSuite', 'openpyxl'],
    result:
      'The rebuilt FP&A monitoring workflow reduced reporting preparation time by more than 70% and eliminated over 15 hours of manual work per reporting cycle. It supported reporting across 9+ European markets and improved process reliability, documentation, and team continuity. The biggest improvement was not only speed: the process became easier to validate, easier to hand over, and less dependent on individual memory.',
    reflection:
      'The hardest part was not writing the automation. The harder part was earning trust in the automated numbers. In finance reporting, stakeholders do not accept automation just because it is faster. They need confidence that the new output matches the business logic they already rely on. Running the old and new processes in parallel before full transition reduced resistance and gave stakeholders confidence in the new workflow.',
  },
  {
    slug: 'partner-profitability-dashboard',
    title: 'Building a Partner-Level P&L Model for European Warranty Portfolio Analysis',
    shortTitle: 'Partner-Level P&L Model',
    client: 'SquareTrade Europe',
    year: '2025',
    role: 'Commercial Analyst',
    industry: 'Insurance / Consumer Electronics / Partner Profitability',
    outcome:
      'Created a repeatable partner-level profitability view that connected commercial performance with financial outcomes across European warranty markets.',
    tags: ['SQL', 'Python', 'Tableau / Power BI', 'NetSuite', 'PostgreSQL', 'Financial Modeling'],
    metrics: [
      { value: '9+', label: 'Partner markets analyzed' },
      { value: '4', label: 'Core streams modeled' },
      { value: 'Monthly', label: 'Profitability view created' },
    ],
    gradient: 'from-emerald-600/20 via-teal-600/10 to-transparent',
    context:
      'SquareTrade Europe operates a multi-partner insurance and warranty portfolio across European markets. Each partner has different commercial structures, pricing terms, premium flows, claims behavior, cancellation patterns, and cost drivers. While portfolio-level reporting existed, partner-level profitability was difficult to analyze consistently because financial and operational data sat across multiple systems and spreadsheets.',
    problem:
      'Partner performance was being reviewed through fragmented reporting views. Revenue, claims, commissions, overheads, and operational drivers were not always connected in one repeatable structure. A partner could look strong from a sales perspective but weaker after claims, fees, overhead allocation, or pricing structure were considered. The challenge was to build a structured partner P&L model that connected finance data with operational data while keeping the logic transparent and explainable.',
    ownership:
      'I worked on building a partner-level profitability model that connected revenue, cost, and operational drivers into a single analytical view. My work included mapping the P&L structure, defining key metrics, preparing data logic, building transformation queries, and creating reporting outputs for finance and commercial review discussions.',
    approach: [
      'Defined the partner P&L structure by mapping major profitability components including premium income, claims cost, partner fees, commissions, overhead allocation, and net contribution.',
      'Connected finance and operational data from NetSuite, PostgreSQL, Excel-based finance files, and partner reporting outputs to create a more complete view of partner economics.',
      'Built repeatable SQL and Python transformation logic to clean, join, and structure data at partner and monthly level.',
      'Modeled key profitability metrics including gross margin, net contribution, loss ratio, claims severity, revenue per policy, and period-over-period movement.',
      'Created reporting views that allowed users to compare partner performance across markets, months, and profitability drivers.',
      'Added variance and exception analysis to highlight unusual movements in loss ratio, claims cost, revenue trends, and partner-level profitability.',
    ],
    stack: ['SQL', 'Python', 'Power BI', 'Tableau', 'DAX', 'PostgreSQL', 'NetSuite', 'Excel'],
    result:
      'The model created a clearer partner-level view of profitability across the European portfolio. It helped connect commercial performance with financial outcomes and gave stakeholders a stronger basis for reviewing pricing, partner economics, and margin drivers. Instead of looking only at sales volume or top-line revenue, the analysis showed whether each partner was contributing positively after claims, fees, and allocated costs.',
    reflection:
      'The hardest part of partner profitability work is not the dashboard. It is defining the numbers. Different teams can interpret profitability differently depending on whether they focus on revenue, gross margin, claims, contribution margin, or fully allocated profit. The most important lesson was to agree the metric definitions first, especially with Finance, before building the reporting layer.',
  },
  {
    slug: 'netsuite-warehouse-reconciliation',
    title: 'Reconciling NetSuite and Database Profitability for Partner Margin Reporting',
    shortTitle: 'NetSuite Profitability Reconciliation',
    client: 'SquareTrade Europe',
    year: '2025',
    role: 'Commercial Analyst',
    industry: 'Insurance / Consumer Electronics / Data Reconciliation',
    outcome:
      'Built a reconciliation bridge that made partner margin reporting more explainable by connecting operational database profitability with NetSuite financial profitability.',
    tags: ['SQL', 'Python', 'NetSuite', 'PostgreSQL', 'Microsoft Fabric', 'Data Reconciliation'],
    metrics: [
      { value: 'Partner-level', label: 'Profitability model created' },
      { value: 'NetSuite', label: 'Compared with database logic' },
      { value: 'Monthly', label: 'Margin reporting structured' },
    ],
    gradient: 'from-rose-600/20 via-orange-600/10 to-transparent',
    context:
      'SquareTrade Europe operates a multi-partner insurance and warranty portfolio across European markets. Partner profitability depends on several moving parts, including premiums, claims, cancellations, fees, commissions, and overhead allocations. Operational activity was available through database tables, while financial reporting and accounting outputs were maintained in NetSuite. Database-based profitability and NetSuite profitability did not always tell the same story because they were built from different sources, timings, accounting treatments, and levels of granularity.',
    problem:
      'Commercial and Finance teams needed a clearer view of partner profitability, but there was no simple bridge between operational database profitability and NetSuite financial profitability. Without a reconciliation structure, it was difficult to explain why profitability in the database differed from profitability in NetSuite. This created uncertainty when using partner-level margin reporting for commercial reviews, pricing discussions, and portfolio analysis.',
    ownership:
      'I worked on building the reconciliation logic behind a partner profitability dashboard. My responsibility was to compare database-calculated profitability with NetSuite profitability, identify the main drivers of variance, and structure the logic in a way that could be used for reporting and analysis.',
    approach: [
      'Mapped profitability components such as premium income, claims cost, commissions, partner fees, overhead allocation, and net contribution to separate operational drivers from accounting adjustments.',
      'Compared database logic with NetSuite reporting to understand not only where differences existed, but why they existed.',
      'Built a reconciliation bridge that connected operational profitability to accounting profitability and explained movements caused by timing, mapping, revenue recognition, cost allocation, or missing partner-level classification.',
      'Created partner-level variance analysis so users could identify where database and NetSuite outputs were aligned and where further review was required.',
      'Supported dashboard development by making reconciliation logic part of the foundation for partner profitability reporting.',
      'Improved transparency and auditability by documenting assumptions, data sources, and transformation logic for Finance, Commercial, and analytics stakeholders.',
    ],
    stack: ['SQL', 'Python', 'PostgreSQL', 'Microsoft Fabric', 'NetSuite', 'PySpark', 'Power BI'],
    result:
      'The project created a clearer bridge between database profitability and NetSuite profitability. It helped make partner margin reporting more explainable by showing where differences came from and which profitability components required deeper review. The work improved confidence in partner-level reporting because stakeholders could trace figures back to source logic rather than relying only on final dashboard numbers.',
    reflection:
      'Profitability reporting is not only a data problem. It is an accounting interpretation problem. Two systems can both be technically correct but still show different profitability because they answer different questions. The database reflects operational activity, while NetSuite reflects financial accounting treatment. Without reconciliation, a dashboard can look professional but still fail in a Finance review.',
  },
];
