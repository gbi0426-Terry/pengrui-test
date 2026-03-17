import React from 'react';
import { ApplicationData } from '../../types';

interface Props {
  data: ApplicationData;
  updateData: (fields: Partial<ApplicationData>) => void;
}

export function PersonalCredit({ data, updateData }: Props) {
  return (
    <div className="space-y-8">
      <h2 className="text-2xl font-semibold text-gray-900">個人信用與資產</h2>
      
      {/* Loans Section */}
      <section>
        <div className="flex items-center mb-4">
          <input
            id="has_debt"
            type="checkbox"
            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
            checked={data.has_debt}
            onChange={(e) => updateData({ has_debt: e.target.checked })}
          />
          <label htmlFor="has_debt" className="ml-2 block text-lg font-medium text-gray-900">
            您目前是否有任何個人貸款/負債？
          </label>
        </div>

        {data.has_debt && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pl-6 border-l-2 border-indigo-100">
            <div>
              <label className="block text-sm font-medium text-gray-700">個人信貸金額 (元)</label>
              <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" value={data.personal_loan_amount} onChange={(e) => updateData({ personal_loan_amount: e.target.value ? Number(e.target.value) : '' })} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">房貸金額 (元)</label>
              <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" value={data.mortgage_amount} onChange={(e) => updateData({ mortgage_amount: e.target.value ? Number(e.target.value) : '' })} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">車貸金額 (元)</label>
              <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" value={data.car_loan_amount} onChange={(e) => updateData({ car_loan_amount: e.target.value ? Number(e.target.value) : '' })} />
            </div>
            <div>
              <label className="block text-sm font-medium text-gray-700">創業貸款金額 (元)</label>
              <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" value={data.startup_loan_amount} onChange={(e) => updateData({ startup_loan_amount: e.target.value ? Number(e.target.value) : '' })} />
            </div>
          </div>
        )}
      </section>

      {/* Credit Section */}
      <section>
        <h3 className="text-lg font-medium text-gray-900 mb-4 border-b pb-2">信用紀錄</h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <input id="has_credit_card" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" checked={data.has_credit_card} onChange={(e) => updateData({ has_credit_card: e.target.checked })} />
            <label htmlFor="has_credit_card" className="ml-2 block text-sm text-gray-900">持有信用卡</label>
          </div>
          <div className="flex items-center">
            <input id="revolving_credit" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" checked={data.revolving_credit} onChange={(e) => updateData({ revolving_credit: e.target.checked })} />
            <label htmlFor="revolving_credit" className="ml-2 block text-sm text-gray-900">目前使用循環信用 (僅繳最低應繳金額)</label>
          </div>
          <div className="flex items-center">
            <input id="cash_advance" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" checked={data.cash_advance} onChange={(e) => updateData({ cash_advance: e.target.checked })} />
            <label htmlFor="cash_advance" className="ml-2 block text-sm text-gray-900">近期曾使用信用卡預借現金</label>
          </div>
        </div>
      </section>

      {/* Risk Section */}
      <section>
        <h3 className="text-lg font-medium text-gray-900 mb-4 border-b pb-2">風險因素</h3>
        <div className="space-y-3">
          <div className="flex items-center">
            <input id="legal_issue" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" checked={data.legal_issue} onChange={(e) => updateData({ legal_issue: e.target.checked })} />
            <label htmlFor="legal_issue" className="ml-2 block text-sm text-gray-900">是否有任何個人法律糾紛或訴訟？</label>
          </div>
          <div className="flex items-center">
            <input id="unpaid_tax_or_penalty" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-red-600 focus:ring-red-500" checked={data.unpaid_tax_or_penalty} onChange={(e) => updateData({ unpaid_tax_or_penalty: e.target.checked })} />
            <label htmlFor="unpaid_tax_or_penalty" className="ml-2 block text-sm text-gray-900">是否有任何未繳納之稅款或罰金？</label>
          </div>
        </div>
      </section>

      {/* Assets Section */}
      <section>
        <h3 className="text-lg font-medium text-gray-900 mb-4 border-b pb-2">個人資產</h3>
        <div className="flex items-center mb-4">
          <input id="real_estate" type="checkbox" className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500" checked={data.real_estate} onChange={(e) => updateData({ real_estate: e.target.checked })} />
          <label htmlFor="real_estate" className="ml-2 block text-sm text-gray-900">名下擁有不動產</label>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-sm font-medium text-gray-700">銀行存款餘額 (元)</label>
            <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" value={data.bank_balance} onChange={(e) => updateData({ bank_balance: e.target.value ? Number(e.target.value) : '' })} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">股票價值 (元)</label>
            <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" value={data.stocks} onChange={(e) => updateData({ stocks: e.target.value ? Number(e.target.value) : '' })} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">基金價值 (元)</label>
            <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" value={data.funds} onChange={(e) => updateData({ funds: e.target.value ? Number(e.target.value) : '' })} />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">定存金額 (元)</label>
            <input type="number" className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border" value={data.fixed_deposit} onChange={(e) => updateData({ fixed_deposit: e.target.value ? Number(e.target.value) : '' })} />
          </div>
        </div>
      </section>
    </div>
  );
}
