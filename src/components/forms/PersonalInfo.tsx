import React from 'react';
import { ApplicationData } from '../../types';

interface Props {
  data: ApplicationData;
  updateData: (fields: Partial<ApplicationData>) => void;
}

export function PersonalInfo({ data, updateData }: Props) {
  return (
    <div className="space-y-6">
      <h2 className="text-2xl font-semibold text-gray-900">個人資訊</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div>
          <label className="block text-sm font-medium text-gray-700">全名</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
            value={data.name}
            onChange={(e) => updateData({ name: e.target.value })}
            placeholder="王小明"
          />
        </div>
        
        <div>
          <label className="block text-sm font-medium text-gray-700">性別</label>
          <select
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
            value={data.gender}
            onChange={(e) => updateData({ gender: e.target.value })}
          >
            <option value="">請選擇性別</option>
            <option value="male">男</option>
            <option value="female">女</option>
            <option value="other">其他</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">年齡</label>
          <input
            type="number"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
            value={data.age}
            onChange={(e) => updateData({ age: e.target.value ? Number(e.target.value) : '' })}
            placeholder="30"
          />
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700">聯絡電話</label>
          <input
            type="tel"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
            value={data.phone}
            onChange={(e) => updateData({ phone: e.target.value })}
            placeholder="0912-345-678"
          />
        </div>

        <div className="md:col-span-2">
          <label className="block text-sm font-medium text-gray-700">居住地址</label>
          <input
            type="text"
            className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
            value={data.address}
            onChange={(e) => updateData({ address: e.target.value })}
            placeholder="台北市信義區信義路五段7號"
          />
        </div>

        <div className="md:col-span-2">
          <div className="flex items-center">
            <input
              id="experience"
              type="checkbox"
              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
              checked={data.experience}
              onChange={(e) => updateData({ experience: e.target.checked })}
            />
            <label htmlFor="experience" className="ml-2 block text-sm text-gray-900">
              您是否有相關商業/產業經驗？
            </label>
          </div>
        </div>

        {data.experience && (
          <div className="md:col-span-2">
            <label className="block text-sm font-medium text-gray-700">經驗說明</label>
            <textarea
              rows={3}
              className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm p-2 border"
              value={data.experience_details}
              onChange={(e) => updateData({ experience_details: e.target.value })}
              placeholder="請簡述您的相關經驗..."
            />
          </div>
        )}
      </div>
    </div>
  );
}
