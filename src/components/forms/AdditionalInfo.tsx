import React from 'react';
import { ApplicationData } from '../../types';

interface Props {
  data: ApplicationData;
  updateData: (fields: Partial<ApplicationData>) => void;
}

export function AdditionalInfo({ data, updateData }: Props) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">補充資訊</h2>
      
      <div className="space-y-4 bg-gray-50 p-6 rounded-xl border border-gray-100">
        <div className="flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="has_website"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              checked={data.has_website}
              onChange={(e) => updateData({ has_website: e.target.checked })}
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="has_website" className="font-medium text-gray-900">
              公司是否有活躍的官方網站或電商平台？
            </label>
            <p className="text-gray-500">數位足跡能對企業穩定度評分產生正面影響。</p>
          </div>
        </div>

        <div className="flex items-start">
          <div className="flex h-5 items-center">
            <input
              id="has_guarantor"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              checked={data.has_guarantor}
              onChange={(e) => updateData({ has_guarantor: e.target.checked })}
            />
          </div>
          <div className="ml-3 text-sm">
            <label htmlFor="has_guarantor" className="font-medium text-gray-900">
              是否能提供合格的保證人？
            </label>
            <p className="text-gray-500">擁有保證人能顯著提升貸款核准機率與條件。</p>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-blue-50 rounded-lg text-blue-800 text-sm">
        <p className="font-semibold mb-1">準備好送出了嗎？</p>
        <p>送出此表單後，我們的 AI 引擎將分析您的申請並即時生成風險評估報告。請確保您提供的所有資訊皆為正確。</p>
      </div>
    </div>
  );
}
