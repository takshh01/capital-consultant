import { LoanType } from '../types/loan';

export interface LoanDetail {
  id: LoanType;
  title: string;
  category: 'Business & MSME' | 'Secured & Mortgage' | 'Retail & Personal' | 'Specialized & Structured';
  shortDesc: string;
  maxAmount: string;
  tentativeRate: string;
  tenure: string;
  highlights: string[];
  idealFor: string;
  keyDocuments: string[];
}

export const LOAN_SOLUTIONS: LoanDetail[] = [
  {
    id: 'Business Loan',
    title: 'Business Loan',
    category: 'Business & MSME',
    shortDesc: 'Unsecured business funding designed for operational expansion, inventory purchase, and working capital needs.',
    maxAmount: 'Up to ₹75 Lakhs (Unsecured)',
    tentativeRate: '14% to 20% p.a.',
    tenure: '12 to 60 Months',
    highlights: [
      'Zero collateral or security required',
      'Minimal documentation & fast processing',
      'Flexible repayment tenures',
      'Multi-bank lender assessment'
    ],
    idealFor: 'Proprietorships, Partnerships, Pvt Ltd companies with 1+ year operating vintage.',
    keyDocuments: ['3 Years ITR / Financials', '12 Months Bank Statements', 'GST Returns', 'KYC & Business Registration']
  },
  {
    id: 'MSME Loan',
    title: 'MSME Loan',
    category: 'Business & MSME',
    shortDesc: 'Priority lending schemes for Micro, Small & Medium Enterprises with competitive interest rates and structured repayment.',
    maxAmount: 'Up to ₹10 Crore',
    tentativeRate: '7% to 10.30% p.a.',
    tenure: 'Up to 7 Years',
    highlights: [
      'Priority sector lending benefits',
      'Both secured and unsecured options',
      'Interest rate subventions where applicable',
      'Working capital + term loan facilities'
    ],
    idealFor: 'Manufacturing, trade, and service MSME units with valid Udyam registration.',
    keyDocuments: ['Udyam Certificate', 'Audit Reports (if applicable)', 'GST Filings', 'Bank Statements']
  },
  {
    id: 'CGTMSE Loan',
    title: 'CGTMSE Loan',
    category: 'Business & MSME',
    shortDesc: 'Government credit guarantee scheme enabling micro & small enterprises to secure bank funding without third-party collateral.',
    maxAmount: 'Up to ₹5 Crore (No Third-Party Collateral)',
    tentativeRate: '7% to 10.30% p.a.',
    tenure: 'Up to 84 Months',
    highlights: [
      'Credit Guarantee Trust backed',
      'No third-party mortgage required',
      'Hybrid security model available',
      'Ideal for manufacturing & emerging service units'
    ],
    idealFor: 'New & existing Micro & Small enterprises seeking collateral-free institutional debt.',
    keyDocuments: ['Project Report / CMA Data', 'Udyam Registration', '2-3 Years Financials', 'Promoter KYC']
  },
  {
    id: 'Mudra Loan',
    title: 'Mudra Loan (PMMY)',
    category: 'Business & MSME',
    shortDesc: 'Pradhan Mantri Mudra Yojana funding divided into Shishu, Kishore, and Tarun categories for non-corporate micro units.',
    maxAmount: 'Up to ₹20 Lakhs (Tarun Plus Scheme)',
    tentativeRate: '7% to 10.30% p.a.',
    tenure: '36 to 60 Months',
    highlights: [
      'Zero collateral requirement',
      'Tailored for micro-entrepreneurs & shops',
      'Nominal processing fees',
      'Supported by all leading PSUs and RRBs'
    ],
    idealFor: 'Small shopkeepers, retail vendors, artisans, micro fabrication units.',
    keyDocuments: ['Quotation of Machinery / Items', 'Applicant KYC', 'Bank Statement', 'Proof of Business']
  },
  {
    id: 'Working Capital',
    title: 'Working Capital (CC / OD)',
    category: 'Business & MSME',
    shortDesc: 'Revolving Cash Credit (CC) and Overdraft (OD) limits to comfortably bridge debtor cycles and cash flow mismatches.',
    maxAmount: 'Customized based on turnover (₹25L to ₹50Cr+)',
    tentativeRate: '7% to 10.30% p.a.',
    tenure: 'Renewable Annually (12 Months)',
    highlights: [
      'Pay interest only on amount utilized',
      'Drawing power linked to stock and debtors',
      'Substantially lowers financing cost',
      'Letter of Credit (LC) & Bank Guarantee (BG) add-ons'
    ],
    idealFor: 'Wholesalers, traders, contractors, distributors with regular turnover.',
    keyDocuments: ['Audited Balance Sheets (3 Yrs)', 'CMA Report', 'Stock & Debtors Statement', 'GST Returns']
  },
  {
    id: 'Machinery / Equipment Finance',
    title: 'Machinery / Equipment Finance',
    category: 'Business & MSME',
    shortDesc: 'Capex funding for acquiring high-grade manufacturing, printing, medical, packaging, or construction machinery.',
    maxAmount: 'Up to 85% - 90% of Machine Value',
    tentativeRate: '7% to 10.30% p.a.',
    tenure: 'Up to 7 Years',
    highlights: [
      'The machine itself acts as primary hypothecation',
      'Customized moratorium during installation',
      'Option for both indigenous & imported equipment',
      'Capital subsidy assistance under central/state schemes'
    ],
    idealFor: 'Industrial manufacturers, print houses, pathology labs, plastic & CNC operators.',
    keyDocuments: ['Proforma Invoice / Quotation', 'Supplier Details', 'Company Financials', 'Machine Utility Plan']
  },
  {
    id: 'Loan Against Property',
    title: 'Loan Against Property (LAP)',
    category: 'Secured & Mortgage',
    shortDesc: 'Unlock high-ticket capital against your residential, commercial, or industrial property at substantially lower interest rates.',
    maxAmount: '₹50 Lakhs to ₹50 Crore+',
    tentativeRate: '10.30% to 18% p.a.',
    tenure: 'Up to 15 Years',
    highlights: [
      'Highest loan quantum with lowest monthly EMI burden',
      'Commercial, residential, or vacant approved plot accepted',
      'Long tenure reduces cash-flow strain',
      'Balance transfer with top-up available'
    ],
    idealFor: 'Business owners, promoters, and HNIs needing substantial liquidity for growth.',
    keyDocuments: ['Complete Chain of Property Deeds', 'Approved Map / Sanction', '3 Yrs Financials / ITR', 'Banking']
  },
  {
    id: 'Home Loan',
    title: 'Home Loan',
    category: 'Secured & Mortgage',
    shortDesc: 'Competitive retail home loans for purchasing ready-to-move flats, under-construction apartments, or self-construction.',
    maxAmount: 'Up to ₹10 Crore+',
    tentativeRate: '7.30% to 18% p.a.',
    tenure: 'Up to 30 Years',
    highlights: [
      'Lowest interest rates across institutional lenders',
      'PMAY subsidy guidance where eligible',
      'Fast sanction with transparent legal check',
      'Balance transfer facility with attractive top-up'
    ],
    idealFor: 'Salaried professionals, self-employed businessmen purchasing residential real estate.',
    keyDocuments: ['Salary Slips / 3 Yrs ITR', 'Builder Allotment / Title Documents', 'Form 16 / Proof of Income', 'KYC']
  },
  {
    id: 'NPA Cases',
    title: 'NPA Cases',
    category: 'Specialized & Structured',
    shortDesc: 'Structured financial resolution for Non-Performing Assets, enabling recovery and settlement.',
    maxAmount: 'Case-specific assessment',
    tentativeRate: '8.30% to 18% p.a.',
    tenure: 'As per resolution plan',
    highlights: [
      'Strategic debt restructuring',
      'Liaison with bank recovery cells',
      'Structured repayment settlement',
      'Clearance of NPA status'
    ],
    idealFor: 'Businesses facing temporary liquidity distress and NPA classification.',
    keyDocuments: ['Bank Notice / Communication', 'Financial Statements', 'Asset Details', 'KYC']
  },
  {
    id: 'Project Finance',
    title: 'Project Finance',
    category: 'Specialized & Structured',
    shortDesc: 'Comprehensive debt structuring and consortium syndication for large infrastructure, hospitality, warehouse, and factory setups.',
    maxAmount: '₹5 Crore to ₹150 Crore+',
    tentativeRate: 'Structured on Project Rating',
    tenure: '7 to 15 Years (including moratorium)',
    highlights: [
      'Detailed Techno-Economic Viability (TEV) alignment',
      'Debt syndication across consortium of banks',
      'Construction phase interest capitalization (IDC)',
      'Escrow and waterfall mechanism structuring'
    ],
    idealFor: 'Infrastructure developers, manufacturing plant builders, hotels, hospitals.',
    keyDocuments: ['Detailed Project Report (DPR)', 'Statutory Clearances & Approvals', 'Promoter Contribution Proof', 'TEV Report']
  },
  {
    id: 'Bill Discounting',
    title: 'Bill Discounting / Invoice Factoring',
    category: 'Specialized & Structured',
    shortDesc: 'Immediate liquidity against certified invoices raised to corporate buyers and blue-chip enterprises.',
    maxAmount: 'Up to 80% - 90% of Invoice Value',
    tentativeRate: 'From 9.50% annualized',
    tenure: '30 to 120 Days per cycle',
    highlights: [
      'Zero long-term debt liability on balance sheet',
      'Eliminates working capital lock-in from delayed buyer payments',
      'TReDS and non-TReDS institutional setups',
      'Fast revolving credit line'
    ],
    idealFor: 'Vendors, suppliers, subcontractors, auto component suppliers, logistics providers.',
    keyDocuments: ['Accepted Invoices & PO Copies', 'E-Way Bills / Proof of Delivery', 'Debtor Ageing Profile', 'GST Data']
  },
  {
    id: 'Equity Funds',
    title: 'Equity Funds & Investor Syndication',
    category: 'Specialized & Structured',
    shortDesc: 'Strategic equity structuring, family office syndication, and private equity matchmaking for high-growth enterprises.',
    maxAmount: '₹5 Crore to ₹50 Crore+',
    tentativeRate: 'Equity Stake / Structured Royalty',
    tenure: 'Strategic Horizon (3-7 Years)',
    highlights: [
      'Zero debt-servicing monthly EMI obligation',
      'Strategic mentoring & governance value addition',
      'Access to reputable family offices and funds',
      'Pitch-deck and financial modeling guidance'
    ],
    idealFor: 'Fast-scaling MSMEs, tech enabled manufacturing, D2C brands, and growth companies.',
    keyDocuments: ['Pitch Deck & Information Memorandum', '3 Yrs Audited Financials', 'Cap Table & Valuations', 'Growth Forecasts']
  },
  {
    id: 'Private Funding',
    title: 'Private Funding / Short-Term Bridge',
    category: 'Specialized & Structured',
    shortDesc: 'Specialized bridge capital from institutional HNIs and private NBFCs for urgent business transitions and auction properties.',
    maxAmount: '₹1 Crore to ₹25 Crore',
    tentativeRate: 'Case to Case Assessment',
    tenure: '3 to 24 Months',
    highlights: [
      'Urgent clearance when conventional banks take too long',
      'Flexible collateral terms (mortgage / promoter pledge)',
      'Bridge finance until primary bank loan sanctions',
      'Strict legal confidentiality'
    ],
    idealFor: 'Promoters needing urgent bridge capital for auction settlement, raw material buys, or tax clearance.',
    keyDocuments: ['Collateral Property Documents', 'Business Financials', 'Exit / Takeout Strategy Roadmap', 'KYC']
  }
];
