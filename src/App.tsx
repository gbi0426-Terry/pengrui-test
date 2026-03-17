import React, { useState } from 'react';
import { ApplicationData, initialApplicationData, EvaluationResult } from './types';
import { PersonalInfo } from './components/forms/PersonalInfo';
import { CompanyInfo } from './components/forms/CompanyInfo';
import { PersonalCredit } from './components/forms/PersonalCredit';
import { CompanyCredit } from './components/forms/CompanyCredit';
import { AdditionalInfo } from './components/forms/AdditionalInfo';
import { ResultReport } from './components/ResultReport';
import { generateEvaluationReport } from './lib/gemini';
import { Building2, Loader2 } from 'lucide-react';

export default function App() {
  const [formData, setFormData] = useState<ApplicationData>(initialApplicationData);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [result, setResult] = useState<EvaluationResult | null>(null);

  const updateData = (fields: Partial<ApplicationData>) => {
    setFormData(prev => ({ ...prev, ...fields }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    try {
      const report = await generateEvaluationReport(formData);
      setResult(report);
    } catch (error) {
      console.error("Failed to generate report", error);
      alert("生成報告失敗。請檢查您的 API 金鑰並重試。");
    } finally {
      setIsSubmitting(false);
      window.scrollTo(0, 0);
    }
  };

  const handleReset = () => {
    setFormData(initialApplicationData);
    setResult(null);
    window.scrollTo(0, 0);
  };

  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      {/* Header */}
      <header className="bg-white border-b border-gray-200 sticky top-0 z-50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-indigo-600 rounded-lg flex items-center justify-center shadow-sm">
              <Building2 className="w-6 h-6 text-white" />
            </div>
            <span className="text-xl font-bold text-gray-900 tracking-tight">AI 貸款資格審查系統</span>
          </div>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {result ? (
          <ResultReport result={result} onReset={handleReset} />
        ) : (
          <div className="space-y-8">
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden p-8 sm:p-12">
              <PersonalInfo data={formData} updateData={updateData} />
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden p-8 sm:p-12">
              <CompanyInfo data={formData} updateData={updateData} />
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden p-8 sm:p-12">
              <PersonalCredit data={formData} updateData={updateData} />
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden p-8 sm:p-12">
              <CompanyCredit data={formData} updateData={updateData} />
            </div>
            
            <div className="bg-white rounded-2xl shadow-sm border border-gray-200 overflow-hidden p-8 sm:p-12">
              <AdditionalInfo data={formData} updateData={updateData} />
            </div>

            <div className="flex justify-end pt-4">
              <button
                onClick={handleSubmit}
                disabled={isSubmitting}
                className="px-8 py-4 bg-indigo-600 text-white rounded-xl font-medium hover:bg-indigo-700 transition-colors shadow-md flex items-center text-lg w-full sm:w-auto justify-center"
              >
                {isSubmitting ? (
                  <>
                    <Loader2 className="w-6 h-6 mr-2 animate-spin" />
                    分析中...
                  </>
                ) : (
                  '送出申請'
                )}
              </button>
            </div>
          </div>
        )}
      </main>
    </div>
  );
}
