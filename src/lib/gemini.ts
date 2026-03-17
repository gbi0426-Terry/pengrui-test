import { GoogleGenAI, Type } from '@google/genai';
import { ApplicationData, EvaluationResult } from '../types';
import { calculateRiskScore, getClassification } from './scoring';

export async function generateEvaluationReport(data: ApplicationData): Promise<EvaluationResult> {
  const score = calculateRiskScore(data);
  const classification = getClassification(score);

  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error('GEMINI_API_KEY is not set');
  }

  const ai = new GoogleGenAI({ apiKey });

  const prompt = `
    You are an expert AI Loan Underwriter. Analyze the following loan application data and provide a structured evaluation report.
    
    Applicant Data:
    ${JSON.stringify(data, null, 2)}
    
    Calculated Risk Score: ${score}/100
    Classification: ${classification} (Green = Eligible, Yellow = Need Review, Red = High Risk)
    
    Provide a detailed summary and analysis based on this data.
    IMPORTANT: All text content in your JSON response MUST be written in Traditional Chinese (繁體中文).
  `;

  try {
    const response = await ai.models.generateContent({
      model: 'gemini-3-flash-preview',
      contents: prompt,
      config: {
        responseMimeType: 'application/json',
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            aiSummary: {
              type: Type.STRING,
              description: 'A concise 2-3 sentence summary of the applicant\'s overall risk profile and eligibility.',
            },
            analysis: {
              type: Type.OBJECT,
              properties: {
                creditEvaluation: { type: Type.STRING, description: 'Analysis of personal and company credit history.' },
                debtRatio: { type: Type.STRING, description: 'Analysis of their debt-to-asset ratio.' },
                assetStrength: { type: Type.STRING, description: 'Evaluation of their liquid and fixed assets.' },
                businessStability: { type: Type.STRING, description: 'Assessment of business age, revenue, and stability.' },
              },
              required: ['creditEvaluation', 'debtRatio', 'assetStrength', 'businessStability'],
            },
            recommendation: {
              type: Type.OBJECT,
              properties: {
                eligible: { type: Type.BOOLEAN, description: 'Whether they are recommended for a loan.' },
                suggestedLoanType: { type: Type.STRING, description: 'E.g., "Startup Loan", "Business Expansion Loan", "None"' },
                suggestedAmountRange: { type: Type.STRING, description: 'E.g., "$10,000 - $50,000", "Not applicable"' },
                requiredDocuments: {
                  type: Type.ARRAY,
                  items: { type: Type.STRING },
                  description: 'List of documents to request from the applicant.',
                },
              },
              required: ['eligible', 'suggestedLoanType', 'suggestedAmountRange', 'requiredDocuments'],
            },
          },
          required: ['aiSummary', 'analysis', 'recommendation'],
        },
      },
    });

    const resultText = response.text;
    if (!resultText) throw new Error('No response from AI');
    
    const parsed = JSON.parse(resultText);
    
    return {
      score,
      classification,
      aiSummary: parsed.aiSummary,
      analysis: parsed.analysis,
      recommendation: parsed.recommendation,
    };
  } catch (error) {
    console.error('Error generating AI report:', error);
    // Fallback in case of API failure
    return {
      score,
      classification,
      aiSummary: '目前無法生成 AI 總結，發生錯誤。請手動審查分數。',
      analysis: {
        creditEvaluation: '需人工審查。',
        debtRatio: '需人工審查。',
        assetStrength: '需人工審查。',
        businessStability: '需人工審查。',
      },
      recommendation: {
        eligible: classification === 'Green',
        suggestedLoanType: '待審查',
        suggestedAmountRange: '待定',
        requiredDocuments: ['身分證件', '銀行對帳單', '報稅證明'],
      },
    };
  }
}
