import React from 'react';
import { EvaluationResult } from '../types';
import { CheckCircle, AlertTriangle, XCircle, FileText, Download, RefreshCw } from 'lucide-react';

interface Props {
  result: EvaluationResult;
  onReset: () => void;
}

export function ResultReport({ result, onReset }: Props) {
  const getTrafficLight = () => {
    switch (result.classification) {
      case 'Green':
        return {
          color: 'bg-emerald-500',
          bg: 'bg-emerald-50',
          border: 'border-emerald-200',
          text: 'text-emerald-800',
          icon: <CheckCircle className="w-12 h-12 text-emerald-500" />,
          label: '符合資格',
        };
      case 'Yellow':
        return {
          color: 'bg-yellow-500',
          bg: 'bg-yellow-50',
          border: 'border-yellow-200',
          text: 'text-yellow-800',
          icon: <AlertTriangle className="w-12 h-12 text-yellow-500" />,
          label: '需人工審核',
        };
      case 'Red':
        return {
          color: 'bg-red-500',
          bg: 'bg-red-50',
          border: 'border-red-200',
          text: 'text-red-800',
          icon: <XCircle className="w-12 h-12 text-red-500" />,
          label: '高風險',
        };
    }
  };

  const style = getTrafficLight();

  return (
    <div className="max-w-4xl mx-auto space-y-8 animate-in fade-in slide-in-from-bottom-4 duration-500">
      {/* Header Card */}
      <div className={`rounded-2xl border ${style.border} ${style.bg} p-8 text-center relative overflow-hidden`}>
        <div className="absolute top-0 left-0 w-full h-2 flex">
          <div className={`h-full flex-1 ${result.classification === 'Green' ? 'bg-emerald-500' : 'bg-gray-200'}`} />
          <div className={`h-full flex-1 ${result.classification === 'Yellow' ? 'bg-yellow-500' : 'bg-gray-200'}`} />
          <div className={`h-full flex-1 ${result.classification === 'Red' ? 'bg-red-500' : 'bg-gray-200'}`} />
        </div>
        
        <div className="flex justify-center mb-4">{style.icon}</div>
        <h1 className={`text-4xl font-bold ${style.text} mb-2`}>{style.label}</h1>
        <div className="inline-flex items-center justify-center px-4 py-1 rounded-full bg-white/60 backdrop-blur-sm border border-white/20 shadow-sm mb-6">
          <span className="text-sm font-medium text-gray-600 mr-2">風險評分：</span>
          <span className="text-xl font-bold text-gray-900">{result.score} / 100</span>
        </div>
        <p className="text-lg text-gray-700 max-w-2xl mx-auto leading-relaxed">
          {result.aiSummary}
        </p>
      </div>

      {/* Analysis Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">信用評估</h3>
          <p className="text-gray-700">{result.analysis.creditEvaluation}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">負債比分析</h3>
          <p className="text-gray-700">{result.analysis.debtRatio}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">資產強度</h3>
          <p className="text-gray-700">{result.analysis.assetStrength}</p>
        </div>
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
          <h3 className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-4">企業穩定度</h3>
          <p className="text-gray-700">{result.analysis.businessStability}</p>
        </div>
      </div>

      {/* Recommendation Card */}
      <div className="bg-slate-900 rounded-2xl p-8 text-white shadow-lg">
        <h2 className="text-2xl font-semibold mb-6 flex items-center">
          <FileText className="w-6 h-6 mr-3 text-indigo-400" />
          最終建議
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="col-span-2 space-y-6">
            <div>
              <p className="text-slate-400 text-sm mb-1">建議貸款類型</p>
              <p className="text-xl font-medium">{result.recommendation.suggestedLoanType}</p>
            </div>
            <div>
              <p className="text-slate-400 text-sm mb-1">建議貸款額度</p>
              <p className="text-xl font-medium text-emerald-400">{result.recommendation.suggestedAmountRange}</p>
            </div>
          </div>
          
          <div className="bg-slate-800 rounded-xl p-5 border border-slate-700">
            <p className="text-slate-400 text-sm mb-3 font-medium">需補充文件</p>
            <ul className="space-y-2">
              {result.recommendation.requiredDocuments.map((doc, i) => (
                <li key={i} className="flex items-start text-sm">
                  <div className="w-1.5 h-1.5 rounded-full bg-indigo-400 mt-1.5 mr-2 shrink-0" />
                  <span className="text-slate-300">{doc}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="flex justify-center space-x-4 pt-4">
        <button
          onClick={() => window.print()}
          className="flex items-center px-6 py-3 bg-white border border-gray-300 rounded-lg text-gray-700 font-medium hover:bg-gray-50 transition-colors shadow-sm"
        >
          <Download className="w-4 h-4 mr-2" />
          匯出 PDF
        </button>
        <button
          onClick={onReset}
          className="flex items-center px-6 py-3 bg-indigo-600 text-white rounded-lg font-medium hover:bg-indigo-700 transition-colors shadow-sm"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          建立新申請
        </button>
      </div>
    </div>
  );
}
