import React from 'react';
import { Check } from 'lucide-react';

interface Props {
  currentStep: number;
  totalSteps: number;
  steps: string[];
}

export function StepIndicator({ currentStep, totalSteps, steps }: Props) {
  return (
    <div className="w-full py-6">
      <div className="flex items-center justify-between relative">
        <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full h-1 bg-gray-200 rounded-full -z-10"></div>
        <div 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 h-1 bg-indigo-600 rounded-full -z-10 transition-all duration-300 ease-in-out"
          style={{ width: `${((currentStep - 1) / (totalSteps - 1)) * 100}%` }}
        ></div>
        
        {steps.map((step, index) => {
          const stepNumber = index + 1;
          const isCompleted = stepNumber < currentStep;
          const isCurrent = stepNumber === currentStep;
          
          return (
            <div key={step} className="flex flex-col items-center relative z-10">
              <div 
                className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-medium border-2 transition-colors duration-300
                  ${isCompleted 
                    ? 'bg-indigo-600 border-indigo-600 text-white' 
                    : isCurrent 
                      ? 'bg-white border-indigo-600 text-indigo-600' 
                      : 'bg-white border-gray-300 text-gray-400'
                  }`}
              >
                {isCompleted ? <Check className="w-5 h-5" /> : stepNumber}
              </div>
              <span className={`mt-2 text-xs font-medium hidden sm:block absolute -bottom-6 w-32 text-center
                ${isCurrent ? 'text-indigo-600' : 'text-gray-500'}`}
              >
                {step}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}
