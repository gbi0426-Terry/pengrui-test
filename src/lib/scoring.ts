import { ApplicationData } from '../types';

export function calculateRiskScore(data: ApplicationData): number {
  let score = 50;

  // Negative Factors
  if (data.legal_issue) score -= 50;
  if (data.bounced_check) score -= 50;
  if (data.revolving_credit) score -= 20;
  if (data.cash_advance) score -= 20;

  // High debt ratio calculation
  const totalDebt =
    (Number(data.personal_loan_amount) || 0) +
    (Number(data.mortgage_amount) || 0) +
    (Number(data.car_loan_amount) || 0) +
    (Number(data.startup_loan_amount) || 0) +
    (Number(data.company_startup_loan) || 0) +
    (Number(data.company_business_loan) || 0) +
    (Number(data.company_car_loan) || 0);

  const totalAssets =
    (Number(data.bank_balance) || 0) +
    (Number(data.stocks) || 0) +
    (Number(data.funds) || 0) +
    (Number(data.fixed_deposit) || 0) +
    (Number(data.company_bank_balance) || 0) +
    (Number(data.company_fixed_deposit) || 0);

  const debtRatio = totalAssets > 0 ? totalDebt / totalAssets : totalDebt > 0 ? 1 : 0;
  if (debtRatio > 0.5) {
    score -= 30;
  }

  // Positive Factors
  if ((Number(data.annual_revenue) || 0) > 1000000) score += 30;
  if (data.real_estate || data.company_real_estate) score += 40;
  if ((Number(data.bank_balance) || 0) > 500000) score += 20;

  if (data.establishment_date) {
    const estDate = new Date(data.establishment_date);
    const ageInYears = (new Date().getTime() - estDate.getTime()) / (1000 * 60 * 60 * 24 * 365.25);
    if (ageInYears > 2) score += 20;
  }

  if (data.has_guarantor) score += 20;

  // Score Boundaries
  return Math.max(0, Math.min(100, score));
}

export function getClassification(score: number): 'Green' | 'Yellow' | 'Red' {
  if (score >= 60) return 'Green';
  if (score >= 30) return 'Yellow';
  return 'Red';
}
