import React from 'react';
import { ApplicationData } from '../../types';

interface Props {
  data: ApplicationData;
  updateData: (fields: Partial<ApplicationData>) => void;
}

export function CompanyCredit({ data, updateData }: Props) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-gray-900">公司信用與資產</h2>
      
      {/* Loans Section */}
      <section>
        <div className="flex items-center mb-4">
          <input
            id="company_has_debt"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            checked={data.company_has_debt}
            onChange={(e) => updateData({ company_has_debt: e.target.checked })}
          />
          <label htmlFor="company_has_debt" className="ml-2 block text-lg font-medium text-gray-900">
            公司目前是否有任何貸款/負債？
          </label>
        </div>

        {data.company_has_debt && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-6 border-l-2 border-indigo-100">
            <div>
              <label className="block text-sm font-medium text-gray-700">創業貸款 (元)</label>
              <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" value={data.company_startup_loan} onChange={(e) => updateData({ company_startup_loan: e.target.value ? Number(e.target.value) : '' })} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">企業貸款 (元)</label>
              <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" value={data.company_business_loan} onChange={(e) => updateData({ company_business_loan: e.target.value ? Number(e.target.value) : '' })} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">公司車貸 (元)</label>
              <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" value={data.company_car_loan} onChange={(e) => updateData({ company_car_loan: e.target.value ? Number(e.target.value) : '' })} />
            </div>
          </div>
        )}
      </section>

      {/* Credit Section */}
      <section>
        <h3 className="text-lg font-medium text-gray-900 mb-4 border-b pb-2">公司信用紀錄</h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <input id="has_check" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" checked={data.has_check} onChange={(e) => updateData({ has_check: e.target.checked })} />
            <label htmlFor="has_check" className="ml-2 block text-sm text-gray-900">使用公司支票</label>
          </div>
          <div className="flex items-center">
            <input id="bounced_check" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" checked={data.bounced_check} onChange={(e) => updateData({ bounced_check: e.target.checked })} />
            <label htmlFor="bounced_check" className="ml-2 block text-sm text-gray-900">曾有退票紀錄</label>
          </div>
        </div>
      </section>

      {/* Risk Section */}
      <section>
        <h3 className="text-lg font-medium text-gray-900 mb-4 border-b pb-2">公司風險因素</h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <input id="company_legal_issue" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" checked={data.company_legal_issue} onChange={(e) => updateData({ company_legal_issue: e.target.checked })} />
            <label htmlFor="company_legal_issue" className="ml-2 block text-sm text-gray-900">公司是否有任何法律糾紛或訴訟？</label>
          </div>
          <div className="flex items-center">
            <input id="company_unpaid_tax" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" checked={data.company_unpaid_tax} onChange={(e) => updateData({ company_unpaid_tax: e.target.checked })} />
            <label htmlFor="company_unpaid_tax" className="ml-2 block text-sm text-gray-900">公司是否有任何未繳納之稅款或罰金？</label>
          </div>
        </div>
      </section>

      {/* Assets Section */}
      <section>
        <h3 className="text-lg font-medium text-gray-900 mb-4 border-b pb-2">公司資產</h3>
        <div className="flex items-center mb-4">
          <input id="company_real_estate" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" checked={data.company_real_estate} onChange={(e) => updateData({ company_real_estate: e.target.checked })} />
          <label htmlFor="company_real_estate" className="ml-2 block text-sm text-gray-900">公司名下擁有不動產</label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">公司銀行存款餘額 (元)</label>
            <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" value={data.company_bank_balance} onChange={(e) => updateData({ company_bank_balance: e.target.value ? Number(e.target.value) : '' })} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">公司定存金額 (元)</label>
            <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" value={data.company_fixed_deposit} onChange={(e) => updateData({ company_fixed_deposit: e.target.value ? Number(e.target.value) : '' })} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">公司車輛價值 (元)</label>
            <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" value={data.company_vehicles} onChange={(e) => updateData({ company_vehicles: e.target.value ? Number(e.target.value) : '' })} />
          </div>
        </div>
      </section>
    </div>
  );
}
