export interface ApplicationData {
  // Step 1: Personal Info
  name: string;
  gender: string;
  age: number | '';
  address: string;
  phone: string;
  experience: boolean;
  experience_details: string;

  // Step 2: Company Info
  company_name: string;
  business_id: string;
  business_type: string;
  company_address: string;
  establishment_date: string;
  capital_amount: number | '';
  ownership_percentage: number | '';
  has_invoice: boolean;
  annual_revenue: number | '';
  allow_site_visit: boolean;

  // Step 3: Personal Credit & Assets
  has_debt: boolean;
  personal_loan_amount: number | '';
  mortgage_amount: number | '';
  car_loan_amount: number | '';
  startup_loan_amount: number | '';
  has_credit_card: boolean;
  revolving_credit: boolean;
  cash_advance: boolean;
  legal_issue: boolean;
  unpaid_tax_or_penalty: boolean;
  real_estate: boolean;
  bank_balance: number | '';
  stocks: number | '';
  funds: number | '';
  insurance: number | '';
  fixed_deposit: number | '';

  // Step 4: Company Credit & Assets
  company_has_debt: boolean;
  company_startup_loan: number | '';
  company_business_loan: number | '';
  company_car_loan: number | '';
  has_check: boolean;
  bounced_check: boolean;
  company_legal_issue: boolean;
  company_unpaid_tax: boolean;
  company_real_estate: boolean;
  company_bank_balance: number | '';
  company_fixed_deposit: number | '';
  company_vehicles: number | '';

  // Step 5: Additional Info
  has_website: boolean;
  has_guarantor: boolean;
}

export const initialApplicationData: ApplicationData = {
  name: '',
  gender: '',
  age: '',
  address: '',
  phone: '',
  experience: false,
  experience_details: '',

  company_name: '',
  business_id: '',
  business_type: '',
  company_address: '',
  establishment_date: '',
  capital_amount: '',
  ownership_percentage: '',
  has_invoice: false,
  annual_revenue: '',
  allow_site_visit: false,

  has_debt: false,
  personal_loan_amount: '',
  mortgage_amount: '',
  car_loan_amount: '',
  startup_loan_amount: '',
  has_credit_card: false,
  revolving_credit: false,
  cash_advance: false,
  legal_issue: false,
  unpaid_tax_or_penalty: false,
  real_estate: false,
  bank_balance: '',
  stocks: '',
  funds: '',
  insurance: '',
  fixed_deposit: '',

  company_has_debt: false,
  company_startup_loan: '',
  company_business_loan: '',
  company_car_loan: '',
  has_check: false,
  bounced_check: false,
  company_legal_issue: false,
  company_unpaid_tax: false,
  company_real_estate: false,
  company_bank_balance: '',
  company_fixed_deposit: '',
  company_vehicles: '',

  has_website: false,
  has_guarantor: false,
};

export interface EvaluationResult {
  score: number;
  classification: 'Green' | 'Yellow' | 'Red';
  aiSummary: string;
  analysis: {
    creditEvaluation: string;
    debtRatio: string;
    assetStrength: string;
    businessStability: string;
  };
  recommendation: {
    eligible: boolean;
    suggestedLoanType: string;
    suggestedAmountRange: string;
    requiredDocuments: string[];
  };
}
