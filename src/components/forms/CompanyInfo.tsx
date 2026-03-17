import React from 'react';
import { ApplicationData } from '../../types';

interface Props {
  data: ApplicationData;
  updateData: (fields: Partial<ApplicationData>) => void;
}

export function CompanyInfo({ data, updateData }: Props) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">公司資訊</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">公司名稱</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
            value={data.company_name}
            onChange={(e) => updateData({ company_name: e.target.value })}
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">統一編號 / 註冊號碼</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
            value={data.business_id}
            onChange={(e) => updateData({ business_id: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">公司類型</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
            value={data.business_type}
            onChange={(e) => updateData({ business_type: e.target.value })}
          >
            <option value="">請選擇類型</option>
            <option value="sole_proprietorship">獨資</option>
            <option value="partnership">合夥</option>
            <option value="llc">有限責任公司 (LLC)</option>
            <option value="corporation">股份有限公司</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">成立日期</label>
          <input
            type="date"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
            value={data.establishment_date}
            onChange={(e) => updateData({ establishment_date: e.target.value })}
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">公司地址</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
            value={data.company_address}
            onChange={(e) => updateData({ company_address: e.target.value })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">資本額 (元)</label>
          <input
            type="number"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
            value={data.capital_amount}
            onChange={(e) => updateData({ capital_amount: e.target.value ? Number(e.target.value) : '' })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">您的持股比例 (%)</label>
          <input
            type="number"
            max="100"
            min="0"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
            value={data.ownership_percentage}
            onChange={(e) => updateData({ ownership_percentage: e.target.value ? Number(e.target.value) : '' })}
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">年營業額 (元)</label>
          <input
            type="number"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
            value={data.annual_revenue}
            onChange={(e) => updateData({ annual_revenue: e.target.value ? Number(e.target.value) : '' })}
          />
        </div>

        <div className="flex flex-col justify-center space-y-4">
          <div className="flex items-center">
            <input
              id="has_invoice"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              checked={data.has_invoice}
              onChange={(e) => updateData({ has_invoice: e.target.checked })}
            />
            <label htmlFor="has_invoice" className="ml-2 block text-sm text-gray-900">
              是否能提供正式發票/收據？
            </label>
          </div>
          
          <div className="flex items-center">
            <input
              id="allow_site_visit"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              checked={data.allow_site_visit}
              onChange={(e) => updateData({ allow_site_visit: e.target.checked })}
            />
            <label htmlFor="allow_site_visit" className="ml-2 block text-sm text-gray-900">
              是否允許實地訪查？
            </label>
          </div>
        </div>
      </div>
    </div>
  );
}
