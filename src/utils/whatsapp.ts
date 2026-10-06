import { LoanEnquiryFormData, CallbackFormData } from '../types/loan';

export const BUSINESS_WHATSAPP_NUMBER = '919625456835';
export const BUSINESS_PHONE_DISPLAY = '+91 9650160139';
export const BUSINESS_WHATSAPP_DISPLAY = '+91 9625456835';
export const BUSINESS_EMAIL = 'capitalcatalystconsultant@gmail.com';
export const BUSINESS_OFFICE = 'Pragati Tower, Rajender Place, Delhi 110008';

/**
 * Builds the official structured WhatsApp message for a loan enquiry.
 */
export function formatLoanEnquiryWhatsAppMessage(data: LoanEnquiryFormData): string {
  const dynamicLines: string[] = [];

  const { dynamicFields, loanType } = data;

  if (dynamicFields.businessType) {
    dynamicLines.push(`Business Type: ${dynamicFields.businessType}`);
  }
  if (dynamicFields.purposeOfFunding) {
    dynamicLines.push(`Funding Purpose: ${dynamicFields.purposeOfFunding}`);
  }
  if (dynamicFields.propertyType) {
    dynamicLines.push(`Property Type: ${dynamicFields.propertyType}`);
  }
  if (dynamicFields.propertyValue) {
    dynamicLines.push(`Estimated Property Value: ₹${dynamicFields.propertyValue}`);
  }
  if (dynamicFields.propertyLocation) {
    dynamicLines.push(`Property Location: ${dynamicFields.propertyLocation}`);
  }
  if (dynamicFields.employmentType) {
    dynamicLines.push(`Employment Type: ${dynamicFields.employmentType}`);
  }
  if (dynamicFields.existingEmi) {
    dynamicLines.push(`Existing Monthly EMIs: ₹${dynamicFields.existingEmi}`);
  }
  if (dynamicFields.machineryType) {
    dynamicLines.push(`Machinery Type: ${dynamicFields.machineryType}`);
  }
  if (dynamicFields.machineryCost) {
    dynamicLines.push(`Machinery Cost: ₹${dynamicFields.machineryCost}`);
  }
  if (dynamicFields.projectEstimatedCost) {
    dynamicLines.push(`Total Project Cost: ₹${dynamicFields.projectEstimatedCost}`);
  }
  if (dynamicFields.existingBankingLimits) {
    dynamicLines.push(`Existing Limits: ${dynamicFields.existingBankingLimits}`);
  }
  if (dynamicFields.averageMonthlyBilling) {
    dynamicLines.push(`Avg Monthly Billing: ₹${dynamicFields.averageMonthlyBilling}`);
  }

  const dynamicSection = dynamicLines.length > 0 
    ? `\nSpecific Loan Details:\n${dynamicLines.join('\n')}\n` 
    : '';

  const message = [
    'NEW LOAN ENQUIRY',
    '━━━━━━━━━━━━━━━━',
    '',
    `Name: ${data.fullName.trim()}`,
    `Mobile: ${data.mobileNumber.trim()}`,
    `Email: ${data.email.trim() || 'Not Provided'}`,
    `City: ${data.city.trim() || 'Not Provided'}`,
    '',
    'Customer Type:',
    `${data.customerType}`,
    '',
    'Loan Required:',
    `${data.loanType}`,
    '',
    'Required Amount:',
    `₹${data.requiredLoanAmount}`,
    '',
    'Monthly Income / Turnover:',
    `₹${data.monthlyIncomeOrTurnover || 'Not Disclosed'}`,
    '',
    'Business Name:',
    `${data.businessName.trim() || 'N/A'}`,
    '',
    'Business Vintage:',
    `${data.businessVintage.trim() || 'N/A'}`,
    '',
    'Purpose:',
    `${data.purposeOfLoan.trim() || 'General Business / Financing Requirement'}`,
    dynamicSection.trim() ? `\n${dynamicSection.trim()}` : '',
    '',
    `Preferred Contact: ${data.preferredContactMethod}`,
    '',
    'Additional Requirement:',
    `${data.additionalMessage.trim() || 'Please advise best available bank/NBFC rate and eligibility.'}`,
    '',
    '━━━━━━━━━━━━━━━━',
    'SOURCE: CAPITAL CONSULTANCY WEBSITE',
    '━━━━━━━━━━━━━━━━',
    '',
    'Please contact this customer regarding their loan enquiry.'
  ].filter(line => line !== null && line !== undefined).join('\n');

  return message;
}

/**
 * Builds the structured WhatsApp message for a callback request.
 */
export function formatCallbackWhatsAppMessage(data: CallbackFormData): string {
  return [
    'CALLBACK REQUEST',
    '━━━━━━━━━━━━━━━━',
    '',
    `Name: ${data.name.trim()}`,
    `Mobile: ${data.mobile.trim()}`,
    `Loan Type: ${data.loanType}`,
    `Preferred Time: ${data.preferredTime}`,
    `Message: ${data.message.trim() || 'Please call me back at the earliest.'}`,
    '',
    '━━━━━━━━━━━━━━━━',
    'SOURCE: CAPITAL CONSULTANCY WEBSITE',
    '━━━━━━━━━━━━━━━━'
  ].join('\n');
}

/**
 * Builds the structured WhatsApp message for EMI Calculator.
 */
export function formatEmiWhatsAppMessage(params: {
  customerName?: string;
  loanAmount: number;
  interestRate: number;
  tenureYears: number;
  monthlyEmi: number;
  totalInterest: number;
  totalPayable: number;
}): string {
  const greeting = params.customerName && params.customerName.trim()
    ? `Hello Capital Consultancy, I am ${params.customerName.trim()}.`
    : `Hello Capital Consultancy,`;

  return [
    `${greeting} I calculated my estimated EMI on your website and would like to discuss my financing requirement.`,
    '',
    'LOAN ESTIMATION DETAILS',
    '━━━━━━━━━━━━━━━━',
    `Loan Amount: ₹${params.loanAmount.toLocaleString('en-IN')}`,
    `Interest Rate: ${params.interestRate}% p.a.`,
    `Loan Tenure: ${params.tenureYears} Years (${params.tenureYears * 12} Months)`,
    `Estimated EMI: ₹${params.monthlyEmi.toLocaleString('en-IN')}/month`,
    `Total Interest: ₹${params.totalInterest.toLocaleString('en-IN')}`,
    `Total Amount Payable: ₹${params.totalPayable.toLocaleString('en-IN')}`,
    '',
    '━━━━━━━━━━━━━━━━',
    'SOURCE: CAPITAL CONSULTANCY WEBSITE',
    '━━━━━━━━━━━━━━━━',
    'Please guide me on bank options and current sanction criteria.'
  ].join('\n');
}

/**
 * Builds the structured WhatsApp message for Requirement / Eligibility Checker.
 */
export function formatEligibilityWhatsAppMessage(params: {
  name: string;
  mobile: string;
  loanType: string;
  customerType: string;
  incomeOrTurnover: string;
  requiredAmount: string;
  creditScore: string;
  businessVintage: string;
  estimatedEligibility?: string;
}): string {
  return [
    'ELIGIBILITY / REQUIREMENT ENQUIRY',
    '━━━━━━━━━━━━━━━━',
    '',
    `Name: ${params.name.trim()}`,
    `Mobile: ${params.mobile.trim()}`,
    `Loan Type: ${params.loanType}`,
    `Customer / Employment: ${params.customerType}`,
    `Income / Annual Turnover: ₹${params.incomeOrTurnover}`,
    `Required Loan Amount: ₹${params.requiredAmount}`,
    `CIBIL / Credit Score Range: ${params.creditScore}`,
    `Business / Job Vintage: ${params.businessVintage}`,
    params.estimatedEligibility ? `Indicated Capacity: ${params.estimatedEligibility}` : '',
    '',
    'Note: Customer is seeking initial assessment subject to bank policies.',
    '',
    '━━━━━━━━━━━━━━━━',
    'SOURCE: CAPITAL CONSULTANCY WEBSITE',
    '━━━━━━━━━━━━━━━━'
  ].filter(Boolean).join('\n');
}

/**
 * Creates official WhatsApp Click-to-Chat URL
 */
export function createWhatsAppUrl(message: string, phoneNumber = BUSINESS_WHATSAPP_NUMBER): string {
  const cleanPhone = phoneNumber.replace(/[^0-9]/g, '');
  return `https://wa.me/${cleanPhone}?text=${encodeURIComponent(message)}`;
}

/**
 * Opens WhatsApp Click-to-Chat URL in a new window/tab safely
 */
export function openWhatsAppChat(message: string, phoneNumber = BUSINESS_WHATSAPP_NUMBER): void {
  const url = createWhatsAppUrl(message, phoneNumber);
  window.open(url, '_blank', 'noopener,noreferrer');
}
